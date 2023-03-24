import Test from "@/components/test/test";
import { type CreateProduct } from "@/interface";

import { productService } from "@/services/user.service";
import React from "react";
import { useMutation, useQuery } from "react-query";

export default function Home() {
  const { isLoading, error, data, isSuccess, isIdle } = useQuery({
    queryKey: "product",
    // eslint-disable-next-line @typescript-eslint/unbound-method
    queryFn: productService.fetchProduct,
  });

  const mutation = useMutation((newTodo: CreateProduct) => {
    return productService.createProduct(newTodo);
  });

  if (isLoading || isIdle) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1></h1>;
  }

  return (
    <div>
      home
      <Test />
      <ul>
        {isSuccess &&
          data.data.length > 0 &&
          data.data.map((todo) => <li key={todo.name}>{todo.name}</li>)}
      </ul>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          mutation.mutate({
            categoryId: "4916a6fe-8a0c-4012-8947-53d75e78afcb",
            quantity: 10,
            name: "abc",
            description: "adsadas",
            price: 10000,
          });
        }}
      >
        Click Create
      </button>
    </div>
  );
}
