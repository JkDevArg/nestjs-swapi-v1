import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [PlanetsController],
  providers: [PlanetsService],
})
export class PlanetsModule {}
