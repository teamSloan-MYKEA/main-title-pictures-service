const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc_mykea'
});

const query1 = `DROP TABLE IF EXISTS sdc_mykea.pictures_service;`
const query2 = `CREATE TABLE IF NOT EXISTS sdc_mykea.pictures_service (
    id int primary key,
    description text,
    picture1 text,
    picture2 text,
    picture3 text,
    picture4 text,
    picture5 text,
    picture6 text
  );`;
// can't do the following from the command line, so choice is to programmatically insert or if I can make a cqlsh golf swing from command line
//const query3 = `COPY sdc_mykea.pictures_service (description, picture1, picture2, picture3, picture4, picture5, picture6, default) FROM '/var/lib/cassandra/pictures.csv';`;

client.connect()
  .then(() => console.log('success'))
  .catch((err) => console.log(err))
  .then(() => {
    client.execute(query1)
      .then(() => {
        console.log('query1 in');
        client.execute(query2)
          .then(() => {
            console.log('query2 in');
            // client.execute(query3)
            //   .then(() => {
            //     console.log('three queries executed, shutting down');
            //     client.shutdown();
            //   }).catch((err) => console.log(err));
          }).catch((err) => console.log(err));
      }).catch((err) => console.log(err))
    }).catch((err) => console.log(err));
