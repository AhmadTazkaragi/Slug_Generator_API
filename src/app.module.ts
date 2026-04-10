import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlugController } from './slug/slug.controller';
import { SlugService } from './slug/slug.service';

@Module({
  imports: [],
  controllers: [AppController, SlugController],
  providers: [AppService, SlugService],
})
export class AppModule {}
