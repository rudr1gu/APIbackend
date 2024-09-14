import type { HttpContext } from '@adonisjs/core/http'
import Forum from '#models/forum'

export default class ForumsController {
    public async index(){
        const forums = await Forum.query()
            .preload('aluno')
            .preload('materia', (query) => {
                query.preload('tags')
            })

        return forums
    }

    public async store({ request, response }: HttpContext){
        const body = request.body()

        const forum = await Forum.create(body)

        response.status(201).json(forum)

        return forum
    }

    public async show({ params }: HttpContext){
        const forum = await Forum.findOrFail(params.id)

        return forum
    }

    public async update({ params, request, response }: HttpContext){
        const body = request.body()
        const forum = await Forum.find(params.id)

        if(!forum){
            response.status(404).json({ message: 'forum não encontrado' })
            return
        }

        forum.merge(body)

        await forum.save()

        response.status(200).json(forum)

        return forum
    }

    public async destroy({ params }: HttpContext){
        const forum = await Forum.findOrFail(params.id)

        await forum.delete()

        return forum
    }
}