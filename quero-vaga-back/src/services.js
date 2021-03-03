const { Client } = require('pg');

const services = {
  get_hello: async () => {
    const client = new Client();
    await client.connect();
    try {
      const query = 'SELECT $1::text AS message';
      const result = await client.query(query, ['Hello World!']);
      const response = result.rows[0].message;
      return { data: response };
    }
    catch (exception) {
      console.error('ERROR', exception);
      return { error: exception };
    }
    finally {
      await client.end();
    }
  }
};

module.exports = services;
