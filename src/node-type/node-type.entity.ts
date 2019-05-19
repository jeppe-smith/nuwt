import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm'
import { Node } from 'src/node/node.entity'

export interface NodeTypeDTO {
  name: string
  alias: string
}

export enum NodeTypeConstraints {
  UQ_ALIAS = 'UQ_NODE_TYPE_ALIAS',
}

@Entity('node_types')
@Unique(NodeTypeConstraints.UQ_ALIAS, ['alias'])
export class NodeType {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  alias: string

  @OneToMany(() => Node, (node) => node.nodeType)
  nodes: Node[]
}
