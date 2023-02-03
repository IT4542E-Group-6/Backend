import { getModelForClass, prop } from '@typegoose/typegoose';
<<<<<<< HEAD
export class Country {
  @prop()
  name: string;
  @prop()
  en_name: string;
  @prop()
  code: string;
}
=======

export class Country {
  @prop()
  name: string;

  @prop()
  en_name: string;

  @prop()
  code: string;
}

>>>>>>> 7b45f9011dd146657d2945c3bcb3917d59125c68
export const CountryModel = getModelForClass(Country);
