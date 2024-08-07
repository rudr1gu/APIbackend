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
}