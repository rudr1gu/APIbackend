import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Curso from '#models/curso'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Aluno extends BaseModel {
  @hasMany(() => Curso)
  public curso!: HasMany<typeof Curso>

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
  declare matricula: string

  @column()
  declare data_nascimento: Date

  @column()
  declare telefone: string

  @column()
  declare img: string
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime


}