import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../repositories/item.repository";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(id);

    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR");
  }
};

const getItems = async (_req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertCar(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR", error);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const response = await updateCar(id, body);

    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR");
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteCar(id);

    res.send(!!response.deletedCount);
  } catch (error) {
    handleHttp(res, "ERROR");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
