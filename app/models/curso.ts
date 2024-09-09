import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Aluno from './aluno.js'
import type{ HasMany } from '@adonisjs/lucid/types/relations'
import Professor from './professor.js'

export default class Curso extends BaseModel {
  @hasMany(() => Aluno)
  public alunos!: HasMany<typeof Aluno>

  @hasMany(() => Professor)
  public professores!: HasMany<typeof Professor>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare periodo: string

  @column()
  declare modulo: string
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}