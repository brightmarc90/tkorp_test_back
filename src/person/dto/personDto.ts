import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class PersonDto { // mettre les messages de validation
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly lastname: string
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly firstname: string
    @IsString()
    @IsEmail()
    readonly email: string
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly phone_number: string
}

export class UpdatePersonDto {
    @IsOptional()
    @IsString()
    @IsEmail()
    readonly email?: string
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly phone_number?: string
}