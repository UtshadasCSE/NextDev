import type { IncomingMessage, ServerResponse } from "http";
import { insertProducts, readProduct } from "../service/product.service";
import type { IProducts } from "../types/product.type";
import { parseBody } from "../utility/parseBody";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  // console.log("Request", req);
  const urlParts = url?.split("/");
  // console.log(urlParts);

  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;

  // console.log("Products ID: ", id);

  // Get All Products ==== GET
  if (url === "/products" && method === "GET") {
    const products = readProduct();

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Products route!", data: products }));
  }
  // Get Specific Product === GET by ID
  else if (method === "GET" && id !== null) {
    const products = readProduct();

    const product = products.find((product: IProducts) => product.id === id);
    // console.log(product);

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Products route!", data: product }));
  }
  // Create a product === POST
  else if (method === "POST" && url === "/products") {
    const body = await parseBody(req);

    const products = readProduct();
    const newProducts = {
      id: Date.now(),
      ...body,
    };
    products.push(newProducts);
    insertProducts(products);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product created successfully!",
        data: products,
      }),
    );
  }
};
