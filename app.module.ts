import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './pets/pets.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pets'),
    PetsModule,
  ],
})
export class AppModule {}