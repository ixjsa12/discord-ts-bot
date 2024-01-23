import { Command, DiscordApp } from '@src/discord/app';
import { Interaction, InteractionResponse, InteractionTypeEnum, InteractionReqEnum } from '@src/discord/type';
import { Env } from '@src/worker';
import Player from '../../orm/player';

const roleMessage: any = {
	mankind: '很好！选择人族意味着你将成为艾伦达王国的一名勇者',
	wizard: '精灵之子啊，在辛瑞尔森林的神秘树木间，你的冒险即将开始',
	orc: '选择兽人意味着你将成为蛮荒之地的一名强大战士',
	dwarf: '在石锤山脉的深处，你是矮人的骄傲，一个工匠的灵魂',
};
const roleList = [
	{
		name: '人族',
		value: 'mankind',
	},
	{
		name: '精灵',
		value: 'wizard',
	},
	{
		name: '兽人',
		value: 'orc',
	},
	{
		name: '矮人',
		value: 'dwarf',
	},
];
export class RpgCommand implements Command {
	name = 'rpg';
	description = '幻境大陆-RPG-GAME';
	type = InteractionReqEnum.APPLICATION_COMMAND;
	options = [
		{
			name: 'info',
			description: '查看游戏信息',
			type: 1,
			required: false,
		},
		{
			name: 'reg',
			description: '注册',
			type: 1,
			required: false,
			options: [
				{
					name: 'role',
					type: 3,
					description: '选择种族',
					required: true,
					choices: roleList,
				},
			],
		},
		{
			name: 'map',
			description: '查看游戏地图信息',
			type: 1,
			required: false,
		},
		{
			name: 'rig',
			description: '操作角色发生各种行为',
			type: 1,
			required: false,
			options: [
				{
					name: 'move',
					type: 3,
					description: '移动',
					required: false,
				},
			],
		},
		{
			name: 'bag',
			description: '角色背包信息',
			type: 1,
			required: false,
		},
	];
	app: DiscordApp | null = null;
	initApp(app: DiscordApp) {
		this.app = app;
	}
	async handel(request: Request, inc: Interaction, env: Env): Promise<InteractionResponse> {
		console.log('子命令', JSON.stringify(inc.data));
		for (var i = 0; i < inc.data.options.length; i++) {
			const sub_cmd = inc.data.options[i];
			switch (sub_cmd.name) {
				//注册账号
				case 'reg': {
					const role = sub_cmd.options.find((e) => e.name === 'role')?.value;
					const roleValue = roleList.find((e) => e.value === role)?.name;
					const userinfo = await this.app?.fetch('users/' + inc.member.user.id);
					const userinfoJson: any = await userinfo?.json();

					const player = await Player(env.ORM).First({ where: { discordId: inc.member.user.id } });
					if (player) {
						return {
							type: InteractionTypeEnum.CHANNEL_MESSAGE_WITH_SOURCE,
							data: {
								tts: false,
								flags: 64,
								embeds: [
									{
										color: 3447003,
										title: '幻境大陆',
										description: `----请保护您的信息，以防止敌方势力将您抹杀----\r\n您已经注册了身份${roleList.find((e) => e.value === player.role)?.name}`,
										fields: [
											{ name: '名称', value: inc.member.user.global_name, inline: true },
											{ name: '种族', value: roleList.find((e) => e.value === player.role)?.name, inline: true },
											{ name: '天赋', value: '弱鸡', inline: true },
											{ name: '血量', value: '100/100', inline: true },
											{ name: '魔法值', value: '100/100', inline: true },
											{ name: '宗门', value: '无', inline: true },
										],
										footer: {
											text: inc.member.user.global_name,
											icon_url: `https://cdn.discordapp.com/avatars/${inc.member.user.id}/${userinfoJson.avatar}.png`,
										},
									},
								],
							},
						};
					}
					await Player(env.ORM).InsertOne({ discordId: inc.member.user.id, role: role });
					return {
						type: InteractionTypeEnum.CHANNEL_MESSAGE_WITH_SOURCE,
						data: {
							tts: false,
							flags: 64,
							embeds: [
								{
									color: 3447003,
									title: '幻境大陆',
									description: `----请保护您的信息，以防止敌方势力将您抹杀----\r\n${roleMessage[role] || '未知'}`,
									fields: [
										{ name: '名称', value: inc.member.user.global_name, inline: true },
										{ name: '种族', value: roleValue, inline: true },
										{ name: '天赋', value: '弱鸡', inline: true },
										{ name: '血量', value: '100/100', inline: true },
										{ name: '魔法值', value: '100/100', inline: true },
										{ name: '宗门', value: '无', inline: true },
									],
									footer: {
										text: inc.member.user.global_name,
										icon_url: `https://cdn.discordapp.com/avatars/${inc.member.user.id}/${userinfoJson.avatar}.png`,
									},
								},
							],
						},
					};
				}
				//查看游戏信息
				case 'info': {
					return {
						type: InteractionTypeEnum.CHANNEL_MESSAGE_WITH_SOURCE,
						data: {
							tts: false,
							embeds: [
								{
									title: '幻境大陆',
									description:
										'在幻境大陆，魔法和科技交相辉映，各种奇幻生物和神秘力量充斥着这个世界。大陆被神秘的迷雾覆盖，隐藏着无数未知的秘密。传说中，只有勇者们能够揭开迷雾的真相，解锁世界的神秘力量。！',
								},
							],
							allowed_mentions: {
								parse: ['users'],
								users: [],
							},
						},
					};
				}
				case 'map': {
					return {
						type: InteractionTypeEnum.CHANNEL_MESSAGE_WITH_SOURCE,
						data: {
							flags: 64,
							tts: false,
							embeds: [
								{
									title: '幻境大陆',
									description: '',
								},
							],
							components: [
								{
									type: 1,
									components: [
										{
											type: 3,
											custom_id: 'class_select_1',
											options: [
												{
													label: 'Rogue',
													value: 'rogue',
													description: 'Sneak n stab',
													emoji: {
														name: 'rogue',
														id: '625891304148303894',
													},
												},
											],
											placeholder: 'Choose a class',
											min_values: 1,
											max_values: 1,
										},
									],
								},
							],
						},
					};
				}
				default:
					return { type: InteractionTypeEnum.CHANNEL_MESSAGE_WITH_SOURCE, data: { contnet: '当前命令暂未开发！' } };
			}
		}
	}
}
