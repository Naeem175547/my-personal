import { Test, TestingModule } from '@nestjs/testing';
import { RedixResolver } from './redix.resolver';

describe('RedixResolver', () => {
  let resolver: RedixResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedixResolver],
    }).compile();

    resolver = module.get<RedixResolver>(RedixResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
