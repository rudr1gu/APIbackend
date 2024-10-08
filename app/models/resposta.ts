import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, } from '@adonisjs/lucid/orm'
import Aluno from './aluno.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Professor from './professor.js'



export default class Resposta extends BaseModel {
  @belongsTo(() => Aluno, {
    foreignKey: 'alunoId'
  })
  declare aluno: BelongsTo<typeof Aluno>

  @belongsTo(() => Professor,{
    foreignKey: 'professorId'
  })
  declare professor: BelongsTo<typeof Professor>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare resposta: string

  @column()
  declare fileName: string

  @column()
  declare forumId: number

  @column()
  declare alunoId: number

  @column()
  declare professorId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}