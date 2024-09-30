import { ApiTags } from '@nestjs/swagger';
import { QuestionService } from './question.service';
import { Controller, Get } from '@nestjs/common';

@ApiTags("Question")
@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

    // question 1: animal le plus vieux
    @Get("oldest-animal")
    getOldestAnimal() {
        return this.questionService.getOldestAnimal()
    }
    // question 2: l'espèce la mieux représentée
    @Get("common-species")
    getMostCommonSpecies() {
        return this.questionService.getMostCommonSpecies()
    }
    // question 3: la personne qui possède le plus d’animaux
    @Get("master-with-most-animals")
    getWithMostAnimals() {
        return this.questionService.getWithMostAnimals()
    }

    // question 4: la personne qui possède plus de chats
    @Get("master-with-most-cats")
    getWithMostCats() {
        return this.questionService.getWithMostCats()
    }

    // question 5: la personne qui possède l'animal le plus lourd, nom et poids de l'animal
    @Get("master-with-heaviest")
    getWithHeaviesAnimal() {
        return this.questionService.getWithHeaviesAnimal()
    }

    // question 6: la personne qui possède le groupe d'animaux le plus lourd, et le poids du groupe
    @Get("master-with-heaviest-group")
    getWithHeaviestGroup() {
        return this.questionService.getWithHeaviestGroup()
    }
}
