import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/errorHandler";
import * as productQueries from "../../queries/merchant/product";

export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const merchant_id = parseInt(req.decoded.userId as string);
    const {
      sku,
      description,
      length,
      width,
      height,
      weight,
      category_hs_code,
      country_of_origin,
      pick_location,
      source,
      external_id,
    } = req.body;

    const product = await productQueries.createProduct({
      sku,
      description,
      length: length ? parseFloat(length) : undefined,
      width: width ? parseFloat(width) : undefined,
      height: height ? parseFloat(height) : undefined,
      weight: weight ? parseFloat(weight) : undefined,
      category_hs_code,
      country_of_origin,
      pick_location,
      source,
      external_id,
      merchant_id,
    });

    return res.status(201).json({
      message: "Product created successfully",
      response: {
        data: product,
      },
      error: null,
    });
  }
);

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const merchant_id = parseInt(req.decoded.userId as string);
  const { page, pageSize, search } = req.query as any;

  const result = await productQueries.getProductsByMerchantId(merchant_id, {
    page: parseInt(page),
    pageSize: parseInt(pageSize),
    search: search as string,
  });

  return res.status(200).json({
    message: "Products fetched successfully",
    response: {
      data: result,
    },
    error: null,
  });
});

export const getProductById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const merchant_id = parseInt(req.decoded.userId as string);

    const getProduct = await productQueries.checkProduct(
      merchant_id,
      parseInt(id)
    );
    if (!getProduct) {
      return res.status(404).json({
        message: "Product not found",
        response: null,
        error: "Product not found",
      });
    }

    const product = await productQueries.getProductById(parseInt(id));

    return res.status(200).json({
      message: "Product fetched successfully",
      response: {
        data: product,
      },
      error: null,
    });
  }
);

export const updateProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const merchant_id = parseInt(req.decoded.userId as string);
    const {
      sku,
      description,
      length,
      width,
      height,
      weight,
      category_hs_code,
      country_of_origin,
      pick_location,
    } = req.body;

    const getProduct = await productQueries.checkProduct(
      merchant_id,
      parseInt(id)
    );
    if (!getProduct) {
      return res.status(404).json({
        message: "Product not found",
        response: null,
        error: "Product not found",
      });
    }

    const product = await productQueries.updateProduct(parseInt(id), {
      sku,
      description,
      length: length ? parseFloat(length) : undefined,
      width: width ? parseFloat(width) : undefined,
      height: height ? parseFloat(height) : undefined,
      weight: weight ? parseFloat(weight) : undefined,
      category_hs_code,
      country_of_origin,
      pick_location,
    });

    return res.status(200).json({
      message: "Product updated successfully",
      response: {
        data: product,
      },
      error: null,
    });
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const merchant_id = parseInt(req.decoded.userId as string);

    const getProduct = await productQueries.checkProduct(
      merchant_id,
      parseInt(id)
    );
    if (!getProduct) {
      return res.status(404).json({
        message: "Product not found",
        response: null,
        error: "Product not found",
      });
    }

    await productQueries.deleteProduct(parseInt(id));

    return res.status(200).json({
      message: "Product deleted successfully",
      response: null,
      error: null,
    });
  }
);
