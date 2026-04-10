import { Injectable } from '@nestjs/common';

@Injectable()
export class SlugService {

  slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '') // إزالة الرموز
      .replace(/\s+/g, '-')         // مسافات → -
      .replace(/-+/g, '-');         // منع التكرار
  }

}