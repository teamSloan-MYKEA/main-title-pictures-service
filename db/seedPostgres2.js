const { Client } = require('pg');
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "sdc_mykea"
});

client.connect();
client.query(
  `COPY pictures_service (description, picture1, picture2, picture3, picture4, picture5, picture6) FROM '/var/lib/postgresql/data/pictures.csv' WITH (format csv)`,
  (err, res) => {
    console.log(err ? err.stack : 'table pictures_service up and seeded seedPostgres2');
    client.end();
  }
);
