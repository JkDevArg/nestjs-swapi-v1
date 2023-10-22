import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';
import { HttpService } from '@nestjs/axios';

describe('PlanetsController', () => {
  let controller: PlanetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanetsController],
      providers: [
        PlanetsService,
        {
          provide: HttpService,
          useValue: {}, // Valor simulado para HttpService
        },
      ],
    }).compile();

    controller = module.get<PlanetsController>(PlanetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
