import { Injectable } from '@nestjs/common'
import { DocumentTypeRepository } from './document-type.repository'
import { DocumentTypeDTO } from './document-type.dto'
import { DocumentDTO } from 'src/document/document.dto'

@Injectable()
export class DocumentTypeService {
  constructor(
    private readonly documentTypeRepository: DocumentTypeRepository,
  ) {}

  create(data: DocumentTypeDTO) {
    return this.documentTypeRepository.save(data)
  }

  async update(id: string, data: Partial<DocumentDTO>) {
    try {
      await this.documentTypeRepository.update({ id }, data)

      return this.getById(id)
    } catch (error) {
      throw error
    }
  }

  getAll() {
    return this.documentTypeRepository.find()
  }

  getById(id: string) {
    return this.documentTypeRepository.findOne({ id })
  }

  getByAlias(alias: string) {
    return this.documentTypeRepository.findOne({ alias })
  }
}
