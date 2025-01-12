import { Module } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { DictionaryController } from './dictionary.controller';

@Module({
  imports: [],
  controllers: [DictionaryController],
  providers: [DictionaryService],
})
export class DictionaryModule {}
