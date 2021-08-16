import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import mongoose from 'mongoose'

const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/restgraphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof Error) {
            return response.status(400).send(error.message)
        }

        return response.status(500).json(error)
    }
)

app.listen(3000, () => console.log("Server is running"))