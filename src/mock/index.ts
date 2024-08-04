import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import recordMock from "./record.ts";

export const setupMock = () => {
  createProdMockServer([...recordMock]);
};
