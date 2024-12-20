const express = require("express");
const {test,catchpokemonByPokemonid,createPokemonStatus,getPokemonStatus,getPokemonByPokemonid, inteampokemonByPokemonId} = require("../controllers/pokemonController")
const router = express.Router();

router.get("/test",test)
router.get("/",getPokemonStatus)
router.get("/pokemonid/:pokemon_id",getPokemonByPokemonid)
router.post("/",createPokemonStatus)
router.put("/catch/:pokemon_id",catchpokemonByPokemonid)
router.put("/inteam/: pokemon_id",inteampokemonByPokemonId)
module.exports = router