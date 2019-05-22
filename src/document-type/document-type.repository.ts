import { EntityRepository, Repository } from 'typeorm'
import { DocumentType } from './document-type.entity'

@EntityRepository(DocumentType)
export class DocumentTypeRepository extends Repository<DocumentType> {}
