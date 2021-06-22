import { FormGroup } from "reactstrap";
import classnames from "classnames";
import { AppErrorMessage, AppInput, AppLabel, T3, T6 } from "../../atoms";
import { StyledCol } from "./order.styles";
import { IProps } from "./order.interfaces";
import { cardNumberSchema, pinSchema, required } from "../../../utils/validations/schema";
import SummaryView from "./summary.view";

const PaymentdataView: React.FunctionComponent<IProps> = ({ register, errors, form }) => {
    const { cardno, cardexpdate, cardcode } = errors;

    return (
        <StyledCol className="snow">
            <T3 className="p-0">Your Payment Information</T3>
            <T6 className="p-0">Enter your payment information to complete the order</T6>

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
                        inputClassName: classnames("form-control", {
                            "is-invalid": cardno,
                        }),
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
                        inputRef: register("cardexpdate", required),
                        inputId: "cardexpdate",
                        inputName: "cardexpdate",
                        inputClassName: classnames("form-control", {
                            "is-invalid": cardexpdate,
                        }),
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
                        inputClassName: classnames("form-control", {
                            "is-invalid": cardcode,
                        }),
                    }}
                />
                <AppErrorMessage config={{ message: cardcode?.message }} />
            </FormGroup>
        </StyledCol>
    )
};

export default PaymentdataView;
