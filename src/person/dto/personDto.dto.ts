import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

// dto de création d'une Personne
export class PersonDto {
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

// dto de modification d'une personne
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