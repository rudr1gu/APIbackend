import type { HttpContext } from '@adonisjs/core/http'
import Comentario from '#models/comentario'

export default class ComentariosController {
    async store({request, response}: HttpContext){
        const body = request.body()

        const comentario = await Comentario.create(body)

        response.status(201).json(comentario)

        return {
            message: 'Comentário criado com sucesso',
            data: comentario
        }
    }
}