const { db } = require("./db.service");

exports.create = async (user) => {
    const result = await db.query(
        'INSERT INTO users(name, wap_phone, address) VALUES ($1, $2, $3) RETURNING *',
        [user.name, user.wapPhone, user.address]
      );
      let message = 'Error in creating user';
    
      if (result.length) {
        message = 'User created successfully';
      }
    
      return message;
}