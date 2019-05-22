import { Controller, Get, Param } from '@nestjs/common'
import { DocumentTypeService } from './document-type.service'

@Controller('document-types')
export class DocumentTypeController {
  constructor(private readonly documentTypeService: DocumentTypeService) {}

  @Get()
  getAll() {
    return this.documentTypeService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.documentTypeService.getById(id)
  }
}
