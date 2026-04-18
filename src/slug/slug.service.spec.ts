import { Test, TestingModule } from '@nestjs/testing';
import { SlugService } from './slug.service';

describe('SlugService', () => {
  let service: SlugService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SlugService],
    }).compile();

    service = module.get<SlugService>(SlugService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ✅ Basic conversion
  it('should convert Hello World to slug', () => {
    expect(service.slugify('Hello World')).toBe('hello-world');
  });

  // ✅ uppercase handling
  it('should handle uppercase text', () => {
    expect(service.slugify('HELLO World')).toBe('hello-world');
  });

  // ✅ remove symbols
  it('should remove special characters', () => {
    expect(service.slugify('hello@world!')).toBe('helloworld');
  });

  // ✅ multiple spaces
  it('should handle multiple spaces', () => {
    expect(service.slugify('hello    world')).toBe('hello-world');
  });

  // ✅ empty string
  it('should return empty string when input is empty', () => {
    expect(service.slugify('')).toBe('');
  });

  // ✅ only spaces
  it('should return empty string when input is spaces only', () => {
    expect(service.slugify('   ')).toBe('');
  });

  // ✅ underscores and dashes
  it('should normalize underscores and dashes', () => {
    expect(service.slugify('hello___world---test')).toBe('hello-world-test');
  });
});
