import { UseFormRegisterReturn } from "react-hook-form";
import { ISubscriptionPlan } from "../../../../domain/redux/orders/orders.interfaces";
import { IFormState } from "./order.interfaces";

export const handleDuration = (e: React.ChangeEvent<HTMLSelectElement>, dropdownRef: UseFormRegisterReturn, setForm: (form: IFormState) => void, form: IFormState, subscription_plans: ISubscriptionPlan[]) => {
    dropdownRef.onChange(e);

    let value = Number(e.target.value);

    let price = subscription_plans.find(p => p?.duration_months === value)?.price_usd_per_gb

    setForm({
        ...form,
        duration: value,
        price: (price) ? price : form.price,
        finalprice: (price) ? (
            (form.upfrontpayment === "yes") ?
                (price * form.amount * .9 * value) :
                (price * form.amount * value)
        ) : form.finalprice,
    })
}

export const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>, dropdownRef: UseFormRegisterReturn, setForm: (form: IFormState) => void, form: IFormState) => {
    dropdownRef.onChange(e);

    let value = Number(e.target.value);

    setForm({
        ...form,
        amount: value,
        finalprice: (form.upfrontpayment === "yes") ?
            (form.price * value * .9 * form.duration) :
            (form.price * value * form.duration)
    })
}

export const handleUpfrontPayment = (e: React.ChangeEvent<HTMLSelectElement>, dropdownRef: UseFormRegisterReturn, setForm: (form: IFormState) => void, form: IFormState) => {
    dropdownRef.onChange(e);

    setForm({
        ...form,
        upfrontpayment: e.target.value,
        finalprice: (e.target.value === "yes") ?
            (form.finalprice * .9) :
            (form.price * form.amount * form.duration)
    })
}

export const required = (name: string, form: IFormState) => {
    return { required: `${name} is required`, value: form[name] }
};

export const emailSchema = {
    required: "email is required",
    pattern: {
        value: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
        message: "email is invalid",
    },
};

export const pinSchema = {
    required: "security code is required",
    minLength: { value: 3, message: "min. of 3 characters required" },
};

export const cardNumberSchema = {
    required: "credit card number is required",
    minLength: { value: 13, message: "min. of 13 digits required" },
    maxLength: { value: 20, message: "max. of 20 digits required" },
};
