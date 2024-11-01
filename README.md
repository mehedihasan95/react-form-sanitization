# React Form Sanitization

**React Form Sanitization** is a lightweight TypeScript utility package designed to help developers efficiently manage and sanitize form data after submission. This package offers two key functions—`sanitizeFormData` and `sanitizeFormValue`—which remove unwanted values from form data, such as `undefined`, `null`, empty strings, and other falsy values. It is especially useful for applications that require a clean, validated data structure for processing or storage.

## 📦 Installation

Install the package with npm:

```bash
npm i react-form-sanitization
```

## ✨ Key Features

- **Data Sanitization:** Removes `undefined`, `null`, empty strings, and other falsy values from form data to ensure a clean output.
- **Flexible Filtering:** Provides `ignoreKeys` and `requiredKeys` parameters for custom control over sanitization, allowing certain fields to be excluded or marked as required.
- **TypeScript Support:** Built with TypeScript, ensuring type safety and seamless integration with TypeScript-based projects.

## ⌨️ Functions

## 1.`sanitizeFormData`

This function removes unwanted values from the entire form data object. It accepts two parameters:

- `ignoreKeys` (Optional): Fields that should not be sanitized.
- `requiredKeys` (Optional): Fields that are required and should not be removed.

### Example:

```typescript
import { sanitizeFormData } from "react-form-sanitization";

const formData = {
  name: "John Doe",
  age: 0,
  email: "",
  address: null,
  phone: undefined,
};

const cleanedData = sanitizeFormData(formData, {
  ignoreKeys: ["age"], // Retain `age` even if falsy
  requiredKeys: ["name"], // Ensure `name` is included
});

// Result: { name: 'John Doe', age: 0 }
```

## 2.`sanitizeFormValue`

This function sanitizes individual form values with customizable settings for excluding or requiring fields.

- `ignoreKeys` (Optional): Fields to exclude from sanitization.
- `requiredKeys` (Optional): Fields that are required and should not be removed.

### Example:

```typescript
import { sanitizeFormValue } from "react-form-sanitization";

const formValue = {
  description: "",
  tags: [],
  priority: undefined,
  deadline: "2024-11-01",
};

const cleanedValue = sanitizeFormValue(formValue, {
  ignoreKeys: ["priority"], // Keep `priority` even if it's undefined
  requiredKeys: ["deadline"], // Ensure `deadline` is included
});

// Result: { deadline: '2024-11-01' }
```

## 🔨 Usage

- import `sanitizeFormData` or `sanitizeFormValue` in your form handling logic.
- Use these functions to clean up form submissions before processing, API calls, or storing data.

## Summary:

**React Form Sanitization** provides a simple, effective solution for managing form data cleanliness in TypeScript projects. By offering robust data sanitization and filtering options, this package ensures form submissions are optimized for further processing, storage, or API calls.
