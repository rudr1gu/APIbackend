import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Professor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column()
  declare senha: string

  @column()
  declare rg: string

  @column()
  declare cpf: string

  @column()
  declare codigo_professor: string

  @column()
  declare data_nascimento: Date 

  //@column()
  //declare id_endereco: number

  @column()
  declare telefone: string

  @column()
  declare genero: string


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}