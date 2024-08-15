import type { HttpContext } from '@adonisjs/core/http'
import Aluno from '#models/aluno'

export default class AlunoLoginsController {
    
    async store({ request }: HttpContext) {
        const body = request.body()
        const aluno = await Aluno.findBy('email', body.email)
        if (!aluno) {
            return {
                message: 'Aluno não encontrado',
            }
        }
        if (aluno.senha !== body.senha) {
            return {
                message: 'Senha incorreta',
            }
        }
        return {
            message: 'Aluno logado com sucesso',
            token: aluno.id
        }
    }
}