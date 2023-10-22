import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsService } from './planets.service';
import { HttpService } from '@nestjs/axios';

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlanetsService,
        {
          provide: HttpService,
          useValue: {}, // Puedes usar un valor simulado para HttpService
        },
      ],
    }).compile();

    service = module.get<PlanetsService>(PlanetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
