const { Client } = require('pg');
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password"
});

client.connect();
client.query(`DROP TABLE IF EXISTS pictures_service;
              CREATE TABLE pictures_service (
                description varchar(400),
                picture1 varchar(60),
                picture2 varchar(60),
                picture3 varchar(60),
                picture4 varchar(60),
                picture5 varchar(60),
                picture6 varchar(60)
            );
            COPY pictures_service (description, picture1, picture2, picture3, picture4, picture5, picture6) FROM '/var/lib/postgresql/data/pictures.csv' WITH (format csv)`, (err, res) => {
              console.log(err ? err.stack : 'table pictures_service up and seeded'); // Hello World!
              client.end();
});