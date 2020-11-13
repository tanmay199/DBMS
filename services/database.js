const { Pool, Client } = require('pg');
const connectionString = 'postgresql://postgres:1234@localhost:5432/project';
const pool = new Client({
  connectionString,
});
exports.pool=pool;
exports.getalltrain=()=>{
    pool.query('SELECT * from train', (err, res) => {
        console.log(err, res)
        return "kkkk";
        pool.end()
      })
}