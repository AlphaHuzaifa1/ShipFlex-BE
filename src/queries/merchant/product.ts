import prisma from "../../lib/prisma";

export const createProduct = async (data: {
  sku?: string;
  description: string;
  length?: number;
  width?: number;
  height?: number;
  weight?: number;
  category_hs_code?: string;
  country_of_origin?: string;
  pick_location?: string;
  source?: "manual" | "tiktok" | "shopify";
  external_id?: string;
  merchant_id: number;
}) => {
  return await prisma.products.create({
    data,
  });
};

export const getProductsByMerchantId = async (
  merchant_id: number,
  params: {
    page: number;
    pageSize: number;
    search?: string;
  }
) => {
  const { page, pageSize, search } = params;
  const skip = (page - 1) * pageSize;

  const where: any = {
    merchant_id,
  };

  if (search) {
    where.OR = [
      { sku: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  const [products, total] = await Promise.all([
    prisma.products.findMany({
      where,
      select: {
        id: true,
        sku: true,
        description: true,
        length: true,
        width: true,
        height: true,
        weight: true,
        category_hs_code: true,
        pick_location: true,
        source: true,
        updatedAt: true,
      },
      skip,
      take: pageSize,
      orderBy: {
        updatedAt: "desc",
      },
    }),
    prisma.products.count({ where }),
  ]);

  return {
    data: products,
    pagination: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    },
  };
};

export const checkProduct = async (merchantId: number, id: number) => {
  return await prisma.products.findUnique({
    where: {
      id,
      merchant_id: merchantId,
    },
  });
};

export const getProductById = async (id: number) => {
  return await prisma.products.findUnique({
    where: {
      id,
    },
  });
};

export const updateProduct = async (
  id: number,
  data: Partial<{
    sku: string;
    description: string;
    length: number;
    width: number;
    height: number;
    weight: number;
    category_hs_code: string;
    country_of_origin: string;
    pick_location: string;
  }>
) => {
  return await prisma.products.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteProduct = async (id: number) => {
  return await prisma.products.delete({
    where: {
      id,
    },
  });
};
