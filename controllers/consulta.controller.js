import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import _ from "lodash";
import chalk from "chalk";

moment.locale("es");

const getHome = (req, res) => {
    res.render("home");
};

const randomUser = [];

const getConsulta = async (req, res) => {
    try {
        const { data } = await axios.get("https://randomuser.me/api/");

        let genero = "";
        let nombre = "";
        let apellido = "";

        data.results.forEach((item) => {
            genero = item.gender;
            nombre = item.name.first;
            apellido = item.name.last;
        });

        const paciente = {
            id: uuidv4().slice(0, 6),
            nombre,
            apellido,
            genero,
            fecha: moment().format("MMMM Do YYYY, h:mm:ss a"),
        };

        randomUser.push(paciente);

        const result = _.partition(randomUser, (item) => item.genero === "male");
        const male = result[0];
        const female = result[1];

        res.render("consultas", { male, female });

        const stringUser = JSON.stringify(randomUser, null, 2);

        console.log(chalk.bgWhite.blue(stringUser));
    } catch (err) {
        console.error("Error ===> ", err);
        return res.send("algo salio mal");
    }
};

export const allMethod = {
    getHome,
    getConsulta,
};
