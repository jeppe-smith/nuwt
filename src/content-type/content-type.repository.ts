import { EntityRepository, Repository } from 'typeorm'
import { ContentType } from './content-type.entity'

@EntityRepository(ContentType)
export class ContentTypeRepository extends Repository<ContentType> {}
