import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import mongoose from 'mongoose'
import "./config/env"
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from "@graphql-tools/schema"

import resolvers from "./resolvers"
import typeDefs from './schemas'
import { routes } from "routes"

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.b1l8g.mongodb.net/restgraphql?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(express.json())

app.use(routes)


const schema = makeExecutableSchema({
    resolvers,
    typeDefs
})

app.use("/graphql", graphqlHTTP({
    schema,
    // to enable graphql IDE
    graphiql: true,
}))

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof Error) {
            return response.status(400).send(error.message)
        }

        return response.status(500).json(error)
    }
)

app.listen(3000, () => console.log("Server is running"))