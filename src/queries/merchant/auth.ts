import prisma from "../../lib/prisma";
import {
  RegisterMerchant,
  UpdateMerchant,
  ForgotPassword,
  ResetPassword,
} from "../../interface/merchant/auth";

const getUserByEmail = async (email: string) => {
  return prisma.merchants.findUnique({
    where: { email },
    select: {
      id: true,
      email_verified: true,
      email_verification_expires_at: true,
      status: true,
    },
  });
};

const getUserForJwt = async (email: string) => {
  return prisma.merchants.findUnique({
    where: { email },
    select: {
      id: true,
      company_id: true,
      email_verified: true,
      status: true,
    },
  });
};

const getUserWithPassword = async (email: string) => {
  return prisma.merchants.findUnique({
    where: { email },
    select: {
      email: true,
      first_name: true,
      last_name: true,
      password: true,
      email_verified: true,
      status: true,
    },
  });
};

const createOrUpdateMerchantTransaction = async (
  companyData: { name: string; contact: string },
  userData: RegisterMerchant,
) => {
  return prisma.$transaction(async (tx) => {
    return tx.merchants.upsert({
      where: { email: userData.email },
      update: {
        first_name: userData.first_name,
        last_name: userData.last_name,
        phone: userData.phone,
        password: userData.password,
        email_verification_otp: userData.email_verification_otp,
        email_verification_expires_at: userData.email_verification_otp_expiry,
        company: {
          update: {
            name: companyData.name,
            display_name: companyData.name,
            contact_number: companyData.contact,
          },
        },
      },
      create: {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        email_verification_otp: userData.email_verification_otp,
        email_verification_expires_at: userData.email_verification_otp_expiry,
        company: {
          create: {
            name: companyData.name,
            display_name: companyData.name,
            contact_number: companyData.contact,
          },
        },
      },
    });
  });
};

const verifyUserEmail = async (email: string, otp: string) => {
  try {
    const result = await prisma.merchants.update({
      where: {
        email,
        email_verification_otp: otp,
        email_verified: false,
        email_verification_expires_at: { gt: new Date() },
      },
      data: {
        email_verified: true,
        email_verification_otp: null,
        email_verification_expires_at: null,
      },
    });

    return result;
  } catch (error) {
    return null;
  }
};

const updateProfile = async (merchantData: UpdateMerchant) => {
  return prisma.merchants.update({
    where: { id: merchantData.user_id },
    data: {
      first_name: merchantData.first_name,
      last_name: merchantData.last_name,
      phone: merchantData.phone,
    },
  });
};

const getUserPassword = async (userId: number) => {
  return prisma.merchants.findUnique({
    where: { id: userId },
    select: {
      password: true,
    },
  });
};

const updatePassword = async (userId: number, password: string) => {
  return prisma.merchants.update({
    where: { id: userId },
    data: {
      password: password,
    },
  });
};

const forgotPassword = async (forgotPassword: ForgotPassword) => {
  return prisma.merchants.update({
    where: { id: forgotPassword.user_id },
    data: {
      reset_password_otp: forgotPassword.reset_password_otp,
      reset_password_expires_at: forgotPassword.reset_password_otp_expiry,
    },
    select: {
      first_name: true,
      last_name: true,
    },
  });
};

const resetPassword = async (resetPassword: ResetPassword) => {
  try {
    const result = await prisma.merchants.update({
      where: {
        id: resetPassword.user_id,
        reset_password_otp: resetPassword.otp,
        reset_password_expires_at: { gt: new Date() },
      },
      data: {
        password: resetPassword.new_password,
        reset_password_otp: null,
        reset_password_expires_at: null,
      },
    });

    return result;
  } catch (error) {
    return null;
  }
};

export default {
  getUserByEmail,
  getUserForJwt,
  getUserWithPassword,
  createOrUpdateMerchantTransaction,
  verifyUserEmail,
  updateProfile,
  getUserPassword,
  updatePassword,
  forgotPassword,
  resetPassword,
};
