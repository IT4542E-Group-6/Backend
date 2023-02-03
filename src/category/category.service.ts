import { CategoryRepository } from './category.repository';

export class CategoryService {
  private readonly categoryRepository = new CategoryRepository();

  async getAllCategories() {
    return this.categoryRepository.getAllCategories();
  }

  async getCategoryBySlug(slug: string): Promise<string | null> {
    return this.categoryRepository.getCategoryBySlug(slug);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 7b45f9011dd146657d2945c3bcb3917d59125c68
