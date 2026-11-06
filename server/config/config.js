// Database settings come from environment variables (.env), never from git.
require('dotenv').config();

const base = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || null,
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',
};

module.exports = {
  development: { ...base, database: process.env.DB_NAME || 'TutorialDB' },
  test: { ...base, database: 'database_test' },
  production: { ...base, database: process.env.DB_NAME || 'database_production' },
};
