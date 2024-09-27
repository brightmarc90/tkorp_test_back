import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from "@nestjs/config"
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [PersonModule, PrismaModule, ConfigModule.forRoot({isGlobal: true}), AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
