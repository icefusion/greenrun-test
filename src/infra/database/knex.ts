import DataBase from 'knex';

export const knex = DataBase({
  client: 'mysql',
    connection: {
      host: 'ec2-54-94-66-107.sa-east-1.compute.amazonaws.com',
      user: 'root',
      password: '1qa2ws3e',
      database: 'greenrun'
    },
    pool: { min: 0, max: 7 }
});