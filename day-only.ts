class DayOnly {
  private readonly value: Date;

  constructor(value: Date) {
    if (!DayOnly.isValidDate(value)) {
      throw new Error(`Invalid date: ${value}`);
    }

    // Set time to midnight
    this.value = new Date(
      value.getFullYear(),
      value.getMonth(),
      value.getDate()
    );
  }

  getValue(): Date {
    // Return a new date object to prevent mutation
    return new Date(this.value);
  }

  equals(dayOnly: DayOnly): boolean {
    return this.value.getTime() === dayOnly.value.getTime();
  }

  toString(): string {
    return this.value.toISOString().substring(0, 10);
  }

  private static isValidDate(date: Date): boolean {
    return !isNaN(date.getTime());
  }
}
