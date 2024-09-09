import Materia from '#models/materia'
import type { HttpContext } from '@adonisjs/core/http'


export default class MateriasController {

    public async store({ request, response }: HttpContext) {   
        const body = request.body()
        const materia = await Materia.create(body)

        response.status(201).json(body)

        return materia;
    }
}