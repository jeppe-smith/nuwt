import { Module } from '@nestjs/common'
import { DocumentTypeService } from './document-type.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DocumentTypeRepository } from './document-type.repository'
import { DocumentTypeController } from './document-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentTypeRepository])],
  providers: [DocumentTypeService],
  controllers: [DocumentTypeController],
})
export class DocumentTypeModule {}
