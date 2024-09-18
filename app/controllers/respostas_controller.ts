import type { HttpContext } from '@adonisjs/core/http'
import Forum from '#models/forum'
import Resposta from '#models/resposta'


export default class RespostasController {
    public async store({request, params, response}: HttpContext){
        const body = request.body()
        const forumId = params.forumId

        await Forum.findOrFail(forumId)
        body.forumId = forumId

        const resposta = await Resposta.create(body)

        response.status(201)

        return resposta
    }
}