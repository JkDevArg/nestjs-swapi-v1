import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { PlanetsModule } from './planets/planets.module';
import { SpeciesModule } from './species/species.module';

@Module({
  imports: [HttpModule, PlanetsModule, SpeciesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
