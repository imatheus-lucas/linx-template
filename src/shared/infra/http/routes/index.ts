import { Router } from 'express'
import usersRouter from "@modules/Users/infra/http/routes/users.routes"

const routes = Router();


routes.use("/users", usersRouter);

