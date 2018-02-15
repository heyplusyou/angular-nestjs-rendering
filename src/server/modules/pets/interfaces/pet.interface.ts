import { ObjectID } from 'bson';

export interface IPet {
  _id: ObjectID;
  name: string;
  age: number;
  species: IPetSpecies;
  owner?: string;
  dateAdopted: Date;
}

export enum SpeciesTypeEnum { BIRD, MAMMAL, BUG, FISH }
export interface  IPetSpecies {
  readonly speciesName: string;
  readonly speciesFamily?: string;
  readonly speciesType: SpeciesTypeEnum;
}

export interface  IOwner {
  readonly id?: ObjectID;
  readonly first_name: string;
  readonly last_name: string;
  readonly mobile?: string;
  readonly email?: string;
  readonly pets?: IPet[];
}

export interface IAccount {
  readonly id: number;
  readonly amount: number;
  readonly ownerId: ObjectID;
}