import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnimalDto } from './dto/animalDto';
import { PaginationDto } from 'src/dto/paginationDto';

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

    async getAll(paginationDto: PaginationDto) {
        const {skip, limit} = paginationDto
        const numSkip = Number(skip)
        const numLimit = Number(limit)
        const totalCount = await this.prismaService.animal.count()
        const animals = await this.prismaService.animal.findMany({
            skip: skip === undefined ? 0 : numSkip,
            take: limit === undefined? undefined : numLimit
        })
        return {
            total: totalCount,
            data: animals,
            skip: skip === undefined ? 0 : numSkip,
            limit: limit === undefined? -1 : numLimit
        }
    }

    async getOne(id: number) {
        const animal = await this.prismaService.animal.findUnique({where: {id} })
        if (!animal) throw new NotFoundException("Cet animal n'existe pas")
        return animal
    }
}
