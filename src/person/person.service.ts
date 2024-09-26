import { PaginationDto } from './../dto/paginationDto';
import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PersonDto } from './dto/personDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class PersonService {
    constructor(private readonly prismaService: PrismaService) {}

    async createPerson(personDto: PersonDto) {
        // vérification de l'existence de la personne
        const {lastname, firstname, email, phone_number} = personDto
        const person = await this.prismaService.person.findUnique({where: {email: personDto.email}})
        if (person) {
            throw new ConflictException("Cette personne existe déjà")
        }
        // enregistrement dans la  base
        const createdPerson = await this.prismaService.person.create({
            data: {lastname, firstname, email, phone_number}
        })
        return {data: createdPerson}
    }

    async getAll(paginationDto: PaginationDto) {
        const {skip, limit} = paginationDto
        const numSkip = Number(skip)
        const numLimit = Number(limit)
        const totalCount = await this.prismaService.person.count()
        const persons = await this.prismaService.person.findMany({
            skip: skip === undefined ? 0 : numSkip,
            take: limit === undefined? undefined : numLimit
        })
        return {
            total: totalCount,
            data: persons,
            skip: skip === undefined ? 0 : numSkip,
            limit: limit === undefined? -1 : numLimit
        }
    }

    async getOne(id: number) {
        const person = await this.prismaService.person.findUnique({where: {id} })
        if (!person) throw new NotFoundException("Cette personne n'existe pas dans la base")
        return person
    }

    async deletePerson(id: number) {
        const person = await this.prismaService.person.findUnique({where: {id}, include: { animals: true }})
        if (!person) throw new NotFoundException("Cette personne n'existe pas dans la base")
        if (person.animals.length > 0){
            throw new BadRequestException("Cette personne ne peut être supprimée car elle a un ou plusieurs animaux enregistrés")
        }
        const deletedPerson = await this.prismaService.person.delete({where: {id}})
        return {data: deletedPerson}
    }
}
