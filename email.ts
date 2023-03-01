class Email {
  private readonly value: string;

  constructor(value: string) {
    if (!Email.isValidEmail(value)) {
      throw new Error(`Invalid email address: ${value}`);
    }

    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  equals(email: Email): boolean {
    return this.value === email.value;
  }

  toString(): string {
    return this.value;
  }

  private static readonly regexPattern: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  private static isValidEmail(value: string): boolean {
    return Email.regexPattern.test(value);
  }
}
