import { getModelForClass, prop } from '@typegoose/typegoose';
<<<<<<< HEAD
export class City {
  @prop()
  code: string;
  @prop()
  name: string;
  @prop()
  country_code: string;
}
=======

export class City {
  @prop()
  code: string;

  @prop()
  name: string;

  @prop()
  country_code: string;
}

>>>>>>> 7b45f9011dd146657d2945c3bcb3917d59125c68
export const CityModel = getModelForClass(City);
