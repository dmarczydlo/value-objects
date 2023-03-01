class Money {
  private readonly amount: number;
  private readonly currency: string;

  constructor(amount: number, currency: string) {
    if (!Money.isValidCurrency(currency)) {
      throw new Error(`Invalid currency: ${currency}`);
    }

    this.amount = amount;
    this.currency = currency;
  }

  getAmount(): number {
    return this.amount;
  }

  getCurrency(): string {
    return this.currency;
  }

  add(money: Money): Money {
    if (this.currency !== money.currency) {
      throw new Error("Cannot add different currencies");
    }

    return new Money(this.amount + money.amount, this.currency);
  }

  subtract(money: Money): Money {
    if (this.currency !== money.currency) {
      throw new Error("Cannot subtract different currencies");
    }

    return new Money(this.amount - money.amount, this.currency);
  }

  equals(money: Money): boolean {
    return this.amount === money.amount && this.currency === money.currency;
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }

  private static readonly validCurrencies: string[] = ["USD", "EUR", "GBP"];

  private static isValidCurrency(currency: string): boolean {
    return Money.validCurrencies.includes(currency);
  }
}
