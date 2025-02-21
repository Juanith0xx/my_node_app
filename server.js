const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Solo iniciar el servidor si el archivo es ejecutado directamente
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app; // Exportamos para pruebas
