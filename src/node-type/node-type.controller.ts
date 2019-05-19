import {
  Controller,
  Get,
  Body,
  Post,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { NodeTypeService } from './node-type.service'
import { NodeTypeDTO } from './node-type.entity'

@Controller('node-types')
export class NodeTypeController {
  constructor(private readonly nodeTypeService: NodeTypeService) {}

  @Get()
  getAll() {
    return this.nodeTypeService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.nodeTypeService.getById(id)
  }

  @Post()
  create(@Body() data: NodeTypeDTO) {
    return this.nodeTypeService.create(data)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<NodeTypeDTO>) {
    return this.nodeTypeService.updateById(id, data)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.nodeTypeService.deleteById(id)
  }
}
