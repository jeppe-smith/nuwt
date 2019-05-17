import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Body,
  Put,
  Post,
  Delete,
} from '@nestjs/common'
import { ContentTypeService } from './content-type.service'
import { ContentTypeRO, ContentTypeDTO } from './content-type.entity'
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError'

@Controller('content-types')
export class ContentTypeController {
  constructor(private readonly contentTypeService: ContentTypeService) {}

  @Get()
  async findAll(): Promise<ContentTypeRO[]> {
    try {
      const contentTypes = await this.contentTypeService.findAll()

      return contentTypes.map((contentType) => contentType.toResponseObject())
    } catch (error) {
      throw error
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ContentTypeRO> {
    try {
      const contentType = await this.contentTypeService.findById(id)

      return contentType.toResponseObject()
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new HttpException(
          'ContentType not found.',
          HttpStatus.BAD_REQUEST,
        )
      }

      throw error
    }
  }

  @Put()
  async create(@Body() data: ContentTypeDTO): Promise<ContentTypeRO> {
    try {
      const contentType = await this.contentTypeService.create(data)

      return contentType.toResponseObject()
    } catch (error) {
      throw error
    }
  }

  @Post(':id')
  async update(
    @Param('id') id: string,
    @Body() data: ContentTypeDTO,
  ): Promise<ContentTypeRO> {
    try {
      const contentType = await this.contentTypeService.update(id, data)

      return contentType.toResponseObject()
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new HttpException(
          'ContentType does not exist.',
          HttpStatus.BAD_REQUEST,
        )
      }

      throw error
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.contentTypeService.delete(id)
    } catch (error) {
      if (error instanceof EntityNotFoundError) {
        throw new HttpException(
          'ContentType does not exist.',
          HttpStatus.BAD_REQUEST,
        )
      }

      throw error
    }
  }
}
