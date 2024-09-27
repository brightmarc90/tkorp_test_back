import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnimalDto } from './dto/animalDto';

@Injectable()
export class AnimalService {
    constructor(private readonly prismaService: PrismaService) {}

    async createAnimal(animalDto: AnimalDto) {
        const {owner_id} = animalDto
        const person = await this.prismaService.person.findUnique({where: {id: owner_id}})
        if (!person) {
            throw new BadRequestException("Le maitre associé à cet anaimal n'existe pas dans la base")
        }
        const created = await this.prismaService.animal.create({
            data: animalDto
        })
        return created
    }
}
