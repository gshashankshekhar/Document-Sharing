const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Document Sharing',
  password: '123456',
  port: 5432,
})

client.connect();

client.query(`Select * from users`, (err ,res) =>{
if(!err){
  console.log(res.rows);
}else{
  console.log(err.message);
}
client.end;
})


