import type { HttpContext } from '@adonisjs/core/http'
import Aluno from '#models/aluno'

export default class AlunoLoginsController {
    
    async store({ request, response }: HttpContext) {
        const body = request.body()


        const aluno = await Aluno.findBy('email', body.email)
        if (!aluno) {
            return response.status(404).json({ message: 'Aluno não encontrado' })
        }
        
        if (aluno.senha !== body.senha) {
            return response.status(401).json({ message: `a senha é: ${aluno.senha } Senha inválida: ${body.senha}` })
        }

        return {
            message: 'Aluno logado com sucesso',
            token: aluno.id,
            user: {
                id: aluno.id,
                nome: aluno.nome,
                email: aluno.email
            }
        }
    }
}