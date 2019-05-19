import { Module } from '@nestjs/common'
import { NodeTypeService } from './node-type.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NodeTypeRepository } from './node-type.repository'
import { NodeTypeController } from './node-type.controller'

@Module({
  imports: [TypeOrmModule.forFeature([NodeTypeRepository])],
  providers: [NodeTypeService],
  controllers: [NodeTypeController],
  exports: [NodeTypeService],
})
export class NodeTypeModule {}
