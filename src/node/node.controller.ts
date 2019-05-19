import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Body,
} from '@nestjs/common'
import { NodeService } from './node.service'
import { NodeDTO } from './node.entity'

@Controller('nodes')
export class NodeController {
  constructor(private readonly nodeService: NodeService) {}

  @Get()
  getAll() {
    return this.nodeService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.nodeService.getById(id)
  }

  @Post()
  create(@Body() data: NodeDTO) {
    return this.nodeService.create(data)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<NodeDTO>) {
    return this.nodeService.updateById(id, data)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.nodeService.deleteById(id)
  }
}
