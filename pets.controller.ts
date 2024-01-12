import { Controller, Get, Param } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet } from './schemas/pet.schema';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Get()
  findAll(): Promise<Pet[]> {
    return this.petsService.findAll();
  }

}