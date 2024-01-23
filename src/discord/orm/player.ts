import { D1Orm, DataTypes, Model } from 'd1-orm';
export default (orm: D1Orm) => {
	return new Model(
		{
			D1Orm: orm,
			tableName: 'sys_player',
			primaryKeys: 'id',
			autoIncrement: 'id',
		},
		{
			id: {
				type: DataTypes.INTEGER,
				notNull: true,
			},
			discordId: {
				type: DataTypes.STRING,
				notNull: true,
			},
			//游戏名称
			name: {
				type: DataTypes.STRING,
				notNull: true,
				defaultValue: '无名小卒',
			},
			//角色
			role: {
				type: DataTypes.STRING,
				notNull: true,
			},
			//血量
			hp: {
				type: DataTypes.INTEGER,
				notNull: true,
				defaultValue: 100,
			},
			//最大血量
			maxhp: {
				type: DataTypes.INTEGER,
				notNull: true,
				defaultValue: 100,
			},
			//魔法
			magical: {
				type: DataTypes.INTEGER,
				notNull: true,
				defaultValue: 100,
			},
			//最大魔法
			maxmagical: {
				type: DataTypes.INTEGER,
				notNull: true,
				defaultValue: 100,
			},
			//运气
			fortune: {
				type: DataTypes.INTEGER,
				notNull: true,
				defaultValue: 100,
			},
			//宗门
			sect: {
				type: DataTypes.INTEGER,
				notNull: true,
				defaultValue: 100,
			},
		},
	);
};
