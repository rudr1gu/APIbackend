import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, } from '@adonisjs/lucid/orm'
import Aluno from './aluno.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'



export default class Resposta extends BaseModel {
  @belongsTo(() => Aluno, {
    foreignKey: 'usuarioId'
  })
  declare aluno: BelongsTo<typeof Aluno>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare resposta: string

  @column()
  declare fileName: string

  @column()
  declare forumId: number

  @column()
  declare usuarioId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}