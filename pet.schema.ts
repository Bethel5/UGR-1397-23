import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {

  // @Prop()
  // id: number;

  @Prop()
  name: string;

  @Prop()
  breed: string;

  @Prop()
  type: string;

  @Prop()
  age: number;

}

export const PetSchema = SchemaFactory.createForClass(Pet);