import express from "express";
import { engine } from "express-handlebars";
import _ from "lodash";
import path from "path";

const app = express();

const __dirname = import.meta.dirname;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
});

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname + "/views"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
