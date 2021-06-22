import { UseFormRegister, FieldValues, DeepMap, FieldError, UseFormGetValues } from "react-hook-form"

export interface IFormState {
    duration: number,
    amount: number,
    price: number,
    finalprice: number,
    upfrontpayment: string,
}

export interface IProps {
    register: UseFormRegister<FieldValues>,
    errors: DeepMap<FieldValues, FieldError>,
    form: IFormState,
}

export interface ISubProps {
    register: UseFormRegister<FieldValues>,
    errors: DeepMap<FieldValues, FieldError>,
    setForm: (form: IFormState) => void,
    form: IFormState
}
