import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'forums'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo').notNullable()
      table.string('descricao').notNullable()
      table.string('fileName')
      table.integer('alunoId').unsigned().references('id').inTable('alunos').onDelete('CASCADE')
      table.integer('materiaId').unsigned().references('id').inTable('materias').onDelete('CASCADE')
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}