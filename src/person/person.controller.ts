import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req } from '@nestjs/common';
import { PersonDto, UpdatePersonDto } from './dto/personDto';
import { PersonService } from './person.service';
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
    @Put(":id")
    updatePerson(@Body() updatePersonDto: UpdatePersonDto, @Param('id', ParseIntPipe) id: number)  {
        return this.personService.updatePerson(updatePersonDto, id)
    }
    // suppression
    @Delete(":id")
    deletePerson(@Param('id', ParseIntPipe) id: number) {
        return this.personService.deletePerson(id)
    }
}
