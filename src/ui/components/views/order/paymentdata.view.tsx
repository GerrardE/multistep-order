import { useForm } from "react-hook-form";
import { FormGroup } from "reactstrap";
import classnames from "classnames";
import { AppButton, AppErrorMessage, AppInput, AppLabel, T3, T6 } from "../../atoms";
import { StyledForm, StyledRow } from "./order.styles";
import { IProps } from "./order.interfaces";
import { cardNumberSchema, pinSchema, required } from "./order.formutils";
import SummaryView from "./summary.view";

const PaymentdataView: React.FunctionComponent<IProps> = ({ setForm, form, setStep, step }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { cardno, cardexpdate, cardcode } = errors;

    const onPrev = () => {
        setStep({
            ...step,
            page: step.page -= 1,
            percent: step.percent -= step.increment
        })
    }

    const onNext = () => {
        setStep({
            ...step,
            page: step.page += 1,
            percent: step.percent += step.increment
        })
    }

    return (
        <StyledForm onSubmit={handleSubmit(onNext)}>
            <T3 className="p-0">Your Payment Information</T3>
            <T6 className="p-0">Enter your payment information to continue</T6>

            <SummaryView form={form} />

            <FormGroup>
                <AppLabel
                    config={{
                        labelHtmlFor: "cardno",
                        labelClassName: "form-label",
                    }}
                >
                    *Credit card number
                </AppLabel>
                <AppInput
                    config={{
                        inputType: "number",
                        inputRef: register("cardno", cardNumberSchema),
                        inputId: "cardno",
                        inputName: "cardno",
                        inputPlaceholder: "e.g: 1234567891234",
                        inputClassName: classnames("form-control", {
                            "is-invalid": cardno,
                        }),
                        inputDefaultValue: form.cardno,
                        inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                            setForm({ ...form, cardno: e.target.value })
                    }}
                />
                <AppErrorMessage config={{ message: cardno?.message }} />
            </FormGroup>
            <FormGroup>
                <AppLabel
                    config={{
                        labelHtmlFor: "cardexpdate",
                        labelClassName: "form-label",
                    }}
                >
                    *Credit card expiry
                </AppLabel>
                <AppInput
                    config={{
                        inputType: "date",
                        inputRef: register("cardexpdate", required("cardexpdate", form)),
                        inputId: "cardexpdate",
                        inputName: "cardexpdate",
                        inputClassName: classnames("form-control", {
                            "is-invalid": cardexpdate,
                        }),
                        inputDefaultValue: form.cardexpdate,
                        inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, cardexpdate: e.target.value })
                    }}
                />
                <AppErrorMessage config={{ message: cardexpdate?.message }} />
            </FormGroup>
            <FormGroup>
                <AppLabel
                    config={{
                        labelHtmlFor: "cardcode",
                        labelClassName: "form-label",
                    }}
                >
                    *Credit card security code
                </AppLabel>
                <AppInput
                    config={{
                        inputType: "password",
                        inputRef: register("cardcode", pinSchema),
                        inputId: "cardcode",
                        inputName: "cardcode",
                        inputPlaceholder: "e.g: 1234",
                        inputClassName: classnames("form-control", {
                            "is-invalid": cardcode,
                        }),
                        inputDefaultValue: form.cardcode.toString(),
                        inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, cardcode: e.target.value })
                    }}
                />
                <AppErrorMessage config={{ message: cardcode?.message }} />
            </FormGroup>

            <StyledRow className="justify mt-4">
                <AppButton
                    config={{
                        buttonType: "submit",
                        buttonOnClick: () => onPrev(),
                        buttonClassName: "white mr-2",
                    }}
                >
                    Back
                </AppButton>
                <AppButton
                    config={{
                        buttonType: "submit",
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

export default PaymentdataView;
