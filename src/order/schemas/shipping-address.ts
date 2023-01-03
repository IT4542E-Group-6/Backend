import { prop } from '@typegoose/typegoose';

export class OrderShippingAddress {
  @prop({ required: true })
  receiver_name: string;
  @prop({ required: true })
  receiver_phone_number: string;
  @prop({ required: true })
  city: string;
  @prop({ required: true })
  district: string;
}
