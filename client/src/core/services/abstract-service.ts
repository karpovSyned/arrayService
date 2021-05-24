import { AxiosInstance } from 'axios';

export class AbstractApiService {
  api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }
}
