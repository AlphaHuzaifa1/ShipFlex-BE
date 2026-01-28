import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/errorHandler";
import * as addressQueries from "../../queries/merchant/address";

export const createAddress = asyncHandler(
  async (req: Request, res: Response) => {
    const merchant_id = parseInt(req.decoded.userId as string);
    const {
      nickname,
      company_name,
      contact_name,
      contact_number,
      email,
      country,
      address_line_1,
      address_line_2,
      postal_code,
      province,
      city,
    } = req.body;

    const address = await addressQueries.createAddress({
      nickname,
      company_name,
      contact_name,
      contact_number,
      email,
      country,
      address_line_1,
      address_line_2,
      postal_code,
      province,
      city,
      merchant_id,
    });

    return res.status(201).json({
      message: "Address created successfully",
      response: {
        data: address,
      },
      error: null,
    });
  },
);

export const getAddresses = asyncHandler(
  async (req: Request, res: Response) => {
    const merchant_id = parseInt(req.decoded.userId as string);
    const { page, pageSize, search } = req.query as any;

    const result = await addressQueries.getAddressesByMerchantId(merchant_id, {
      page: parseInt(page) || 1,
      pageSize: parseInt(pageSize) || 10,
      search: search as string,
    });

    return res.status(200).json({
      message: "Addresses fetched successfully",
      response: {
        data: result,
      },
      error: null,
    });
  },
);

export const getAddressById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const merchant_id = parseInt(req.decoded.userId as string);

    const checkAddress = await addressQueries.checkAddress(
      merchant_id,
      parseInt(id),
    );
    if (!checkAddress) {
      return res.status(404).json({
        message: "Address not found",
        response: null,
        error: "Address not found",
      });
    }

    const address = await addressQueries.getAddressById(parseInt(id));

    return res.status(200).json({
      message: "Address fetched successfully",
      response: {
        data: address,
      },
      error: null,
    });
  },
);

export const updateAddress = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const merchant_id = parseInt(req.decoded.userId as string);
    const updateData = req.body;

    const checkAddress = await addressQueries.checkAddress(
      merchant_id,
      parseInt(id),
    );
    console.log("checkAddress", checkAddress);
    if (!checkAddress) {
      return res.status(404).json({
        message: "Address not found",
        response: null,
        error: "Address not found",
      });
    }

    const address = await addressQueries.updateAddress(
      parseInt(id),
      updateData,
    );

    return res.status(200).json({
      message: "Address updated successfully",
      response: {
        data: address,
      },
      error: null,
    });
  },
);

export const updateAddressFlags = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const merchant_id = parseInt(req.decoded.userId as string);
    const { default_ship_address, default_return_address } = req.body;

    const checkAddress = await addressQueries.checkAddress(
      merchant_id,
      parseInt(id),
    );
    if (!checkAddress) {
      return res.status(404).json({
        message: "Address not found",
        response: null,
        error: "Address not found",
      });
    }

    await addressQueries.updateAddressFlags(parseInt(id), merchant_id, {
      default_ship_address,
      default_return_address,
    });

    const data = {
      default_ship_address,
      default_return_address,
    };

    return res.status(200).json({
      message: "Address flags updated successfully",
      response: {
        data,
      },
      error: null,
    });
  },
);

export const deleteAddress = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const merchant_id = parseInt(req.decoded.userId as string);

    const checkAddress = await addressQueries.checkAddress(
      merchant_id,
      parseInt(id),
    );
    if (!checkAddress) {
      return res.status(404).json({
        message: "Address not found",
        response: null,
        error: "Address not found",
      });
    }

    await addressQueries.deleteAddress(parseInt(id));

    return res.status(200).json({
      message: "Address deleted successfully",
      response: null,
      error: null,
    });
  },
);
