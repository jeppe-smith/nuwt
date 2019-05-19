import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinTable,
} from 'typeorm'
import { NodeType } from 'src/node-type/node-type.entity'

export interface NodeDTO {
  name: string
  alias: string
  nodeType: string
}

export enum NodeConstraints {
  UQ_ALIAS = 'UQ_NODE_ALIAS',
}

@Entity('nodes')
@Unique(NodeConstraints.UQ_ALIAS, ['alias'])
export class Node {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  alias: string

  @ManyToOne(() => NodeType, (nodeType) => nodeType.nodes, { eager: true })
  @JoinTable()
  nodeType: NodeType
}
