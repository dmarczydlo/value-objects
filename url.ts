class Url {
  private readonly value: string;

  constructor(value: string) {
    if (!this.isValidURL(value)) {
      throw new Error("Invalid URL value.");
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  private isValidURL(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch (error) {
      return false;
    }
  }
}
