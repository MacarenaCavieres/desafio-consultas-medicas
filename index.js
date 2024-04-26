import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import routerConsultas from "./routes/consulta.route.js";

const app = express();

const __dirname = import.meta.dirname;

app.use(express.static(path.join(__dirname, "public")));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname + "/views"));

app.use("/", routerConsultas);

app.use("*", (req, res) => {
    res.status(404).send("Página no encontrada");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
