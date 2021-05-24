import { AxiosInstance } from 'axios';
import { ArraysService, IArraysService } from '../modules/arrays/arrays.service';

export interface IServices {
  arrays: IArraysService;
}

export function createServices(api: AxiosInstance) {
  return {
    arrays: new ArraysService(api)
  };
}
