import prisma from "../../lib/prisma";

export const findById = async (id: string) => {
  return prisma.merchants.findUnique({
    where: { id: Number(id) },
  });
};
