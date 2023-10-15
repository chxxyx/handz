export const Profile = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    stack: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dev_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'profile',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
});
  return Profile;
};
