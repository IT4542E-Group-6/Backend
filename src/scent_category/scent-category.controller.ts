import { JsonController, Get } from 'routing-controllers';
@JsonController('/scents')
export class ScentCategoryController {
  private readonly categoryService = new CategoryService();

  @Get('', { transformResponse: false })
  async getAllScentCategories() {
    return this.categoryService.getAllScentCategories();
  }
}
