import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Tag from './tag.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class ForumTag extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @manyToMany(() => Tag, {
    pivotTable: 'forum_tags',
    localKey: 'id',
    pivotForeignKey: 'forum_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'tag_id',
  })
  declare tags: ManyToMany<typeof Tag>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}