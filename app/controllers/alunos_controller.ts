import type { HttpContext } from '@adonisjs/core/http'
import Aluno from '#models/aluno'

export default class AlunosController {
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
        const aluno = await Aluno.create(body)

        response.status(201).json(aluno)
        return {
            message: 'Aluno criado com sucesso',
            data: aluno
        }
    }

    public async show({params, response}: HttpContext){
        response.status(200)
        return {
            message: 'Detalhes do aluno',
            data: params.id
        }
    }

    public async update({params, request, response}: HttpContext){
        const body = request.body()
        response.status(200)
        return {
            message: 'Aluno atualizado com sucesso',
            data: {
                id: params.id,
                ...body
            }
        }
    }

    public async destroy({params, response}: HttpContext){
        response.status(200)
        return {
            message: 'Aluno removido com sucesso',
            data: params.id
        }
    }
}