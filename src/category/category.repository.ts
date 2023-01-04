import { CategoryDocument, CategoryModel } from './category.model';

export class CategoryRepository {
  async getAllCategories(): Promise<CategoryDocument[] | null> {
    return CategoryModel.find().lean();
  }

}
