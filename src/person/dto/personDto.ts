import { IsEmail, IsString, MinLength } from "class-validator"

export class PersonDto {
    @IsString()
    @MinLength(2)
    readonly lastname: string
    @IsString()
    @MinLength(2)
    readonly firstname: string
    @IsString()
    @IsEmail()
    readonly email: string
    @IsString()
    @MinLength(8)
    readonly phone_number: string
}