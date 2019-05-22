import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import { DocumentService } from './document.service'
import { DocumentDTO } from './document.dto'

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  create(@Body() data: DocumentDTO) {
    return this.documentService.create(data)
  }

  @Get()
  getAll() {
    return this.documentService.getAll()
  }

  @Get('tree')
  getTree() {
    return this.documentService.getTrees()
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.documentService.getById(id)
  }
}
