import { handleHttp } from "../utils/error.handle";
import { getOrders as getOrderss } from "../repositories/order.repository";
import { Request, Response } from "express";

const getOrders = async (_req: Request, res: Response) => {
  try {
    const response = await getOrderss();

    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR");
  }
};

export { getOrders };
