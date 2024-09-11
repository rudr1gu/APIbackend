import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Aluno from './aluno.js'
import Materia from './materia.js'

export default class Forum extends BaseModel {
  @hasMany(() => Aluno)
  public alunos!: HasMany<typeof Aluno>

  @hasMany(() => Materia)
  public materias!: HasMany<typeof Materia>

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