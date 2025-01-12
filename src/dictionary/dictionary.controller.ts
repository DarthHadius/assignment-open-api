import { Controller, Get, Param } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get(':word')
  async getWord(@Param('word') word: string) {
    try {
      const wordData = await this.dictionaryService.getWordData(word);

      const wordInfo = {
        word: wordData[0]?.word,
        meaning: wordData[0]?.meanings[0]?.definitions[0]?.definition,
        partOfSpeech: wordData[0]?.meanings[0]?.partOfSpeech,
        synonyms: wordData[0]?.meanings[0]?.synonyms || []
      };

      // Adding creativity: Categorizing the word
      const category = this.categorizeWord(wordInfo.synonyms);

      // Adding a generated example sentence for the word
      const exampleSentence = this.generateExampleSentence(wordInfo.word);

      // Simulating word popularity (random number between 1 and 100)
      const popularity = Math.floor(Math.random() * 100) + 1;

      return {
        ...wordInfo,
        category,
        exampleSentence,
        popularity
      };
    } catch (error) {
      return { error: 'Word not found or API error' };
    }
  }

  // Function to categorize the word based on synonyms
  categorizeWord(synonyms: string[]): string {
    const greetings = ['hi', 'hello', 'greetings', 'welcome'];
    const emotions = ['love', 'anger', 'joy', 'sadness'];

    if (synonyms.some((synonym) => greetings.includes(synonym.toLowerCase()))) {
      return 'Greeting';
    } else if (synonyms.some((synonym) => emotions.includes(synonym.toLowerCase()))) {
      return 'Emotion';
    }
    return 'General';
  }

  // Function to generate a simple example sentence for the word
  generateExampleSentence(word: string): string {
    return `The word "${word}" is used in many contexts, for example: "I would like to say ${word} to everyone!"`;
  }
}
