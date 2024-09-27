import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto, UpdateAnimalDto } from './dto/animalDto';
import { PaginationDto } from 'src/dto/paginationDto';

@Controller('animal')
export class AnimalController {
    constructor(private readonly animalService: AnimalService) {}
    // création
    @Post()
    createAnimal(@Body() animalDto: AnimalDto){
        return this.animalService.createAnimal(animalDto)
    }
    // modification
    @Put(":id")
    updateAnimal(@Body() updateAnimalDto: UpdateAnimalDto, @Param("id", ParseIntPipe) id: number) {
        return this.animalService.updateAnimal(updateAnimalDto, id)
    }
    // lecture
    @Get()
    getAll(@Query() paginationDto: PaginationDto) {
        return this.animalService.getAll(paginationDto)
    }

    @Get(":id")
    getOne(@Param("id", ParseIntPipe) id: number) {
        return this.animalService.getOne(id)
    }
    // suppression
    @Get(":id")
    deleteAnimal(@Param("id", ParseIntPipe) id: number) {
        return this.animalService.deleteAnimal(id)
    }
}
