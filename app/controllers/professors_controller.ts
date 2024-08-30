import type { HttpContext } from '@adonisjs/core/http'
import Professor from '#models/professor'
import app from '@adonisjs/core/services/app'

import { v4 as uuidv4 } from 'uuid'

export default class ProfessorsController {
    private validationOptions = {
        types: ['img'],
        size: '2mb'
    }

    public async index({response}: HttpContext){
        const professors = await Professor.all()

        response.status(200)
        return {
            message: 'Lista de professores',
            data: professors
        }
    }

    public async store({request, response}: HttpContext){
        const body = request.body()
        //logica para salvar a imagem
        const img = request.file('img', this.validationOptions)

        if(img){
            const imgName = `${uuidv4()}.${img.extname}`

            await img.move(app.tmpPath('uploads'), {
                name: imgName
            })

            body.img = imgName
        }

        const professor = await Professor.create(body)

        response.status(201).json(professor)
        return {
            message: 'Professor criado com sucesso',
            data: professor
        }
    }

    public async show({params, response}: HttpContext){
        const professor = await Professor.find(params.id)

        response.status(200)
        return professor;
    }

    public async update({params, request, response}: HttpContext){
        const body = request.body()
        response.status(200)
        return {
            message: 'Professor atualizado com sucesso',
            data: {
                id: params.id,
                ...body
            }
        }
    }

    public async destroy({params, response}: HttpContext){
        const professor = await Professor.find(params.id)

        await professor!.delete()

        response.status(204)
        return {
            message: 'Professor deletado com sucesso',
            data: professor
        }
    }
}