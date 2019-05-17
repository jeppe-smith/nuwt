import { Injectable } from '@nestjs/common'
import { ContentTypeRepository } from './content-type.repository'
import { ContentTypeDTO, ContentType } from './content-type.entity'
import { DeleteResult } from 'typeorm'
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError'

@Injectable()
export class ContentTypeService {
  constructor(private readonly contentTypeRepository: ContentTypeRepository) {}

  findAll(): Promise<ContentType[]> {
    return this.contentTypeRepository.find()
  }

  findById(id: string): Promise<ContentType> {
    return this.contentTypeRepository.findOneOrFail(id)
  }

  findBySlug(slug: string): Promise<ContentType> {
    return this.contentTypeRepository.findOneOrFail({ slug })
  }

  async contentTypeExists(id: string): Promise<boolean> {
    const count = await this.contentTypeRepository.count({ id })

    return count > 0
  }

  async create(data: ContentTypeDTO): Promise<ContentType> {
    try {
      const contentType = this.contentTypeRepository.create(data)

      return this.contentTypeRepository.save(contentType)
    } catch (error) {
      throw error
    }
  }

  async update(
    id: string,
    data: Partial<ContentTypeDTO>,
  ): Promise<ContentType> {
    try {
      await this.contentTypeRepository.update(id, data)

      return this.findById(id)
    } catch (error) {
      throw error
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const contentTypeExists = await this.contentTypeExists(id)
      let result: DeleteResult

      if (!contentTypeExists) {
        throw new EntityNotFoundError(ContentType, id)
      }

      result = await this.contentTypeRepository.delete(id)

      return result.affected > 0
    } catch (error) {
      throw error
    }
  }
}
