import { Body, Controller, Post } from '@nestjs/common';
import { PersonDto } from './dto/personDto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}
    // creation
    @Post()
    createPerson(@Body() personDto: PersonDto) {
        return this.personService.createPerson(personDto)
    }
    // lecture
    // modification
    // suppression
}
