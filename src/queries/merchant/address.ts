import prisma from "../../lib/prisma";

export const createAddress = async (data: {
  nickname?: string;
  company_name: string;
  contact_name: string;
  contact_number: string;
  email: string;
  country: string;
  address_line_1: string;
  address_line_2?: string;
  postal_code: string;
  province?: string;
  city: string;
  merchant_id: number;
}) => {
  return await prisma.merchantAddresses.create({
    data,
  });
};

export const getAddressesByMerchantId = async (
  merchant_id: number,
  params: {
    page: number;
    pageSize: number;
    search?: string;
  },
) => {
  const { page, pageSize, search } = params;
  const skip = (page - 1) * pageSize;

  const where: any = {
    merchant_id,
  };

  if (search) {
    where.OR = [
      { nickname: { contains: search, mode: "insensitive" } },
      { company_name: { contains: search, mode: "insensitive" } },
      { contact_name: { contains: search, mode: "insensitive" } },
      { city: { contains: search, mode: "insensitive" } },
    ];
  }

  const [addresses, total] = await Promise.all([
    prisma.merchantAddresses.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: {
        updatedAt: "desc",
      },
    }),
    prisma.merchantAddresses.count({ where }),
  ]);

  return {
    data: addresses,
    pagination: {
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    },
  };
};

export const checkAddress = async (merchantId: number, id: number) => {
  return await prisma.merchantAddresses.findUnique({
    where: {
      id,
      merchant_id: merchantId,
    },
  });
};

export const getAddressById = async (id: number) => {
  return await prisma.merchantAddresses.findUnique({
    where: {
      id,
    },
  });
};

export const updateAddress = async (
  id: number,
  data: Partial<{
    nickname: string;
    company_name: string;
    contact_name: string;
    contact_number: string;
    email: string;
    country: string;
    address_line_1: string;
    address_line_2: string;
    postal_code: string;
    province: string;
    city: string;
  }>,
) => {
  return await prisma.merchantAddresses.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteAddress = async (id: number) => {
  return await prisma.merchantAddresses.delete({
    where: {
      id,
    },
  });
};

export const updateAddressFlags = async (
  id: number,
  merchant_id: number,
  data: {
    default_ship_address?: boolean;
    default_return_address?: boolean;
  },
) => {
  return await prisma.$transaction(async (tx) => {
    if (data.default_ship_address === true) {
      await tx.merchantAddresses.updateMany({
        where: {
          merchant_id,
          id: { not: id },
        },
        data: {
          default_ship_address: false,
        },
      });
    }

    if (data.default_return_address === true) {
      await tx.merchantAddresses.updateMany({
        where: {
          merchant_id,
          id: { not: id },
        },
        data: {
          default_return_address: false,
        },
      });
    }

    return await tx.merchantAddresses.update({
      where: {
        id,
      },
      data,
    });
  });
};
