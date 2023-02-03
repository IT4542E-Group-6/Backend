import { getModelForClass, prop } from '@typegoose/typegoose';
<<<<<<< HEAD
export class District {
  @prop()
  code: string;
  @prop()
  name: string;
  @prop()
  city_code: string;
}
export const DistrictModel = getModelForClass(District);
=======

export class District {
  @prop()
  code: string;

  @prop()
  name: string;

  @prop()
  city_code: string;
}

export const DistrictModel = getModelForClass(District);
>>>>>>> 7b45f9011dd146657d2945c3bcb3917d59125c68
