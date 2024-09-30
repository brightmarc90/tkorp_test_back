import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator"

// dto de création d'animal
export class AnimalDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly name: string
    @Type(() => Date)
    @IsDate()
    readonly date_of_birth: Date
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly species: string
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly breed: string
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly color: string
    @IsNumber()
    @Min(1)
    readonly weight: number
    @IsNumber()
    @Min(1)
    readonly owner_id: number
}

// dto de modification d'animal
export class UpdateAnimalDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly name: string
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    readonly date_of_birth: Date
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly species: string
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly breed: string
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly color: string
    @IsOptional()
    @IsNumber()
    @Min(1)
    readonly weight: number
    @IsOptional()
    @IsNumber()
    @Min(1)
    readonly owner_id: number
}