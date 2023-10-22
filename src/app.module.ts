import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [HttpModule, PlanetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
