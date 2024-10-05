import type { HttpContext } from '@adonisjs/core/http'
import Forum from '#models/forum'
import Resposta from '#models/resposta'


export default class RespostasController {
    public async index({params}: HttpContext){
        const forumId = params.forumId

        await Forum.findOrFail(forumId)

        const respostas = await Resposta.query().where('forumId', forumId).preload('aluno')

        return respostas
    }

    public async store({request, params, response}: HttpContext){
        const body = request.body()
        const forumId = params.forumId

        await Forum.findOrFail(forumId)
        body.forumId = forumId

        const resposta = await Resposta.create(body)

        response.status(201)

        return resposta
    }

    public async show({params}: HttpContext){
        const id = params.id

        const resposta = await Resposta.findOrFail(id)

        return resposta
    }

    public async update({request, params}: HttpContext){
        const body = request.body()
        const id = params.id

        const resposta = await Resposta.findOrFail(id)

        resposta.merge(body)

        await resposta.save()

        return resposta
    }

    public async destroy({params}: HttpContext){
        const id = params.id

        const resposta = await Resposta.findOrFail(id)

        await resposta.delete()

        return resposta
    }
}