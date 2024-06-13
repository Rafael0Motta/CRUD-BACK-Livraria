const express = require("express");
const uuid = require("uuid");
const db = require("../database");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

/* ADD LIVRO */
router.post("/new", (req, res) => {
  const { titulo, autor, ano } = req.body;
  const query = `INSERT INTO books (id,titulo, autor, ano) VALUES (?,?,?,?)`;
  const id = uuid.v4();
  db.run(query, [id, titulo, autor, ano], function (err) {
    err
      ? res.status(400).json({ error: err.message })
      : res
          .status(201)
          .json({ id: `Livro adicionado com sucesso, sua id é ${id}` });
  });
});

/* PEGA TODOS OS LIVROS ADD */
router.get("/all", (req, res) => {
  const query = `SELECT * FROM books`;

  db.all(query, [], function (err, rows) {
    err ? res.status(500).json({ error: err.message }) : res.json(rows);
  });
});

/* PEGA UM LIVRO ESPECIFICO */
router.get("/:id", (req, res) => {
  const query = `SELECT * FROM books WHERE id = ?`;

  db.get(query, [req.params.id], function (err, row) {
    err
      ? res.status(500).json({ error: err.message })
      : !row
      ? res.status(404).json({ error: "Book not found" })
      : res.json(row);
  });
});

/* ATUALIZA AS INFOS DE UM LIVRO A PARTIR DE UM ID*/
router.put("/:id", (req, res) => {
  const { titulo, autor, ano } = req.body;
  const query = `UPDATE books SET titulo = ?, autor = ?, ano = ? WHERE id = ?`;

  db.run(query, [titulo, autor, ano, req.params.id], function (err) {
    err
      ? res.status(500).json({ error: err.message })
      : this.changes === 0
      ? res.status(404).json({ error: "Book not found" })
      : res.json({ updated: this.changes });
  });
});

/* DELETA UM LIVRO A PARTIR DE UM ID */
router.delete("/:id", (req, res) => {
  const query = "DELETE FROM books WHERE id = ? ";
  db.run(query, [req.params.id], function (err) {
    err
      ? res.status(500).json({ error: err.message })
      : this.changes === 0
      ? res.status(404).json({ error: "Book not found" })
      : res.json({ deleted: this.changes });
  });
});

module.exports = router;
app.use("/api", router);
