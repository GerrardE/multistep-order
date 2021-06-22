import { FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import classnames from "classnames";
import { AppErrorMessage, AppInput, AppLabel, T3, T6 } from "../../atoms";
import { StyledCol } from "./order.styles";
import { IProps } from "./order.interfaces";
import { emailSchema, required } from "../../../utils/validations/schema";
import SummaryView from "./summary.view";

const ConfirmationView: React.FunctionComponent<IProps> = ({ register, errors, form }) => {
    const { acceptedterms, email } = errors;

    return (
        <StyledCol className="snow">
            <T3 className="p-0">Confirm Your Order</T3>
            <T6 className="p-0 mb-4">Review your order and submit:</T6>

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
        </StyledCol>
    )
};

export default ConfirmationView;
