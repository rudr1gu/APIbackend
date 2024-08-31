import type { HttpContext } from '@adonisjs/core/http'
import Professor from '#models/professor'

export default class ProfessorLoginsController {
    async store({ request, response }: HttpContext) {
        const body = request.body()


        const professor = await Professor.findBy('email', body.email)
        if (!professor) {
            return response.status(404).json({ message: 'professor não encontrado' })
        }
        
        if (professor.senha !== body.senha) {
            return response.status(401).json({ message: `a senha é: ${professor.senha } Senha inválida: ${body.senha}` })
        }

        return {
            message: 'professor logado com sucesso',
            token: professor.id,
            professor: {
                id: professor.id,
                nome: professor.nome,
                email: professor.email
            }
        }
    }
}