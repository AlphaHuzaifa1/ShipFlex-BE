-- CreateTable
CREATE TABLE "merchant_addresses" (
    "id" SERIAL NOT NULL,
    "nickname" VARCHAR(100),
    "company_name" VARCHAR(100) NOT NULL,
    "contact_name" VARCHAR(100) NOT NULL,
    "contact_number" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "address_line_1" TEXT NOT NULL,
    "address_line_2" TEXT,
    "postal_code" VARCHAR(20) NOT NULL,
    "province" VARCHAR(100),
    "city" VARCHAR(100) NOT NULL,
    "default_ship_address" BOOLEAN NOT NULL DEFAULT false,
    "default_return_address" BOOLEAN NOT NULL DEFAULT false,
    "merchant_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "merchant_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "merchant_addresses_merchant_id_idx" ON "merchant_addresses"("merchant_id");

-- AddForeignKey
ALTER TABLE "merchant_addresses" ADD CONSTRAINT "merchant_addresses_merchant_id_fkey" FOREIGN KEY ("merchant_id") REFERENCES "merchants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
