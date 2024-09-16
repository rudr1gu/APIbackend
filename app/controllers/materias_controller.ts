import Materia from '#models/materia'
import type { HttpContext } from '@adonisjs/core/http'


export default class MateriasController {
    public async index() {
        return await Materia.query()
            .preload('tags')
    }

    public async store({ request, response }: HttpContext) {   
        const body = request.body()
        const materia = await Materia.create(body)

        response.status(201).json(body)

        return materia;
    }

    public async show({ params }: HttpContext) {
        return await Materia.findOrFail(params.id)
    }

    public async update({ params, request, response }: HttpContext) {
        const body = request.body()
        const materia = await Materia.find(params.id)

        if (!materia) {
            response.status(404).json({ message: 'Materia não encontrada' })
            return
        }

        materia.merge(body)

        await materia.save()

        response.status(200).json(materia)

        return materia
    }

    public async destroy({ params }: HttpContext) {
        const materia = await Materia.findOrFail(params.id)

        await materia.delete()

        return materia
    }
    
}