export const TeamMember = (sequelize, DataTypes) => {
  const TeamMember = sequelize.define('TeamMember', {
    project_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dev_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    tableName: 'teamMember',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
});

  return TeamMember;
};
