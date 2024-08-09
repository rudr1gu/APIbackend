import type { HttpContext } from '@adonisjs/core/http'
import Postagem from '#models/postagem'

export default class PostagemsController {

    async index() {
        const postagens = await Postagem.query().preload('comentarios')
    
        return {
          message: 'listagem de postagens',
          data: postagens,
        }
      }

    async store({ request, response }: HttpContext) {
        const body = request.body()
    
        const postagem = await Postagem.create(body)
    
        response.status(201).json(postagem)
    
        return {
          message: 'postagem criada com sucesso!',
          data: postagem,
        }
      }

    async show({ params}: HttpContext) {
        const postagem = await Postagem.findOrFail(params.id)

        await postagem.load('comentarios')
    
        return {
          message: 'detalhes da postagem',
          data: postagem,
        }
      }

    async update({ params, request, response }: HttpContext) {
        const body = request.body()
        const postagem = await Postagem.find(params.id)
    
        if(!postagem) {
          response.status(404).json({ message: 'postagem não encontrada' })
          return
        }
    
        postagem.merge(body)
    
        await postagem.save()
    
        response.status(200).json(postagem)
    
        return {
          message: 'postagem atualizada com sucesso!',
          data: postagem,
        }
      }

    async destroy({ params}: HttpContext) {
        const postagem = await Postagem.find(params.id)

        if(!postagem) {
          return {
            message: 'postagem não encontrada',
          }
        }
        await postagem.delete()
    
        return {
          message: 'postagem deletada com sucesso!',
        }
      }
}