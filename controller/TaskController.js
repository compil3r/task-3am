const database = require('../database/connection')

class TaskController {
    createTask(req, res) {
        const {title, description, status} = req.body
        database.insert({title, description, status})
        .table("tasks").then(function(data) {
            res.json({message: 'Task created successfully'})
        }).catch(function(error) {
            res.json({error: error})
            console.log(error)
        })
    }
}

module.exports = new TaskController()