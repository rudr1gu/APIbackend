import type { HttpContext } from '@adonisjs/core/http'
import Forum from '#models/forum'
import Resposta from '#models/resposta'
import app from '@adonisjs/core/services/app'
import {v4  as uuidv4} from 'uuid'

export default class RespostasController {
    private validationOptions = {
        types: ['img'],
        size: '2mb'
    }

    public async index({params}: HttpContext){
        const forumId = params.forumId

        await Forum.findOrFail(forumId)

        const respostas = await Resposta.query().where('forumId', forumId)
        .preload('aluno')
        .preload('professor')

        return respostas
    }

    public async store({request, params, response}: HttpContext){
        const body = request.body()

        const img = request.file('fileName', this.validationOptions)

        if (img) {
            const imgName = `${uuidv4()}.${img.extname}`
            await img.move(app.tmpPath('uploads'), {
                name: imgName
            })
            body.fileName = imgName
        }

        const forumId = params.forumId

        await Forum.findOrFail(forumId)
        body.forumId = forumId

        let resposta;
        if(body.alunoId){
            resposta = await Resposta.create({...body, professorId: undefined})
        } else if (body.professorId){
            resposta = await Resposta.create({...body, alunoId: undefined})
        }

        response.status(201).json(resposta)

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