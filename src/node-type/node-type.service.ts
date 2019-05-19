import { Injectable } from '@nestjs/common'
import { NodeTypeRepository } from './node-type.repository'
import { NodeTypeDTO } from './node-type.entity'

@Injectable()
export class NodeTypeService {
  constructor(private readonly nodeTypeRepository: NodeTypeRepository) {}

  async create(data: NodeTypeDTO) {
    try {
      const nodeType = this.nodeTypeRepository.create(data)

      await this.nodeTypeRepository.insert(nodeType)

      return nodeType
    } catch (error) {
      throw error
    }
  }

  getAll() {
    return this.nodeTypeRepository.find()
  }

  getById(id: string) {
    return this.nodeTypeRepository.findOne({ id })
  }

  getByAlias(alias: string) {
    return this.nodeTypeRepository.findOne({ alias })
  }

  async updateById(id: string, data: Partial<NodeTypeDTO>) {
    try {
      await this.nodeTypeRepository.update({ id }, data)

      return this.getById(id)
    } catch (error) {
      throw error
    }
  }

  async updateByAlias(alias: string, data: Partial<NodeTypeDTO>) {
    try {
      await this.nodeTypeRepository.update({ alias }, data)

      return this.getByAlias(alias)
    } catch (error) {
      throw error
    }
  }

  deleteById(id: string) {
    return this.nodeTypeRepository.delete({ id })
  }

  deleteByAlias(alias: string) {
    return this.nodeTypeRepository.delete({ alias })
  }
}
