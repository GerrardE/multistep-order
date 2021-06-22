import { FormGroup, ListGroup, ListGroupItem } from "reactstrap";
import { AppDropdown, AppErrorMessage, AppLabel, T3, T6 } from "../../atoms";
import { Small, StyledCol } from "./order.styles";
import { ISubProps } from "./order.interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../../domain/redux";
import { required } from "../../../utils/validations/schema";
import { useEffect, useRef } from "react";
import SummaryView from "./summary.view";

const SubscriptionView: React.FunctionComponent<ISubProps> = ({ register, errors, setForm, form }) => {
    const { orders: { prices: { subscription_plans } } } = useSelector(
        (state: RootState) => state
    );

    // dynamic data, can be integrated with an api in the future
    const cloudsizes: number[] = [5, 10, 50];
    const paymentoptions: string[] = ["no", "yes"];

    const { duration, amount, upfrontpayment } = errors;

    return (
        <StyledCol className="snow">
            <T3 className="p-0">Your Subscription Information</T3>
            <T6 className="p-0">Enter your information to complete the order</T6>

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
                            let price = subscription_plans.find(p => p?.duration_months === Number(e.target.value))?.price_usd_per_gb

                            setForm({
                                ...form,
                                duration: e.target.value,
                                price: (price) ? price : form.price,
                                finalprice: (price) ? (
                                    (form.upfrontpayment === "yes") ? price * form.amount * .9 : price * form.amount
                                ) : form.finalprice,
                            })
                        }
                    }}
                >
                    {
                        subscription_plans.map((item) => (
                            <option value={item.duration_months} key={item.duration_months} selected={item.duration_months === 12}>
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
                            setForm({
                                ...form,
                                amount: Number(e.target.value),
                                finalprice: (form.upfrontpayment === "yes") ? form.price * Number(e.target.value) * .9 : form.price * Number(e.target.value)
                            })
                        }
                    }}
                >
                    {
                        cloudsizes.map((item) => (
                            <option value={item} key={item} selected={item === 5}>
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
                                finalprice: (e.target.value === "yes") ? form.finalprice * .9 : form.price * form.amount
                            })
                        }
                    }}
                >
                    {
                        paymentoptions && paymentoptions.map((item) => (
                            <option value={item} key={item} selected={item === "no"}>
                                {item}
                            </option>
                        ))
                    }
                </AppDropdown>
                {upfrontpayment && <AppErrorMessage config={{ message: upfrontpayment?.message }} />}
                <Small>NB: Upfront payment attracts 10% discount of total price of order</Small>
            </FormGroup>
        </StyledCol>
    )
};

export default SubscriptionView;
