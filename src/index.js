//importa os frameworks, bibliotecas, etc, necessários
const express= require("express");
const app = express();

const routes = require("./routes");
const port = 12345;

//Informa biblioteca usar para parsin de conteudo: True = qs (suporta nested object), false = querystring (nao suporta nested object)
app.use(express.urlencoded({ extended: true }));

//parser para json de infos vindas de um post
app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log("API rodando na porta " + port);
});
