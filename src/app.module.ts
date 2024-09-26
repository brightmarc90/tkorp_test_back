import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [PersonModule, PrismaModule, ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
