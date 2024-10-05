import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'respostas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.text('resposta').notNullable()
      table.string('file_name')
      table.integer('forum_id').unsigned().references('id').inTable('forums').onDelete('CASCADE')
      table.integer('usuario_id').unsigned().references('id').inTable('alunos').onDelete('CASCADE')
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}