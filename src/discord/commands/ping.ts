import { Command, DiscordApp } from '../app';
import { Interaction, InteractionResponse, InteractionTypeEnum, InteractionReqEnum } from '../type';
import { Env } from '../../worker';
export class PingCommand implements Command {
	name = 'ping';
	description = '获取服务器延迟，以及服务器位置信息';
	type = InteractionReqEnum.APPLICATION_COMMAND;
	options = [];
	app: DiscordApp | null = null;
	initApp(app: DiscordApp) {
		this.app = app;
	}
	async handel(request: Request, inc: Interaction, env: Env): Promise<InteractionResponse> {
		return {
			type: InteractionTypeEnum.CHANNEL_MESSAGE_WITH_SOURCE,
			data: {
				tts: false,
				content: '### 幻界Bot \r\n ',
				embeds: [],
				allowed_mentions: {
					parse: ['users'],
					users: [],
				},
			},
		};
	}
}
