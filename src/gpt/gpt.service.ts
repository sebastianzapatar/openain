import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGptDto } from './dto/create-gpt.dto';
import { UpdateGptDto } from './dto/update-gpt.dto';
import OpenAI from 'openai';
import { TranslateDTO } from './dto/tranductorgpt.dto';
import { translateUseCase } from './usecases/translate.use-case';
import { DiscussionDto } from './dto/discussion.dto';
import { prosConsDicusserUseCase } from './usecases/discussion.usercase';

@Injectable()
export class GptService {
  private openai=new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })
  create(createGptDto: CreateGptDto) {
    return 'This action adds a new gpt';
  }
  async translate({prompt,lang}:TranslateDTO){
    return await translateUseCase(this.openai,{prompt,lang})
  }
  async discussion({prompt}:DiscussionDto){
    return await prosConsDicusserUseCase(this.openai,{prompt})
  }
  findAll() {
    return `This action returns all gpt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gpt`;
  }

  update(id: number, updateGptDto: UpdateGptDto) {
    return `This action updates a #${id} gpt`;
  }

  remove(id: number) {
    return `This action removes a #${id} gpt`;
  }
}
