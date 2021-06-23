import { ISubscriptionPlan } from "../../../../domain/redux/orders/orders.interfaces";

export interface IFormState {
    duration: number,
    amount: number,
    price: number,
    finalprice: number,
    upfrontpayment: string,
    cardno: string,
    cardexpdate: string,
    cardcode: string,
    acceptedterms: boolean,
    email: string,
}

export interface IStep { page: number, percent: number, increment: number }

export interface IProps {
    setForm: (form: IFormState) => void,
    form: IFormState,
    step: IStep,
    setStep: (step: IStep) => void,
    subscription_plans: ISubscriptionPlan[], 
    loading?: boolean
}
