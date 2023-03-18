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
