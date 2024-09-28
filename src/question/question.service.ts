import { Injectable, NotFoundException } from '@nestjs/common';
import { first, identity, take } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionService { 
    constructor(private readonly prismaService: PrismaService) {}

    async getOldestAnimal() {
        const oldest = await this.prismaService.animal.findFirst({
            select: {
                name: true,
                species: true,
                breed: true,
                date_of_birth: true,
            },
            orderBy: {
                date_of_birth: "asc"
            }
        })
        return { data: oldest }
    }

    async getMostCommonSpecies() {
        const result = await this.prismaService.animal.groupBy({
            by: ["species"],
            _count: {
                id: true
            },
            orderBy: {
                _count: {
                    id: "desc"
                }
            },
            take: 1
        })
        if (result.length === 0) throw new NotFoundException("Aucun résultat")
        return {
            species: result[0].species,
            total: result[0]._count.id
        }
    }

    async getWithMostAnimals() {
        const result = await this.prismaService.person.findFirst({
            select: {
                firstname: true,
                lastname: true,
                _count: {
                  select: { animals: true }, // Compter les animaux liés à la personne
                },
            },
            orderBy: {
                animals: {
                  _count: 'desc', // Trie par le nombre d'animaux dans l'ordre décroissant
                },
            },
        })
        if (!result) throw new NotFoundException("Aucun résultat")
        return {
            firstname: result.firstname,
            lastname: result.lastname,
            total: result._count.animals
        }
    }

    async getWithMostCats() {
        const result = await this.prismaService.person.findFirst({
            where: {
                animals: {
                    some: {
                        species: "Cat"
                    }
                }
            },
            select: {
                firstname: true,
                lastname: true,
                animals: {
                    where: {
                        species: "Cat"
                    }
                }
            },
            orderBy: {
                animals: {
                  _count: 'desc', // Trie par le nombre d'animaux dans l'ordre décroissant
                },
            },
        })
        if (!result) throw new NotFoundException("Aucun résultat")
        return {
            firstname: result.firstname,
            lastname: result.lastname,
            total: result.animals.length
        }
    }

    async getWithHeaviesAnimal() {
        const result = await this.prismaService.animal.findFirst({
            select: {
                name: true,
                species: true,
                weight: true,
                owner: {
                    select: {
                        firstname: true,
                        lastname: true
                    }
                }
            },
            orderBy: {
                weight: "desc"
            }
        })
        if (!result) throw new NotFoundException("Aucun résultat")
        return {
            firstname: result.owner.firstname,
            lastname: result.owner.lastname,
            animal_name: result.name,
            animal_species: result.species,
            animal_weight: result.weight
        }
    }

    async getWithHeaviestGroup() {
        const result = await this.prismaService.animal.groupBy({
            by: ["owner_id"],
            _sum: {
                weight: true
            },
            orderBy: {
                _sum: {
                    weight: "desc"
                }
            },
            take: 1
        })
        if (!result) throw new NotFoundException("Aucun résultat")
        const owner = await this.prismaService.person.findUnique({where: {id: result[0].owner_id}})
        return {
            firstname: owner.firstname,
            lastname: owner.lastname,
            total_weight: result[0]._sum.weight
        }
    }
}
