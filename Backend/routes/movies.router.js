const express = require('express');
const { Movie } = require('../Schema/movie');
const router = express.Router();

router.post("/post", async (req, res)=>{
    const payload = req.body;
    try {
        const data  = await Movie.create(payload);
        res.status(200).json({msg:data});
        res.status(200).json({msg:"data is update"});
    } catch (error) {
        res.status(400).json({msg: error})
    }
})

router.get("/", async(req, res)=>{
    try {
        const data = await Movie.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports ={
    router
}