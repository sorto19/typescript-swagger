import {Handler} from 'express'
import { nanoid } from 'nanoid';

import { getConnection } from '../db'

export const getTask:Handler = (req, res) => {
   const data= getConnection().get('tasks').value()
   return res.json(data)
};
export const createTask:Handler =(req, res) =>{
    const {name, description} = req.body
    const newTask= {
        name,
        description,
        id: nanoid()
    }

    try {
        getConnection().get('tasks').push(newTask).write()

        res.json(newTask)  
    } catch (error) {
        res.status(500).send(error)
    }

}