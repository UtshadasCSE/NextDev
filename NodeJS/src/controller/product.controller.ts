import type { IncomingMessage, ServerResponse } from "http";

import { insertProducts, readProduct } from "../service/product.service";

import { parseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendResponse";
import type { IProducts } from "../types/product.type";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split("/");

  const id = urlParts?.[1] === "products" ? Number(urlParts[2]) : null;

  // GET ALL
  if (url === "/products" && method === "GET") {
    const products = readProduct();

    return sendResponse(res, 200, "Products fetched successfully", products);
  }

  // GET ONE
  if (method === "GET" && id !== null) {
    const products = readProduct();

    const product = products.find((p: any) => p.id === id);

    if (!product) {
      return sendResponse(res, 404, "Product not found");
    }

    return sendResponse(res, 200, "Product fetched successfully", product);
  }

  // CREATE
  if (method === "POST" && url === "/products") {
    const body = await parseBody(req);

    const products = readProduct();

    const newProduct = {
      id: Date.now(),
      ...body,
    };

    products.push(newProduct);

    insertProducts(products);

    return sendResponse(res, 201, "Product created successfully", newProduct);
  }

  // UPDATE
  if (method === "PUT" && id !== null) {
    const body = await parseBody(req);

    const products = readProduct();

    const index = products.findIndex((p: IProducts) => p.id === id);

    if (index < 0) {
      return sendResponse(res, 404, "Product not found");
    }

    products[index] = {
      id: products[index].id,
      ...body,
    };

    insertProducts(products);

    return sendResponse(
      res,
      200,
      "Product updated successfully",
      products[index],
    );
  }

  // DELETE
  if (method === "DELETE" && id !== null) {
    const products = readProduct();

    const index = products.findIndex((p: IProducts) => p.id === id);

    if (index < 0) {
      return sendResponse(res, 404, "Product not found");
    }

    const deletedProduct = products[index];

    products.splice(index, 1);

    insertProducts(products);

    return sendResponse(
      res,
      200,
      "Product deleted successfully",
      deletedProduct,
    );
  }

  return sendResponse(res, 404, "Route not found");
};
