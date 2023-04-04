import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field({nullable: false})
    id: string;

    @IsAlpha()
    @Field({nullable: false})
    name: string;
}