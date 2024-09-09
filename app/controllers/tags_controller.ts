import Tag from '#models/tag'
import type { HttpContext } from '@adonisjs/core/http'

export default class TagsController {

    public async store({ request, response }: HttpContext) {   
        const body = request.body()
        const tag = await Tag.create(body)

        response.status(201).json(body)

        return tag
    } 
}