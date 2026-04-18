import { Test, TestingModule } from '@nestjs/testing';
import { SlugController } from './slug.controller';
import { SlugService } from './slug.service';

describe('SlugController', () => {
  let controller: SlugController;

  // 🔥 Mock Service
  const mockSlugService = {
    slugify: jest.fn((text: string) => 'hello-world'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlugController],
      providers: [
        {
          provide: SlugService,
          useValue: mockSlugService,
        },
      ],
    }).compile();

    controller = module.get<SlugController>(SlugController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ✅ API behavior test
  it('should return slug from controller', () => {
    const result = controller.slugify({ text: 'Hello World' });

    expect(result).toEqual({
      slug: 'hello-world',
    });
  });

  // ✅ ensure service is called
  it('should call slugService.slugify', () => {
    controller.slugify({ text: 'anything' });

    expect(mockSlugService.slugify).toHaveBeenCalledWith('anything');
  });
});
