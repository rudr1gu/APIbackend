import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'professors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.string('email', 100).notNullable()
      table.string('senha', 60).notNullable()
      table.string('telefone')
      table.string('rg', 9)
      table.string('cpf', 11)
      table.string('codigo_professor', 50)
      table.date('data_nascimento')
      //table.integer('id_endereco').unsigned().references('id').inTable('endereco_professor').onDelete('CASCADE')
    
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}