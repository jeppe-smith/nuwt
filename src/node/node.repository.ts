import { EntityRepository, Repository } from 'typeorm'
import { Node } from './node.entity'

@EntityRepository(Node)
export class NodeRepository extends Repository<Node> {}
