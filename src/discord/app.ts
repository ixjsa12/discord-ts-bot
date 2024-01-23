import { Route, RouterType, json, error } from 'itty-router';
import { InteractionResponseType, InteractionType, verifyKey } from 'discord-interactions';
import { Interaction, InteractionResponse, InteractionTypeEnum, InteractionReqEnum } from './type';
import { Env } from '../worker';
export interface Command {
	name: string;
	description: string;
	type: InteractionReqEnum;
	options: any[];
	app: DiscordApp | null;
	initApp(app: DiscordApp): void;
	handel(request: Request, inc: Interaction, env: Env): Promise<InteractionResponse>;
}
class PingCommand implements Command {
	name = 'ping';
	description = 'ping';
	type = InteractionReqEnum.PING;
	options = [];
	app: DiscordApp | null = null;
	initApp(app: DiscordApp) {
		this.app = app;
	}
	async handel(request: Request, inc: Interaction, env: Env): Promise<InteractionResponse> {
		console.log('正在处理Ping请求');
		const interaction: Interaction = await request.json();
		const signature = request.headers.get('x-signature-ed25519');
		const timestamp = request.headers.get('x-signature-timestamp');
		const isValidRequest =
			signature &&
			timestamp &&
			verifyKey(JSON.stringify(interaction), signature, timestamp, '4d42097d76b3f4dd12c899a07b5afaa71fd2fa01fe824012fac484b2a96d4d22');
		if (isValidRequest) {
			return { type: InteractionTypeEnum.PONG };
		} else {
			throw 'error';
		}
	}
}
class RegCommand implements Command {
	name = 'refcmd';
	description = '刷新命令';
	type = InteractionReqEnum.APPLICATION_COMMAND;
	options = [];
	register = false;
	app: DiscordApp | null = null;
	initApp(app: DiscordApp) {
		this.app = app;
	}
	async handel(request: Request, inc: Interaction, env: Env): Promise<InteractionResponse> {
		console.log('正在处理刷新命令请求');
		let flag = await this.app.registerCommand();
		if (flag) {
			return {
				type: InteractionTypeEnum.CHANNEL_MESSAGE_WITH_SOURCE,
				data: {
					tts: false,
					content: '命令刷新成功!',
					embeds: [],
					allowed_mentions: {
						parse: ['users'],
						users: [],
					},
				},
			};
		} else {
			return {
				type: InteractionTypeEnum.CHANNEL_MESSAGE_WITH_SOURCE,
				data: {
					tts: false,
					content: '## 幻界Bot\r\n 非常抱歉命令注册失败，请联系管理员处理！',
					embeds: [],
					allowed_mentions: {
						parse: ['users'],
						users: [],
					},
				},
			};
		}
	}
}

export class DiscordApp {
	private appid: string;
	private token: string;
	private secret: string;
	private commands: Command[] = [];
	constructor(appid: string, token: string, secret: string) {
		this.appid = appid;
		this.token = token;
		this.secret = secret;
		this.commands.push(new PingCommand());
		this.commands.push(new RegCommand());
	}
	pushCommand(command: Command) {
		this.commands.push(command);
	}
	async registerCommand() {
		console.log('开始注册命令');
		if (this.commands == null) {
			return;
		}
		let commands = [];

		for (var i = 0; i < this.commands.length; i++) {
			const item = this.commands[i];
			//注册命令
			if (item.type === InteractionReqEnum.APPLICATION_COMMAND) {
				let cmd: any = {
					name: item.name,
					description: item.description,
				};
				if (item.options.length > 0) {
					cmd.options = item.options;
				}
				commands.push(cmd);
			}
		}
		console.log('all cmd', commands);
		const url = `https://discord.com/api/v10/applications/${this.appid}/commands`;
		console.log('url', url, this.token);
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bot ${this.token}`,
			},
			method: 'PUT',
			body: JSON.stringify(commands),
		});
		const resultBodu = await response.text();
		console.log('注册结果', resultBodu);
		if (response.ok) {
			return true;
		} else {
			return false;
		}
	}
	async fetch(input: RequestInfo, init?: RequestInit<RequestInitCfProperties>) {
		return fetch(
			'https://discord.com/api/v10/' + input,
			Object.assign(init || {}, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bot ${this.token}`,
				},
			}),
		);
	}
	async handel(request: Request, env: Env): Promise<Response> {
		const interaction: Interaction = await request.json();
		console.log('当前交互', JSON.stringify(interaction));
		const type = interaction.type;
		const cmd = this.commands.find((command) => command.type === type && interaction.data.name === command.name);
		console.log('当前命令', cmd);
		if (cmd) {
			if (!cmd.app) {
				cmd.initApp(this);
			}
			const rs = await cmd?.handel(request, interaction, env);
			return json(rs);
		}
		return json({
			type: InteractionTypeEnum.CHANNEL_MESSAGE_WITH_SOURCE,
			data: {
				tts: false,
				content: '非常抱歉，当前命令未定义处理程序!',
				embeds: [],
				allowed_mentions: {
					parse: ['users'],
					users: [],
				},
			},
		});
	}
}
