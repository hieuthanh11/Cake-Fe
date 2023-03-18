import Test from "@/components/test/test";
import { productService } from "@/services/user.service";
import React from "react";
import { useQuery } from "react-query";

export default function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: "product",
    // eslint-disable-next-line @typescript-eslint/unbound-method
    queryFn: productService.fetchProduct,
  });
  if (isLoading) {
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
        {data.data.length > 0 &&
          data.data.map((todo) => <li key={todo.name}>{todo.name}</li>)}
      </ul>
    </div>
  );
}
