import { IsString } from "class-validator";

export class DiscussionDto{
    @IsString()
    prompt: string;
}