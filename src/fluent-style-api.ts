class BasicCalculator {
  public constructor(protected value = 0) {}

  public currentValue(): number {
    return this.value;
  }

  public add(operand: number) {
    this.value += operand;
    return this;
  }

  public subtract(operand: number) {
    this.value -= operand;
    return this;
  }

  public multiply(operand: number) {
    this.value *= operand;
    return this;
  }

  public divide(operand: number) {
    this.value /= operand;
    return this;
  }
}

new BasicCalculator(2).multiply(5).add(1).currentValue();

export {};
