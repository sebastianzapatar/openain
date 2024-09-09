import { IsString } from "class-validator";

export class TranslateDTO{
    @IsString()
    prompt: string;

    @IsString()
    lang: string;
}