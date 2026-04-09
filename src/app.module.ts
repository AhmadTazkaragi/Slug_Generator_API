import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlugController } from './slug/slug.controller';

@Module({
  imports: [],
  controllers: [AppController, SlugController],
  providers: [AppService],
})
export class AppModule {}
