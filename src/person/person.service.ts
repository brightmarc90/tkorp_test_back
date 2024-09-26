import { ConflictException, Injectable } from '@nestjs/common';
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
}
