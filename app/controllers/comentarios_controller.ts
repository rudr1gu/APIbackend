import type { HttpContext } from '@adonisjs/core/http'
import Comentario from '#models/comentario'
import Postagem from '#models/postagem'

export default class ComentariosController {
    public async store({request, params, response}: HttpContext){

        const body = request.body()
        const postagemId = params.id

        await Postagem.findOrFail(postagemId)
        body.postagemId = postagemId

        const comentario = await Comentario.create(body)

        response.status(201)

        return {
            message: 'Comentário criado com sucesso',
            data: comentario
        }
    }
}