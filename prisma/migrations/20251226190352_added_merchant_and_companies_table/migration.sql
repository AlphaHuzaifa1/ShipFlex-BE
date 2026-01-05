-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "contact_number" VARCHAR(50) NOT NULL,
    "shipments_volume" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "merchants" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "email_verification_otp" VARCHAR(6),
    "email_verification_expires_at" TIMESTAMP(3),
    "reset_password_otp" VARCHAR(6),
    "reset_password_expires_at" TIMESTAMP(3),
    "company_id" INTEGER NOT NULL,
    "status" VARCHAR(20) NOT NULL DEFAULT 'active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "merchants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "companies_name_idx" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "merchants_email_key" ON "merchants"("email");

-- CreateIndex
CREATE INDEX "merchants_email_idx" ON "merchants"("email");

-- CreateIndex
CREATE INDEX "merchants_status_idx" ON "merchants"("status");

-- AddForeignKey
ALTER TABLE "merchants" ADD CONSTRAINT "merchants_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
