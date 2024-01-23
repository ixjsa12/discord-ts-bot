export enum InteractionTypeEnum {
	PONG = 1, // ACK a Ping
	CHANNEL_MESSAGE_WITH_SOURCE = 4, // 响应交互并附带一条消息
	DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5, // ACK 交互并稍后编辑响应，用户看到加载状态
	DEFERRED_UPDATE_MESSAGE = 6, // 对于组件，ACK 交互并稍后编辑原始消息，用户不看到加载状态
	UPDATE_MESSAGE = 7, // 对于组件，编辑与组件相关联的消息
	APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8, // 响应自动完成交互并提供建议的选择
	MODAL = 9, // 响应交互并显示一个弹出式模态框
	PREMIUM_REQUIRED = 10, // 响应交互并显示升级按钮，仅适用于启用了货币化的应用
}
export type InteractionResponse = {
	type: InteractionTypeEnum;
	data: any;
};

export enum InteractionReqEnum {
	PING = 1,
	APPLICATION_COMMAND = 2,
	MESSAGE_COMPONENT = 3,
	APPLICATION_COMMAND_AUTOCOMPLETE = 4,
	MODAL_SUBMIT = 5,
}
export interface Interaction {
	app_permissions: string;
	application_id: string;
	channel: Channel;
	channel_id: string;
	data: Data;
	entitlement_sku_ids: any[];
	entitlements: any[];
	guild: Guild;
	guild_id: string;
	guild_locale: string;
	id: string;
	locale: string;
	member: Member;
	token: string;
	type: number;
	version: number;
}

export interface Channel {
	flags: number;
	guild_id: string;
	id: string;
	last_message_id: string;
	name: string;
	nsfw: boolean;
	parent_id: string;
	permissions: string;
	position: number;
	rate_limit_per_user: number;
	topic: any;
	type: InteractionReqEnum;
}

export interface Data {
	id: string;
	name: string;
	type: number;
	options: Data[];
	value: any;
}

export interface Guild {
	features: any[];
	id: string;
	locale: string;
}

export interface Member {
	avatar: any;
	communication_disabled_until: any;
	deaf: boolean;
	flags: number;
	joined_at: string;
	mute: boolean;
	nick: any;
	pending: boolean;
	permissions: string;
	premium_since: any;
	roles: any[];
	unusual_dm_activity_until: any;
	user: User;
}

export interface User {
	avatar: any;
	avatar_decoration_data: any;
	discriminator: string;
	global_name: string;
	id: string;
	public_flags: number;
	username: string;
}
