import { Module } from '@nestjs/common'
import { ContentTypeService } from './content-type.service'
import { ContentTypeController } from './content-type.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ContentTypeRepository } from './content-type.repository'

@Module({
  imports: [TypeOrmModule.forFeature([ContentTypeRepository])],
  providers: [ContentTypeService],
  controllers: [ContentTypeController],
})
export class ContentTypeModule {}
