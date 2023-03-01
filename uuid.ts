class UUID {
  private readonly value: string;

  constructor(value: string) {
    if (!UUID.isValid(value)) {
      throw new Error(`Invalid UUID: ${value}`);
    }

    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  equals(uuid: UUID): boolean {
    return this.value === uuid.value;
  }

  toString(): string {
    return this.value;
  }

  private static readonly regexPattern: RegExp =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4|5][0-9a-fA-F]{3}-[89aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

  private static isValid(value: string): boolean {
    return UUID.regexPattern.test(value);
  }
}
