import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'forums'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('titulo').notNullable()
      table.string('descricao').notNullable()
      table.string('fileName')
      table.integer('aluno_id').unsigned().references('id').inTable('alunos').onDelete('CASCADE')
      table.integer('professor_id').unsigned().references('id').inTable('professors').onDelete('CASCADE')
      table.integer('materia_id').unsigned().references('id').inTable('materias').onDelete('CASCADE')
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}