/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import app from '@adonisjs/core/services/app'
import { sep, normalize } from 'node:path'
import fs from 'fs'

const PostagemsController = () => import('#controllers/postagems_controller')
const ComentariosController = () => import('#controllers/comentarios_controller')
const AlunosController = () => import('#controllers/alunos_controller')
const AlunoLoginsController = () => import('#controllers/aluno_logins_controller')
const CursosController = () => import('#controllers/cursos_controller')
const ProfessorsController = () => import('#controllers/professors_controller')
const ProfessorLoginsController = () => import('#controllers/professor_logins_controller')
const ForumsController = () => import('#controllers/forums_controller')

router.group(() => {

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/postagems', PostagemsController).apiOnly()

router.post('/postagems/:postagemId/comentarios', [ComentariosController, 'store'])

router.resource('/alunos', AlunosController).apiOnly()

router.resource('/cursos', CursosController).apiOnly()

router.post('/alunos/login', [AlunoLoginsController, 'store'])

router.resource('/professores', ProfessorsController).apiOnly()

router.post('/professor/login', [ProfessorLoginsController, 'store'])

router.resource('/forums', ForumsController).apiOnly()

}).prefix('api')

const PATH_TRAVERSAL_REGEX = /(?:^|[\\/])\.\.(?:[\\/]|$)/

router.get('/uploads/*', ({ request, response }) => {
  const filePath = request.param('*').join(sep)
  const normalizedPath = normalize(filePath)
  
  console.log('Requested File Path:', filePath)
  console.log('Normalized Path:', normalizedPath)

  if (PATH_TRAVERSAL_REGEX.test(normalizedPath)) {
    return response.badRequest('Malformed path')
  }

  const absolutePath = app.makePath('tmp/uploads', normalizedPath)
  console.log('Absolute Path:', absolutePath)

  if (fs.existsSync(absolutePath)) {  // Check if file exists
    return response.download(absolutePath)
  } else {
    return response.notFound('File not found')
  }
})