import { Type } from "class-transformer";
import { IsInt, IsOptional, Min } from "class-validator";

export class PaginationDto {
    @IsOptional()
    @IsInt()
    @Min(0)
    @Type(() => Number)
    skip?: number; // Début à partir de cet index

    @IsOptional()
    @IsInt()
    @Min(1)
    @Type(() => Number)
    limit?: number; // Nombre d'éléments par page
}