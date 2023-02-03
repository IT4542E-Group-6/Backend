import { DocumentType, getModelForClass, prop } from '@typegoose/typegoose';

export class Category {
  @prop({ required: true })
  name: string;

  @prop({ required: true })
  slug: string;

  @prop({ required: true })
  description: string;
}

export type CategoryDocument = DocumentType<Category>;
<<<<<<< HEAD
export const CategoryModel = getModelForClass(Category);
=======
export const CategoryModel = getModelForClass(Category);
>>>>>>> 7b45f9011dd146657d2945c3bcb3917d59125c68
