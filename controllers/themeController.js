import Task from '../models/Theme.js'

async function getThemes(req,res){
        const planets = await Task.find()

        res.json(planets)
    }

export default {
    getThemes
}