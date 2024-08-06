/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PostagemsController = () => import('#controllers/postagems_controller')


router.group(() => {


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/postagems', [PostagemsController, 'store'])

}).prefix('api')
