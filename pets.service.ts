import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet, PetDocument } from './schemas/pet.schema';

@Injectable()
export class PetsService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  async findAll(): Promise<Pet[]> {
    try {
      console.log('Fetching all pets');
      const pets = await this.petModel.find().exec();
  
      if (!pets || pets.length === 0) {
        console.error('No pets found');
        return [];
      }
  
      console.log('Raw Pets:', pets);
  
      return pets as Pet[];
    } catch (error) {
      console.error('Error fetching pets:', error);
      throw error;
    }
  }
  
  

}