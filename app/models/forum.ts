import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany} from '@adonisjs/lucid/orm'
import Aluno from './aluno.js'
import Materia from './materia.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Resposta from './resposta.js'

export default class Forum extends BaseModel {
  @belongsTo(() => Aluno, {
    foreignKey: 'alunoId'
  })
  declare aluno: BelongsTo<typeof Aluno>

  @belongsTo(() => Materia, {
    foreignKey: 'materiaId'
  })
  declare materia: BelongsTo<typeof Materia>

  @hasMany(()=> Resposta, {
    foreignKey: 'forumId'
  })
  declare respostas: HasMany<typeof Resposta>

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