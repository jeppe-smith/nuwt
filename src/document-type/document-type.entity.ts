import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('documentTypes')
export class DocumentType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  alias: string
}
