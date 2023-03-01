# Money

This `Money` class represents an amount of money in a particular currency. It has a private `amount` property and a private `currency` property, both of which are readonly. The class also has a constructor that takes an `amount` and a `currency`, and getters for accessing those properties.

The class also has `add`, `subtract`, `equals`, and `toString` methods. The add and `subtract` methods take another `Money` object as an argument and return a new Money object representing the result of adding or subtracting the two amounts. The `equals` method takes another `Money` object as an argument and returns `true` if the two objects represent the same `amount` of money in the same `currency`. The toString method returns a string representation of the amount and currency, like "10.00 USD".

Finally, the class has a private static `validCurrencies` property, which is an array of strings representing valid currency codes. The `isValidCurrency` static method checks if a given currency code is valid by checking if it's included in the `validCurrencies` array. If the currency code is invalid, the constructor throws an error.

# Email

This `Email` class represents an email address. It has a private `value` property, which is a string representing the email address. The class has a constructor that takes a string `value`. The constructor also checks if the provided string is a valid email address using a regular expression pattern. If it's not valid, the constructor throws an error.

The class also has a `getValue` method that returns the email address as a string, an equals method that takes another `Email` object as an argument and returns true if the two objects have the same value, and a toString method that returns the email address as a string.

Finally, the class has a private static `regexPattern` property, which is a regular expression pattern for validating email addresses. The `isValidEmail` static method checks if a given string matches the `regexPattern`. If the string is not a valid email address, the constructor throws an error.

# UUID

This `UUID` class represents a Universally Unique Identifier (UUID), which is a 128-bit identifier. It has a private `value` property and a constructor that takes a string `value`. The constructor checks if the provided string is a valid UUID using a regular expression pattern. If it's not valid, the constructor throws an error.

The class also has a `getValue` method that returns the `UUID` value as a string, an equals method that takes another UUID object as an argument and returns true if the two objects have the same value, and a `toString` method that returns the UUID value as a string.

Finally, the class has a private static `regexPattern` property, which is a regular expression pattern for validating UUIDs. The `isValid` static method checks if a given string matches the `regexPattern`. If the string is not a valid UUID, the constructor throws an error.

# DayOnly

This `DayOnly` class represents a day-only date, which is a date without any time information. It has a private value property, which is a `Date` object representing the day-only date. The class has a constructor that takes a `Date` object and sets the time to midnight. The constructor also checks if the provided date is valid by checking if it's a valid Date object.

The class also has a getValue method that returns a new `Date` object representing the day-only date, to prevent mutation. The equals method takes another DayOnly object as an argument and returns true if the two objects represent the same day-only date. The toString method returns a string representation of the day-only date in ISO 8601 format (`yyyy-MM-dd`).

Finally, the class has a private static isValidDate method that checks if a given `Date` object is valid by checking if its getTime method returns a valid time value. If the date is invalid, the constructor throws an error.

# Geo

# Url
