export const required = { required: "field is required" };

export const emailSchema = {
  required: "email is required",
  pattern: {
    value: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
    message: "email is invalid",
  },
};

export const pinSchema = {
  required: "security code is required",
  minLength: { value: 4, message: "min. of 4 characters required" },
};

export const cardNumberSchema = {
  required: "credit card number is required",
  minLength: { value: 13, message: "min. of 13 digits required" },
  maxLength: { value: 20, message: "max. of 20 digits required" },
};
