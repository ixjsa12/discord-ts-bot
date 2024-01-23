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
			parentId: {
				type: DataTypes.INTEGER,
			},
			//世界名称
			name: {
				type: DataTypes.STRING,
				notNull: true,
			},
			//世界类型 0 大陆 1 村庄 2 城镇 3 城市 4 宗门 5 秘境 6 私人府邸 7 复活点
			type: {
				type: DataTypes.INTEGER,
				notNull: true,
			},
			//地形类型 0 空地 1 山川 2 河流 4 森林 6 湖泊 7雪山 8 火山 9 沼泽
			subType: {
				type: DataTypes.INTEGER,
			},
		},
	);
};
