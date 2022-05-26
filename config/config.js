const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST || 'ec2-34-227-120-79.compute-1.amazonaws.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'qrgrxqcdwjvbnr',
    password: env.DB_PASSWORD || '21f23948552e65cf6215cf20d060f38420f047494ac45a6beb955b6c164efc69',
    database: env.DB_NAME || 'de6v6tjb87f00s',
    ssl: {
        rejectUnauthorized: false
    }
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;