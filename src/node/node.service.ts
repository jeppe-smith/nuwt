import { Injectable } from '@nestjs/common'
import { NodeRepository } from './node.repository'
import { Node, NodeDTO } from './node.entity'
import { NodeTypeService } from 'src/node-type/node-type.service'

@Injectable()
export class NodeService {
  constructor(
    private readonly nodeRepository: NodeRepository,
    private readonly nodeTypeService: NodeTypeService,
  ) {}

  async create(data: NodeDTO) {
    try {
      const node = this.nodeRepository.create({
        ...data,
        nodeType: await this.nodeTypeService.getById(data.nodeType),
      })

      await this.nodeRepository.insert(node)

      return node
    } catch (error) {
      throw error
    }
  }

  getAll(): Promise<Node[]> {
    return this.nodeRepository.find()
  }

  getById(id: string) {
    return this.nodeRepository.findOne({ id })
  }

  getByAlias(alias: string) {
    return this.nodeRepository.findOne({ alias })
  }

  async updateById(id: string, data: Partial<NodeDTO>) {
    try {
      await this.nodeRepository.update(
        { id },
        {
          ...data,
          nodeType: await this.nodeTypeService.getById(data.nodeType),
        },
      )

      return this.getById(id)
    } catch (error) {
      throw error
    }
  }

  async updateByAlias(alias: string, data: Partial<NodeDTO>) {
    try {
      await this.nodeRepository.update(
        { alias },
        {
          ...data,
          nodeType: await this.nodeTypeService.getById(data.nodeType),
        },
      )

      return this.getByAlias(alias)
    } catch (error) {
      throw error
    }
  }

  deleteById(id: string) {
    return this.nodeRepository.delete({ id })
  }

  deleteByAlias(alias: string) {
    return this.nodeRepository.delete({ alias })
  }
}
