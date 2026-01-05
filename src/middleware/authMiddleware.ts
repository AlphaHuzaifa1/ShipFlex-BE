import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/env";
import merchantQueries from "../queries/merchant/auth";

const verifyMerchantJwt =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token = req.headers.authorization;
      if (token) {
        if (token.startsWith("Bearer ")) {
          token = token.slice(7, token.length);
        }

        const decoded = jwt.verify(token, config.jwtSecret!) as JwtPayload;
        if (!decoded.exp || Date.now() >= decoded.exp * 1000) {
          return res.status(401).json({
            error: "Access denied. Token has expired",
            response: null,
            message: "Access denied. Token has expired",
          });
        }

        const email = decoded.email;
        const userData = await merchantQueries.getUserForJwt(email);
        if (!userData) {
          return res.status(404).json({
            error: "Access denied. User not found",
            response: null,
            message: "Access denied. User not found",
          });
        }

        req.decoded = {
          ...decoded,
          userId: String(userData.id),
          companyId: userData.company_id,
        };
      } else {
        return res.status(401).json({
          error: "Access denied. Authorization token is missing",
          response: null,
          message: "Access denied. Authorization token is missing",
        });
      }
      next();
    } catch (error: any) {
      return res.status(401).json({
        error: error.message || error,
        response: null,
        message: "Authorization failed",
      });
    }
  };

export const verifyMerchantToken = verifyMerchantJwt();
