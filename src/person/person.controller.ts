import { Body, Controller, Delete, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { PersonDto } from './dto/personDto';
import { PersonService } from './person.service';
import { Request } from 'express';

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
    @Delete(":id")
    deletePerson(@Param('id', ParseIntPipe) id: number) {
        return this.personService.deletePerson(id)
    }
}
