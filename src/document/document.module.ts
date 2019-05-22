import { Module } from '@nestjs/common'
import { DocumentService } from './document.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DocumentRepository } from './document.repository'
import { DocumentController } from './document.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentRepository])],
  providers: [DocumentService],
  controllers: [DocumentController],
})
export class DocumentModule {}
