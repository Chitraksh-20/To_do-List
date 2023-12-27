import pg from 'pg';

const db= new pg.Client({
    user:"postgres",
    // user: "postgres",
    host: "localhost",
    database: "perntodo",
    password: "kittukhushi@17",
    port: 5432,
})

db.connect();
export default db;