import { Module } from '@nestjs/common'
import { NodeService } from './node.service'
import { NodeController } from './node.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NodeRepository } from './node.repository'
import { NodeTypeService } from 'src/node-type/node-type.service'
import { NodeTypeModule } from 'src/node-type/node-type.module'

@Module({
  imports: [TypeOrmModule.forFeature([NodeRepository]), NodeTypeModule],
  providers: [NodeService],
  controllers: [NodeController],
})
export class NodeModule {}
