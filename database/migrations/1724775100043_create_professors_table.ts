import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'professors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome', 100).notNullable()
      table.string('email', 100).notNullable().unique().notNullable()
      table.string('senha', 100).notNullable()
      table.string('rg', 9)
      table.string('cpf', 11)
      table.string('matricula', 20)
      table.date('data_nascimento')
      table.string('telefone', 20)
      table.string('img', 100)
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}