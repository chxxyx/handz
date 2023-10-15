import path from 'path';
import Sequelize from 'sequelize';
import process from 'process';
import configJson from '../config/config.json' assert { type: 'json' };
import { User } from './models/user.js';
import { Profile } from './models/profile.js';
import { Project } from './models/project.js';
import { TeamMember } from './models/teamMember.js';

const basename = path.basename(import.meta.url);
const env = process.env.NODE_ENV || 'development';
const dbConfig = configJson[env];
const db = {};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

db.User = User(sequelize, Sequelize.DataTypes);
db.Profile = Profile(sequelize, Sequelize.DataTypes);
db.Project = Project(sequelize, Sequelize.DataTypes);
db.TeamMember = TeamMember(sequelize, Sequelize.DataTypes);

db.User.hasOne(db.Profile, { foreignKey: 'user_id' });
db.Profile.belongsTo(db.User, { foreignKey: 'user_id' });
db.Project.hasOne(db.TeamMember, { foreignKey: 'project_id' });
db.TeamMember.belongsTo(db.Project, { foreignKey: 'project_id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
