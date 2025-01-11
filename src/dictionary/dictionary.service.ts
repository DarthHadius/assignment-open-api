import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class DictionaryService {
  // Fetch data from the Free Dictionary API
  async getWordData(word: string): Promise<any> {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) {
      throw new Error('Word not found');
    }
    const data = await response.json();
    return data;
  }
}