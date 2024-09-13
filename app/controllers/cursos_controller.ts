import Curso from '#models/curso'
import type { HttpContext } from '@adonisjs/core/http'

export default class CursosController {

    public async index(){
        const cursos = await Curso.query().preload('alunos').preload('professores').preload('materias')

        return {
            message: 'Lista de cursos',
            data: cursos
        }
    }

    public async store({request, response}: HttpContext){
        const body = request.body()

        const curso = await Curso.create(body)

        response.status(201).json(curso)

        return {
            message: 'Curso criado com sucesso',
            data: curso
        }
    }

    public async show({params, response}: HttpContext){
        const curso = await Curso.find(params.id)

        response.status(200)
        return curso;
    }

    public async update({params, request, response}: HttpContext){
        const body = request.body()
        const curso = await Curso.find(params.id)

        if(!curso) {
            response.status(404).json({ message: 'Curso não encontrado' })
            return
        }

        curso.merge(body)

        await curso.save()

        response.status(200).json(curso)

        return {
            message: 'Curso atualizado com sucesso',
            data: curso
        }
    }

    public async destroy({params, response}: HttpContext){
        const curso = await Curso.find(params.id)

        if(!curso) {
            response.status(404).json({ message: 'Curso não encontrado' })
            return
        }

        await curso.delete()

        response.status(204).json({ message: 'Curso deletado com sucesso' })

        return {
            message: 'Curso deletado com sucesso'
        }
    }
}