import type { HttpContext } from '@adonisjs/core/http'
import Postagem from '#models/postagem'

export default class PostagemsController {

    async index({ response }: HttpContext) {
        const postagens = await Postagem.all()
    
        response.status(200).json(postagens)
    
        return {
          message: 'listagem de postagens',
          data: postagens,
        }
      }

    async store({ request, response }: HttpContext) {
        const body = request.body()
        // const image = request.file('image', this.validationOptions)
    
        // if(image) {
        //   const imageName = `${uuidv4()}.${image.extname}`
    
        //   await image.move(app.tmpPath('uploads'), {
        //     name: imageName,
        //   })
    
        //   body.image = imageName
        // }
    
        const postagem = await Postagem.create(body)
    
        response.status(201).json(postagem)
    
        return {
          message: 'postagem criada com sucesso!',
          data: postagem,
        }
      }

    async show({ params, response }: HttpContext) {
        const postagem = await Postagem.find(params.id)
    
        if(!postagem) {
          response.status(404).json({ message: 'postagem não encontrada' })
          return
        }
    
        response.status(200).json(postagem)
    
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