import { useForm } from "react-hook-form";
import { FormGroup } from "reactstrap";
import { AppDropdown, AppErrorMessage, AppLabel, T3, T6, AppButton } from "../../atoms";
import { Small } from "./order.styles";
import { IProps } from "./order.interfaces";
import { required } from "../../../utils/validations/schema";
import { StyledForm, StyledRow } from "./order.styles";
import SummaryView from "./summary.view";

const SubscriptionView: React.FunctionComponent<IProps> = ({ setForm, form, setStep, step, subscription_plans }) => {
    // dynamic data, can be integrated with an api in the future
    const cloudsizes: number[] = [5, 10, 50];
    const paymentoptions: string[] = ["no", "yes"];

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { duration, amount, upfrontpayment } = errors;

    const onNext = () => {
        setStep({
            ...step,
            page: step.page+=1,
            percent: step.percent+=step.increment
        })
    }

    return (
        <StyledForm onSubmit={handleSubmit(onNext)}>
            <T3 className="p-0">Your Subscription Information</T3>
            <T6 className="p-0">Select your preference to proceed</T6>

            <SummaryView form={form} />

            <FormGroup>
                <AppLabel
                    config={{
                        labelHtmlFor: "duration",
                        labelClassName: "form-label",
                    }}
                >
                    *Duration
                </AppLabel>
                <AppDropdown
                    config={{
                        dropdownRef: register("duration", required),
                        dropdownName: "duration",
                        dropdownOnChange: (e) => {
                            let value = Number(e.target.value);

                            let price = subscription_plans.find(p => p?.duration_months === value)?.price_usd_per_gb

                            setForm({
                                ...form,
                                duration: e.target.value,
                                price: (price) ? price : form.price,
                                finalprice: (price) ? (
                                    (form.upfrontpayment === "yes") ? 
                                    (price * form.amount * .9 * value) : 
                                    (price * form.amount * value)
                                ) : form.finalprice,
                            })
                        }
                    }}
                >
                    {
                        subscription_plans && subscription_plans.map((item) => (
                            <option value={item.duration_months} key={item.duration_months} selected={form.duration === item.duration_months} defaultValue={item.duration_months}>
                                {`${item.duration_months} months, $${item.price_usd_per_gb} per gb`}
                            </option>
                        ))
                    }
                </AppDropdown>
                {duration && <AppErrorMessage config={{ message: duration?.message }} />}
            </FormGroup>
            <FormGroup>
                <AppLabel
                    config={{
                        labelHtmlFor: "amount",
                        labelClassName: "form-label",
                    }}
                >
                    *Storage amount
                </AppLabel>
                <AppDropdown
                    config={{
                        dropdownRef: register("amount", required),
                        dropdownName: "amount",
                        dropdownOnChange: (e) => {
                            let value = Number(e.target.value);
                            setForm({
                                ...form,
                                amount: value,
                                finalprice: (form.upfrontpayment === "yes") ? 
                                (form.price * value * .9 * form.duration) : 
                                (form.price * value * form.duration)
                            })
                        }
                    }}
                >
                    {
                        cloudsizes && cloudsizes.map((item) => (
                            <option value={item} key={item} selected={form.amount === item}>
                                {`${item} gigabytes, cloud storage`}
                            </option>
                        ))
                    }
                </AppDropdown>
                {amount && <AppErrorMessage config={{ message: amount?.message }} />}
            </FormGroup>
            <FormGroup>
                <AppLabel
                    config={{
                        labelHtmlFor: "upfrontpayment",
                        labelClassName: "form-label",
                    }}
                >
                    *Upfrontpayment
                </AppLabel>
                <AppDropdown
                    config={{
                        dropdownRef: register("upfrontpayment", required),
                        dropdownName: "upfrontpayment",
                        dropdownOnChange: (e) => {
                            setForm({
                                ...form,
                                upfrontpayment: e.target.value,
                                finalprice: (e.target.value === "yes") ? 
                                (form.finalprice * .9) : 
                                (form.price * form.amount * form.duration)
                            })
                        }
                    }}
                >
                    {
                        paymentoptions && paymentoptions.map((item) => (
                            <option value={item} key={item} selected={form.upfrontpayment === item}>
                                {item}
                            </option>
                        ))
                    }
                </AppDropdown>
                {upfrontpayment && <AppErrorMessage config={{ message: upfrontpayment?.message }} />}
                <Small>NB: Upfront payment attracts 10% discount of total price of order</Small>
            </FormGroup>
            <StyledRow className="justify mt-4">
                <AppButton
                    config={{
                        buttonType: "submit",
                        buttonId: "login",
                        buttonOnClick: () => onNext,
                        buttonClassName: "primary",
                    }}
                >
                    Continue
                </AppButton>
            </StyledRow>
        </StyledForm>
    )
};

export default SubscriptionView;
