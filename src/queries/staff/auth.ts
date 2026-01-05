import prisma from "../../lib/prisma";

export const findById = async (id: string) => {
  return prisma.example.findUnique({
    where: { id },
  });
};
