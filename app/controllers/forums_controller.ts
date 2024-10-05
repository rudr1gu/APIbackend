import type { HttpContext } from '@adonisjs/core/http'
import Forum from '#models/forum'
import Tag from '#models/tag'
import app from '@adonisjs/core/services/app'

import {v4 as uuidv4} from 'uuid'

export default class ForumsController {
    private validationOptions = {
        types: ['img'],
        size: '2mb'
    }


    public async index(){
        const forums = await Forum.query()
            .preload('aluno')
            .preload('materia', (query) => {
                query.preload('tags')
            })
            .preload('tags')
            .preload('respostas' , (query) => {
                query.preload('aluno')
            })

        return forums
    }

    public async store({ request, response }: HttpContext){
        const body = request.body()

        const img = request.file('fileName', this.validationOptions)

        if(img){
            const imgName = `${uuidv4()}.${img.extname}`

            await img.move(app.tmpPath('uploads'), {
                name: imgName
            })

            body.fileName = imgName
        }

        const tags = body.tags

        const forum = await Forum.create(body)

        if (tags && tags.length > 0) {
            for (const tagNome of tags) {
                // Verificar se a tag já existe
                let tag = await Tag.findBy('nome', tagNome)
                if (!tag) {
                    // Criar a tag se não existir
                    tag = await Tag.create({ nome: tagNome })
                }
                // Associar a tag ao fórum
                await forum.related('tags').attach([tag.id])
            }
        }

        response.status(201).json(forum)

        return forum
    }

    public async show({ params }: HttpContext){
        const forum = await Forum.findOrFail(params.id)

        await forum.load('aluno')
        await forum.load('materia', (query) => {
            query.preload('tags')
        })
        await forum.load('respostas', (query) => {
            query.preload('aluno')
        })


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