import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreateUserInput {
    @IsAlpha()
    @Field({nullable: false})
    name: string;
}