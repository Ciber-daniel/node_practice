import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/car.schema";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCar = async (id: string) => {
  const response = await ItemModel.findById(id);
  return response;
};

const getCars = async () => {
  const response = await ItemModel.find({});
  return response;
};

const updateCar = async (id: string, body: Car) => {
  await ItemModel.findOneAndUpdate({ _id: id }, body);

  return ItemModel.findById(id);
};

const deleteCar = async (id: string) => {
  const response = await ItemModel.deleteOne({ _id: id });
  return response;
};

export { insertCar, getCar, getCars, updateCar, deleteCar };
