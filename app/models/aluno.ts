import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column()
  declare senha: string

  @column()
  declare rg: string

  @column()
  declare cpf: string

  @column()
  declare matricula: string

  @column()
  declare data_nascimento: Date

  @column()
  declare telefone: string

  @column()
  declare turma: string

  @column()
  declare genero: string
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}