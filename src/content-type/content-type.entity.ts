import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm'

export interface ContentTypeRO {
  id: string
  name: string
  slug: string
  description: string
}

export interface ContentTypeDTO {
  name: string
  slug: string
  description: string
}

export enum ContentTypeConstraints {
  UQ_SLUG = 'UQ_CONTENT_TYPE_SLUG',
}

@Entity()
@Unique(ContentTypeConstraints.UQ_SLUG, ['slug'])
export class ContentType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  slug: string

  @Column('text')
  description: string

  toResponseObject() {
    const { id, name, slug, description } = this

    return {
      id,
      name,
      slug,
      description,
    }
  }
}
