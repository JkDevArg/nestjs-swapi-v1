import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Post()
  async create(@Body() createSpeciesDto: CreateSpeciesDto) {
    return await this.speciesService.create(createSpeciesDto);
  }

  @Get()
  async findAll() {
    return await this.speciesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.speciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeciesDto: UpdateSpeciesDto) {
    return this.speciesService.update(+id, updateSpeciesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speciesService.remove(+id);
  }
}
