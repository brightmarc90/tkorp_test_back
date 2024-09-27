import { Body, Controller, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto } from './dto/animalDto';

@Controller('animal')
export class AnimalController {
    constructor(private readonly animalService: AnimalService) {}
    // création
    @Post()
    createAnimal(@Body() animalDto: AnimalDto){
        return this.animalService.createAnimal(animalDto)
    }
    // modification
    // lecture
    // suppression
}
