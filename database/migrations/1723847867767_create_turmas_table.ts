import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'turmas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('turno', 50)
      table.string('modulo', 100)
      table.integer('id_aluno').unsigned().references('id').inTable('aluno').onDelete("CASCADE")
      table.integer('id_professor').unsigned().references('id').inTable('professor').onDelete('CASCADE')
      table.string('nome_curso', 100)

      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}