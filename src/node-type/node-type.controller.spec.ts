import { Test, TestingModule } from '@nestjs/testing';
import { NodeTypeController } from './node-type.controller';

describe('NodeType Controller', () => {
  let controller: NodeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NodeTypeController],
    }).compile();

    controller = module.get<NodeTypeController>(NodeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
