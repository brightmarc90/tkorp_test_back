import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, Req } from '@nestjs/common';
import { PersonDto } from './dto/personDto';
import { PersonService } from './person.service';
import { Request } from 'express';
import { PaginationDto } from 'src/dto/paginationDto';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}
    // creation
    @Post()
    createPerson(@Body() personDto: PersonDto) {
        return this.personService.createPerson(personDto)
    }
    // lecture
    @Get()
    getAll(@Query() paginationDto: PaginationDto) {
        return this.personService.getAll(paginationDto)
    }

    @Get(":id")
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.personService.getOne(id)
    }
    // modification
    // suppression
    @Delete(":id")
    deletePerson(@Param('id', ParseIntPipe) id: number) {
        return this.personService.deletePerson(id)
    }
}
