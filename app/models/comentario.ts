import { DateTime } from 'luxon'
import { BaseModel, column} from '@adonisjs/lucid/orm'

export default class Comentario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare autor: string

  @column()
  declare img_autor: string

  @column()
  declare conteudo: string

  @column()
  declare postagemId: number

  @column()
  declare qntd_estrelas: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}