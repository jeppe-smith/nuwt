import { EntityRepository, Repository } from 'typeorm'
import { NodeType } from './node-type.entity'

@EntityRepository(NodeType)
export class NodeTypeRepository extends Repository<NodeType> {}
