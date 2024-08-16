import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare turno: string

  @column()
  declare modulo:string

  @column()
  declare id_aluno: number

  @column()
  declare id_professor: number 

  @column()
  declare nome_curso: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}