import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm'
import { DocumentType } from '../document-type/document-type.entity'

@Entity('documents')
@Tree('materialized-path')
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  alias: string

  @Column({ unique: true })
  path: string

  @TreeChildren()
  children: Document[]

  @TreeParent()
  parent: Document

  @CreateDateColumn()
  created: Date

  @UpdateDateColumn()
  updated: Date

  @Column({ default: false })
  deleted: boolean

  @ManyToOne(() => DocumentType)
  documentType: DocumentType
}
