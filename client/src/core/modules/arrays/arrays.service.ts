import { Endpoints } from "../../constants/endpoints";
import { AbstractApiService } from "../../services/abstract-service";

export interface IArraysService {
  createArray: (data: { length: number}) => Promise<any>
}

export class ArraysService extends AbstractApiService implements IArraysService {
  public createArray = async (params: { length: number}) => {
    const { data } = await this.api.post(Endpoints.createArray, params);
    return data;
  }
}