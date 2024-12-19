const express = require("express");
const {test,catchpokemonByPokemonid,createPokemonStatus,getPokemonStatus,getPokemonByPokemonid} = require("../controllers/pokemonController")
const router = express.Router();

router.get("/test",test)
router.get("/",getPokemonStatus)
router.get("/pokemonid/:pokemon_id",getPokemonByPokemonid)
router.post("/",createPokemonStatus)
router.put("/catch/:pokemon_id",catchpokemonByPokemonid)
module.exports = router