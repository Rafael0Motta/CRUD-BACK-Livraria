/* CONTEXT: Aqui eu crio e inicio um database, de inicio eu seto os dados e tipos de dados
para finalizar eu insiro 3 infos e fecho. O ID é criado usando uma libs Node o uuid que 
gera ids unicos.  */

const sql = require("sqlite3").verbose();
const db = new sql.Database("./database.db");
const uuid = require("uuid");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS books(
    id TEXT PRIMARY KEY,
    titulo TEXT NOT NULL, 
    autor TEXT NOT NULL,
    ano INTEGER NOT NULL
    )`);

  db.run(`
    INSERT INTO books (id, titulo, autor, ano)
    VALUES
    ('${uuid.v4()}','Pai Rico, pai Pobre', 'Robert T. KiyosakiRobert T. Kiyosaki' , '2017' ),
    ('${uuid.v4()}','O homem mais rico da Babilônia', ' George S Clason' , '2017' ),
    ('${uuid.v4()}','Hábitos Atômicos:', 'James ClearJames Clear' , '2019' )
    `);
});

db.close();
