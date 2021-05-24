class ClassValidator {
  isValidType(value: any, type: string): boolean {
    return typeof value === type;
  }

  isValidRange(value: number, min: number, max: number): boolean {
    return value > min && value <= max;
  }
}

export default new ClassValidator();
