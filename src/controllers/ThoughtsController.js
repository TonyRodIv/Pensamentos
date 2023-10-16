const { request } = require("express");
const Thought = require("../model/Thought");

module.exports = {
    async createThought(req, res)
    {
        const {title, description} = req.body 
        
        const thought = await Thought.create({ title, description });
        
        return res.json(thought)
    }
}