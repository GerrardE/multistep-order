import { useForm } from "react-hook-form";
import { FormGroup } from "reactstrap";
import { AppDropdown, AppErrorMessage, AppLabel, T3, T6, AppButton } from "../../atoms";
import { Small, Spinner } from "./order.styles";
import { IProps } from "./order.interfaces";
import { required } from "./order.formutils";
import { StyledForm, StyledRow } from "./order.styles";
import SummaryView from "./summary.view";
import { handleDuration, handleAmount, handleUpfrontPayment } from "./order.formutils";

const SubscriptionView: React.FunctionComponent<IProps> = ({ setForm, form, setStep, step, subscription_plans, loading }) => {
    // dynamic data, can be integrated with an api in the future
    const cloudsizes: number[] = [5, 10, 50];
    const paymentoptions: string[] = ["no", "yes"];

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { duration, amount, upfrontpayment } = errors;

    const onNext = () => {
        setStep({
            ...step,
            page: step.page += 1,
            percent: step.percent += step.increment
        })
    }

    const durationRef = register("duration", required("duration", form))
    const amountRef = register("amount", required("amount", form))
    const upfrontpaymentRef = register("upfrontpayment", required("upfrontpayment", form))

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
                        dropdownRef: durationRef,
                        dropdownValue: form.duration,
                        dropdownOnChange: (e) => handleDuration(e, durationRef, setForm, form, subscription_plans)
                    }}
                >
                    {
                        subscription_plans && subscription_plans.map((item) => (
                            <option
                                key={item.duration_months}
                                value={item.duration_months}
                            >
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
                        dropdownRef: amountRef,
                        dropdownValue: form.amount,
                        dropdownOnChange: (e) => handleAmount(e, amountRef, setForm, form)
                    }}
                >
                    {
                        cloudsizes && cloudsizes.map((item) => (
                            <option
                                key={item}
                                value={item}
                            >
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
                        dropdownRef: register("upfrontpayment", required("upfrontpayment", form)),
                        dropdownValue: form.upfrontpayment,
                        dropdownOnChange: (e) => handleUpfrontPayment(e, upfrontpaymentRef, setForm, form)
                    }}
                >
                    {
                        paymentoptions && paymentoptions.map((item) => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))
                    }
                </AppDropdown>
                {upfrontpayment && <AppErrorMessage config={{ message: upfrontpayment?.message }} />}
                <Small>NB: Upfront payment attracts 10% discount of total price of order</Small>
            </FormGroup>
            <StyledRow className="justify mt-4">
                {
                    loading ?
                        <Spinner /> :
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
                }
            </StyledRow>
        </StyledForm>
    )
};

export default SubscriptionView;
