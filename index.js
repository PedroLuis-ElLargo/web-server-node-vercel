const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

console.log("Views directory:", __dirname + "/views");

// Configuración de Handlebars y vistas
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));

// Rutas
app.get("/", function (req, res) {
  res.render("home", {
    title: "Home Page",
    welcomeMessage: "Welcome to our website!",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    title: "Generic Page",
    pageHeader: {
      title: "Generic Page",
      strapline: "This is a generic page",
    },
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    title: "Page Elements",
    pageHeader: {
      title: "Page Elements",
      strapline: "These are common elements on a webpage",
    },
  });
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404 page.html");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}, http://localhost:${port}`);
});
