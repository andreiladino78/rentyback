const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST || 'ec2-52-5-110-35.compute-1.amazonaws.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'ppzfdhzwdxhrgn',
    password: env.DB_PASSWORD || '391cb814d46724c2832da4e3a27a03d3d8e437eb7ec00236558e5c4258d8c45c',
    database: env.DB_NAME || 'db599oucbhfgfp',
    ssl: {
        rejectUnauthorized: false
    }
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;