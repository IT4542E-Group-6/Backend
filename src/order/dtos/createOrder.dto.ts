import { Expose, Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
<<<<<<< HEAD
=======
  IsOptional,
>>>>>>> 7b45f9011dd146657d2945c3bcb3917d59125c68
  IsString,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
<<<<<<< HEAD
import { OrderCommercialProduct } from '../schemas/order-commercial-product';
import { OrderShippingAddress } from '../schemas/shipping-address';
=======
import { OrderProduct } from '../order-product';
import { OrderShippingAddress } from '../shipping-address';
>>>>>>> 7b45f9011dd146657d2945c3bcb3917d59125c68

export class CreateOrderDto {
  @Expose()
  @IsNotEmpty()
  @IsEmail()
  customer_email: string;

  @Expose()
  @IsNotEmpty()
  @Type(() => OrderShippingAddress)
  shipping_address: OrderShippingAddress;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  payment_method: string;

  @Expose()
  @IsNotEmpty()
  @ValidateNested({ each: true })
<<<<<<< HEAD
  @Type(() => OrderCommercialProduct)
  products: OrderCommercialProduct[];
=======
  @Type(() => OrderProduct)
  products: OrderProduct[];
>>>>>>> 7b45f9011dd146657d2945c3bcb3917d59125c68

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  total_product_cost: number;
}
