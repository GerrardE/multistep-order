import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormGroup } from "reactstrap";
import classnames from "classnames";
import { AppButton, AppErrorMessage, AppInput, AppLabel, T3, T6 } from "../../atoms";
import { StyledCol, StyledForm, StyledRow, Spinner } from "./order.styles";
import { IProps } from "./order.interfaces";
import { emailSchema, required } from "../../../utils/validations/schema";
import SummaryView from "./summary.view";
import { postOrderThunk } from "../../../../domain/redux/orders/orders.thunks";

const ConfirmationView: React.FunctionComponent<IProps> = ({ setForm, form, step, setStep, loading }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { acceptedterms, email } = errors;

    const onPrev = () => {
        setStep({
            ...step,
            page: step.page -= 1,
            percent: step.percent -= step.increment
        })
    }

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(postOrderThunk(form));
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <T3 className="p-0">Confirm Your Order</T3>
            <T6 className="p-0 mb-4">Review your order and submit</T6>

            <SummaryView form={form} view="summary" />

            <FormGroup className="mt-4">
                <AppLabel
                    config={{
                        labelHtmlFor: "email",
                        labelClassName: "form-label",
                    }}
                >
                    *Email
                </AppLabel>
                <AppInput
                    config={{
                        inputType: "email",
                        inputRef: register("email", emailSchema),
                        inputId: "email",
                        inputName: "email",
                        inputClassName: classnames("form-control", {
                            "is-invalid": email,
                        }),
                        inputDefaultValue: form.email,
                        inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value })
                    }}
                />
                <AppErrorMessage config={{ message: email?.message }} />
            </FormGroup>
            <StyledCol>
                <AppInput
                    config={{
                        inputType: "checkbox",
                        inputRef: register("acceptedterms", required),
                        inputId: "acceptedterms",
                        inputName: "acceptedterms",
                        inputClassName: "acceptedterms",
                        inputChecked: form.acceptedterms,
                        inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, acceptedterms: e.target.checked })
                    }}
                />
                <AppLabel
                    config={{
                        labelHtmlFor: "acceptedterms",
                        labelClassName: "form-label",
                    }}
                >
                    *Accept terms
                </AppLabel>
                <AppErrorMessage config={{ message: acceptedterms?.message }} />
            </StyledCol>

            <StyledRow className="justify mt-4">
                {
                    loading ?
                        <Spinner /> :
                        <Fragment>
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
                                    buttonOnClick: () => onSubmit,
                                    buttonClassName: "primary",
                                }}
                            >
                                Submit
                            </AppButton>
                        </Fragment>
                }
            </StyledRow>
        </StyledForm>
    )
};

export default ConfirmationView;
