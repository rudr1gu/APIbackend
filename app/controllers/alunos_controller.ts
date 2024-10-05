import type { HttpContext } from '@adonisjs/core/http'
import Aluno from '#models/aluno'
import app from '@adonisjs/core/services/app'

import { v4 as uuidv4 } from 'uuid'

export default class AlunosController {

    private validationOptions = {
        types: ['img'],
        size: '2mb'
    }

    public async index({response}: HttpContext){
        const alunos = await Aluno.all()

        response.status(200)
        return {
            message: 'Lista de alunos',
            data: alunos
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

        const aluno = await Aluno.create(body)

        response.status(201).json(aluno)
        return {
            message: 'Aluno criado com sucesso',
            data: aluno
        }
    }

    public async show({params, response}: HttpContext){
        const aluno = await Aluno.find(params.id)

        response.status(200)
        return aluno;
    }

    public async update({params, request}: HttpContext){
        const body = request.body()

        const alunos = await Aluno.findOrFail(params.id)

        alunos.estrelas = body.estrelas
        alunos.img = body.img

        await alunos.save()

        return alunos;
    }

    public async destroy({params, response}: HttpContext){
        response.status(200)
        return {
            message: 'Aluno removido com sucesso',
            data: params.id
        }
    }
}