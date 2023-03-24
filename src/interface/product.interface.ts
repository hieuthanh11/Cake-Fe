export interface IProduct {
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  category: ICategory;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface CreateProduct
  extends Omit<IProduct, "category" | "updatedAt" | "createdAt"> {
  categoryId: string;
  quantity: number;
}
