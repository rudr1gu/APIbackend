import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Comentario from '#models/comentario'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Postagem extends BaseModel {
  @hasMany(() => Comentario)
  public comentarios!: HasMany<typeof Comentario>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titulo: string

  @column()
  declare conteudo: string

  @column()
  declare autor: string

  @column()
  declare img_autor: string

  @column()
  declare imagem: string

  @column()
  declare tags: string

  @column()
  declare qntd_estrelas: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}