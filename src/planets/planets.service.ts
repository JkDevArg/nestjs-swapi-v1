import { Injectable } from '@nestjs/common';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';
import { Planet } from './entities/planet.entity';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class PlanetsService {

  constructor(private readonly httpService: HttpService) { }

  private readonly baseUrl = 'https://swapi.dev/api/planets';

  create(createPlanetDto: CreatePlanetDto) {
    return 'This action adds a new planet';
  }

  async findAll(): Promise<Planet[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}`),
    );
    return data.results.map((planet: Planet) => {
      return {
        nombre: planet.name,
        gravedad: planet.gravity,
        clima: planet.climate,
        poblacion: planet.population,
        terreno: planet.terrain,
        url: planet.url,
      };
    });
  }

  async findOne(id: number): Promise<Planet | null> {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/${id}`),
    );

    if (data) {
      const filteredData: Planet = {
        name: data.name,
        diameter: data.diameter,
        gravity: data.gravity,
        climate: data.climate,
        orbital_period: data.orbital_period,
        population: data.population,
        rotation_period: data.rotation_period,
        surface_water: data.surface_water,
        terrain: data.terrain,
        url: data.url,
      };

      return filteredData;
    }
    return null;
  }

  update(id: number, updatePlanetDto: UpdatePlanetDto) {
    return `This action updates a #${id} planet`;
  }

  remove(id: number) {
    return `This action removes a #${id} planet`;
  }
}
