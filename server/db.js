import pg from 'pg';

const db= new pg.Client({
    user:"postgres",
    // user: "postgres",
    host: "localhost",
    database: "perntodo",
    password: "**********",
    port: 5432,
})

db.connect();
export default db;
