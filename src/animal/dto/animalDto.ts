import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsString, Min, MinLength } from "class-validator"

export class AnimalDto { // mettre les messages d'erreur de validation
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
