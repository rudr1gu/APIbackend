import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Forum extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titulo: string

  @column()
  declare descricao: string

  @column()
  declare fileName: string

  @column()
  declare alunoId: number

  @column()
  declare materiaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}