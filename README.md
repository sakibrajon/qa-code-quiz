
# QA Code Quiz Project

This repository contains the QA test project including **Jest unit tests** and **Cypress end-to-end tests** for the Login page.

---

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/sakibrajon/qa-code-quiz.git
cd qa-code-quiz
````

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Server will run at [http://localhost:8080](http://localhost:8080).

---

## Running Tests

### Unit Tests (Jest)

Run unit tests:

```bash
npm run test:unit
```

**Example Output:**

```bash
 PASS  ./login.test.js
  Login API Logic Tests
    √ Valid login returns success (4ms)
    √ Empty username and password returns error (1ms)
    √ Invalid login returns error
    √ Empty username returns error (1ms)
    √ Empty password returns error

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
```

### End-to-End Tests (Cypress)

Run Cypress tests:

```bash
npm run test:end-to-end
```

**Example Output (if tests fail):**

```bash
Login Page QA Test
  Page loads correctly      failed
  Empty login shows error   failed
  Invalid login shows error failed
  Valid login works         failed
```

> ⚠ Note: Currently the provided login page test data may fail, as these tests are for demonstration purposes only.

---

## Author

**Md Sakibuzzaman**
Email: [sakib.iict.kuet@gmail.com](mailto:sakib.iict.kuet@gmail.com)
GitHub: [https://github.com/sakibrajon](https://github.com/sakibrajon)

```
