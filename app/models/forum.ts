import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany} from '@adonisjs/lucid/orm'
import Aluno from './aluno.js'
import Materia from './materia.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Resposta from './resposta.js'
import Tag from './tag.js'

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

  @manyToMany(() => Tag, {
    pivotTable: 'forum_tags',  // Nome da tabela de junção
    pivotForeignKey: 'forum_id',  // Chave estrangeira para o fórum
    pivotRelatedForeignKey: 'tag_id'  // Chave estrangeira para a tag
  })
  declare tags: ManyToMany<typeof Tag>

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