import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';
import { Planet } from './entities/planet.entity';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Post()
  create(@Body() createPlanetDto: CreatePlanetDto) {
    return this.planetsService.create(createPlanetDto);
  }

  @Get()
  findAll(): Promise<Planet[]> {
    return this.planetsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Planet> {
    const planet = await this.planetsService.findOne(id);
    if (!planet) {
      throw new NotFoundException(`Planet with ID ${id} not found`);
    }

    return planet;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanetDto: UpdatePlanetDto) {
    return this.planetsService.update(+id, updatePlanetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planetsService.remove(+id);
  }
}
