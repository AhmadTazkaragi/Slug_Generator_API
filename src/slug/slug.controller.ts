import { Controller, Post, Body } from '@nestjs/common';
import { SlugService } from './slug.service';

@Controller('slugify')
export class SlugController {

  constructor(private readonly slugService: SlugService) {}

  @Post()
  slugify(@Body() body: { text: string }) {
    const slug = this.slugService.slugify(body.text);

    return { slug };
  }

} 