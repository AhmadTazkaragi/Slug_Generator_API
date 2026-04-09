import { Controller, Post, Body } from '@nestjs/common';

@Controller('slugify')
export class SlugController {

  @Post()
  slugify(@Body() body: { text: string }) {
    return {
      slug: 'placeholder',
    };
  }

}