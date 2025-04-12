# Incubyte TDD Assessment - String Calculator

**Author**: Rahul Rajpal

This project implements a `StringCalculator` class using **TypeScript** and follows **Test-Driven Development (TDD)** principles, as part of the Incubyte assessment.

---

## 🧩 Problem Statement

Create a `StringCalculator` with the following features:

1. An empty string returns `0`.
2. A single number returns the number itself.
3. Two numbers, comma-delimited, return their sum.
4. Multiple numbers return their sum.
5. Allow new lines between numbers.
6. Support custom delimiters: `//[delimiter]\n[numbers…]`.
7. Negative numbers should throw an error: `"negatives not allowed"` with the list of negatives.
8. Numbers > 1000 should be ignored.
9. Delimiters can be of any length: `//[***]\n1***2***3`.
10. Multiple custom delimiters: `//[*][%]\n1*2%3`.

---

## 🚀 Project Structure

```
.
├── src/
│   └── StringCalculator.ts
├── tests/
│   └── StringCalculator.test.ts
├── jest.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Setup & Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/string-calculator.git
   cd string-calculator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run tests**
   ```bash
   npm test
   ```

---

## ✅ Tech Stack

- TypeScript
- Jest (Testing Framework)
- Node.js

---

## 🧪 TDD Principles Followed

- Start with a failing test.
- Write minimal code to pass the test.
- Refactor while keeping tests green.
- Repeat for each feature incrementally.
