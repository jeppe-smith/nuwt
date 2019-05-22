import { Injectable, OnModuleInit } from '@nestjs/common'
import { DocumentRepository } from './document.repository'
import { DocumentDTO } from './document.dto'
import { QueryFailedError, getManager } from 'typeorm'
import { Document } from './document.entity'

@Injectable()
export class DocumentService implements OnModuleInit {
  constructor(private readonly documentRepository: DocumentRepository) {}

  async onModuleInit() {
    try {
      const site = await this.documentRepository.save({
        name: 'Site',
        alias: 'site',
        path: '/',
      })
    } catch (error) {
      if (
        error instanceof QueryFailedError === false ||
        !error.message.includes(
          'duplicate key value violates unique constraint',
        )
      ) {
        throw error
      }
    }
  }

  async create(data: DocumentDTO) {
    try {
      const document = this.documentRepository.create({ ...data, parent: null })

      await this.documentRepository.save(document)

      return document
    } catch (error) {
      throw error
    }
  }

  getAll() {
    return this.documentRepository.find()
  }

  getById(id: string) {
    return this.documentRepository.findOne({ id })
  }

  async getTrees() {
    try {
      const manager = getManager()
      const treeRepository = manager.getTreeRepository(Document)

      return await treeRepository.findTrees()
    } catch (error) {
      throw error
    }
  }
}
