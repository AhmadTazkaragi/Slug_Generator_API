import { Injectable } from '@nestjs/common';

@Injectable()
export class SlugService {
  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[_\s]+/g, '-') // underscores + spaces → -
      .replace(/[^a-z0-9-]/g, '') // remove special chars
      .replace(/-+/g, '-') // collapse multiple dashes
      .replace(/^-|-$/g, ''); // trim dashes
  }
}
