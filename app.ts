import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'
import session from 'express-session';
import * as AdminJSSequelize from '@adminjs/sequelize';
import { Sequelize } from "sequelize";
// import { Autor } from './models/autor.entity';
// import { Livro } from './models/livro.entity';
import { Autor, Livro } from "./models";
import bcrypt from "bcrypt";
import { generateResource } from './utils/mdeling-model';

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
})

const PORT = 3000

const start = async () => {
  const app = express()

  const admin = new AdminJS({
    resources: [
      generateResource(Autor,),
      generateResource(Livro,)
    ]
  })

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://127.0.0.1:${PORT}${admin.options.rootPath}`)
  })
}

start()