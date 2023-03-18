import { http } from "@/config/aixos";
import { type IBaseFilter, type IProduct } from "@/interface";

class ProductService {
  async fetchProduct(): Promise<IBaseFilter<IProduct>> {
    const data = await http.get<IBaseFilter<IProduct>>(
      "products?take=10&page=1&sort=ASCENDING"
    );
    return data.data;
  }
}

export const productService = new ProductService();
