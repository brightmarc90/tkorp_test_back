import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from "@nestjs/config"
import { AnimalModule } from './animal/animal.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [PersonModule, PrismaModule, ConfigModule.forRoot({isGlobal: true}), AnimalModule, QuestionModule],
})
export class AppModule {}
