export const required = { required: "field is required" };

export const emailSchema = {
  required: "email is required",
  pattern: {
    value: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
    message: "email is invalid",
  },
};

export const passwordSchema = {
  required: "password is required",
  minLength: { value: 5, message: "min. of 5 characters required" },
};

export const pinSchema = {
  required: "security code is required",
  minLength: { value: 4, message: "min. of 4 characters required" },
};

export const textFieldSchema = {
  required: "field is required",
  minLength: { value: 5, message: "min. of 5 characters required" },
};

export const smallTextFieldSchema = {
  required: "field is required",
  minLength: { value: 3, message: "min. of 3 characters required" },
};

export const numberFieldSchema = {
  required: "field is required",
  minLength: { value: 3, message: "min. of 3 numbers required" },
  maxLength: { value: 20, message: "min. of 20 numbers required" },
};

export const cardNumberSchema = {
  required: "credit card number is required",
  minLength: { value: 13, message: "min. of 13 digits required" },
  maxLength: { value: 20, message: "max. of 20 digits required" },
};

export const isEmpty = (value: undefined | null | {} | string): boolean => (
  value === undefined
  || value === null
  || (typeof value === "object" && Object.keys(value).length === 0)
  || (typeof value === "string" && value.trim().length === 0)
);
