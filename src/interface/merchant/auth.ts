export interface RegisterMerchant {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  company_id: number;
  email_verification_otp_expiry: Date;
  email_verification_otp: string;
}

export interface UpdateMerchant {
  user_id: number;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface ForgotPassword {
  user_id: number;
  reset_password_otp: string;
  reset_password_otp_expiry: Date;
}

export interface ResetPassword {
  user_id: number;
  otp: string;
  new_password: string;
}