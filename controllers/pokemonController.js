const StatusPokemon = require("../models/pokemonModel")
exports.test = (req,res)=>{
    console.log("hola controller")
    res.status(200).send("Hola desde controller")
}
exports.createPokemonStatus = async (req,res)=>{
    try {
        const status = await StatusPokemon.create({
            pokemon_id: req.body.pokemon_id,
            view: req.body.view,
            catch: req.body.catch,
            in_team: req.body.in_team
        })
        res.status(201).json(status)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
}
exports.getPokemonStatus = async (req,res)=>{
    try {
        const status = await StatusPokemon.find({})
        res.status(200).json(status)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }

}
exports.getPokemonByPokemonid = async (req,res)=>{
    try{
        const pokemon_id = req.params.pokemon_id;
        let pokemon = await StatusPokemon.findOne({"pokemon_id":pokemon_id})
        if(!pokemon){
            res.status(404).json({message:"pokemon not foud"})
        }else{
                res.status(200).json(pokemon)
            }
        
    } catch(error) {
        console.error(error)
        return res.status(500).json({error})
    }
}

exports.catchpokemonByPokemonid = async (req,res)=>{
    const pokemon_id = req.params.pokemon_id;
    const pokemonStatusId = req.body.pokemon_id;
    if(pokemon_id==pokemonStatusId){
    try {
        const pokemonstatusview = req.body.view;
        const pokemonstatuscatch = req.body.catch;
        let pokemon = await StatusPokemon.findOne({"pokemon_id":pokemon_id})
        if (!pokemon){
            return res.status(400).json({message:"Bad request, pokemon not view yet"})
        }   
        else if(pokemon.view){
            return res.status(400).json(pokemon)
        } 
        else if(pokemon.catch){               
                return res.status(400).json(pokemon)
        }else{
            pokemon = await StatusPokemon.findOneAndReplace({"pokemon_id":pokemon_id},{
            pokemon_id: pokemon_id,
            view: true,
            catch: true,
            },{new:true}    
            )
            return res.status(200).json(pokemon)
        }         
    } catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
    }else{
     return res.status(400).json({message:"bad request, pokemon_id in body diferent pokemon_id in params"})
    }
}

exports.inteampokemonByPokemonId = async (req,res)=>{
    try {
        const pokemon_id = req.params.pokemon_id
        const pokemon = await StatusPokemon.findOne( {"pokemon_id":pokemon_id})
        const newpokemon = await StatusPokemon.findOneAndReplace
        ({"pokemon_id": pokemon_id},{
           pokemon_id: pokemon_id,
           view: true,
           catch: true,
           in_team:!pokemon.in_team
        },{new:true})
        return res.status(200).json(newpokemon)
    }catch (error) {
        console.error(error)
        return res.status(500).json({error}) 

    }
}
