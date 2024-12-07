const express = require("express");
const routes = express.Router();
const DB = require("./characters");


routes.get("/characters", (req, res) => {
    res.status(200).json(DB.characters);
});

routes.get("/characters/:id", (req, res) => {
    if(isNaN(req.params.id)){
        //id != numero == bad request
        res.status(400);
    } else {
        const id = parseInt(req.params.id);
        const character = DB.characters.find((c) => c.id === id);
        if (character != undefined) {
            res.status(200).json(character);
        } else {
            res.status(400).json({ msg: "Personagem não existe"});
        }
    }
});

routes.post("/newCharacter", (req, res) => {
    const {
        name,
        species,
        house,
        ancestry,
        wand,
        hogwartsStudent,
        hogwartsStaff,
    } = req.body;
    if ( name && specis && house != undefined) {
        const id = DB.characters.length + 1;
        DB.characters.push({
            id,
            name,
            species,
            house,
            ancestry,
            wand,
            hogwartsStudent,
            hogwartsStaff,
        });
        res.status(200).json({ msg: "Personagem adicionado!"});
    } else {
        res.status(400).json({ msg: "Dados obrigatórios incompletos!"});
    }
});

routes.delete("/character/:id", (req, res) => {
    if(isNaN(req.params.id)){
        //id != numero == bad request
        res.status(400);
    } else {
        const id = parseInt(req.params.id);
        const index = DB.characters.findIndex((c) => c.id === id);
        if (index = -1) {
            res.status(404).json({ msg: "Personagem não existe"});
        } else {
            DB.characters.splice(index, 1);
            res.status(200).json({ msg: "Personagem deletado!"});
        }
    }
});

routes.put("/character/:id", (req, res) => {
    if(isNaN(req.params.id)){
        //id != numero == bad request
        res.status(400);
    } else {
        const id = parseInt(req.params.id);
        const index = DB.characters.findIndex((c) => c.id === id);
        if ( character != undefined) {
            const {
                name,
                species,
                house,
                ancestry,
                wand,
                hogwartsStudent,
                hogwartsStaff,
            } = req.body;
            if ( name != undefined) character.name = name;
            if ( species != undefined) character.species = species;
            if ( house != undefined) character.house = house;
            if ( ancestry != undefined) character.ancestry = ancestry;
            if ( wand != undefined) character.wand = wand;
            if ( hogwartsStudent != undefined) character.hogwartsStudent = hogwartsStudent;
            if ( hogwartsStaff != undefined) character.hogwartsStaff = hogwartsStaff;
            return res.json(character);
        } else {
            return res.status(404).json({ msg: "Personagem não encontrado" });
        }
        }
});

module.exports = routes;