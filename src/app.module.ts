import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictionaryService } from './dictionary/dictionary.service';
import { DictionaryController } from './dictionary/dictionary.controller';
import { DictionaryModule } from './dictionary/dictionary.module';

@Module({
  imports: [DictionaryModule],
  controllers: [AppController, DictionaryController],
  providers: [AppService, DictionaryService],
})
export class AppModule {}
