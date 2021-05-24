import { CreateArrayDto } from "./dto/create.array.dto";

class ArraysService {
  async create({ length }: CreateArrayDto) {
    const arr = [];

    for (let i = length - 1; i >= 0; i--) {
      arr.push(i);
    }

    return arr;
  }
}

export default new ArraysService();
