import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup } from "reactstrap";
import classnames from "classnames";
import { emailSchema } from "../../../utils/validations/schema";
import { AppButton, AppErrorMessage, AppInput, AppLabel, T3, T5, T6 } from "../../atoms";
import LayoutTemplate from "../../templates/Layout/layout.template";
import { StyledCol, StyledForm, StyledRow, Progress } from "./order.styles";
import SubscriptionView from "./subscription.view";
import { getPricesThunk } from "../../../../domain/redux/orders/orders.thunks";
import { useEffect, useState } from "react";
import ConfirmationView from "./confirmation.view";
import PaymentdataView from "./paymentdata.view";
import { IFormState } from "./order.interfaces";
import { RootState } from "../../../../domain/redux";

const OrderView: React.FunctionComponent = () => {
    const { orders: { prices: { subscription_plans } } } = useSelector(
        (state: RootState) => state
    );
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPricesThunk());
    }, [dispatch])

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ form, setForm ] = useState({ duration: 12, amount: 5, upfrontpayment: "no", finalprice: 10, price: 2 } as IFormState)

    // since prices are dynamic, set default price value
    let defaultsubscription = subscription_plans.find(p => p.duration_months === 12);
    
    useEffect(() => {
        if(defaultsubscription) {
            setForm({
                ...form,
                price: defaultsubscription.price_usd_per_gb,
                finalprice: defaultsubscription.price_usd_per_gb * form.amount
            })
        }
    }, [defaultsubscription])

    const subscriptionConfig = {
        register,
        errors,
        form,
        setForm
    }

    const confirmConfig = {
        register,
        errors,
        form,
    }

    const paymentConfig = {
        register,
        errors,
        form,
    }

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <LayoutTemplate>
            <StyledRow>
                <StyledCol className="darkslategray" sm={4}>
                    <T3 className="text-snow">1</T3>

                    <Progress value="33.33" />
                </StyledCol >
                <StyledCol className="snow">
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        {/* <SubscriptionView {...subscriptionConfig} />
                        <PaymentdataView {...paymentConfig} /> */}
                        <ConfirmationView {...confirmConfig} />

                        <StyledRow className="justify mt-4">
                            <AppButton
                                config={{
                                    buttonType: "submit",
                                    buttonId: "login",
                                    buttonOnClick: () => { },
                                    buttonClassName: "white mr-2",
                                }}
                            >
                                Back
                            </AppButton>
                            <AppButton
                                config={{
                                    buttonType: "submit",
                                    buttonId: "login",
                                    buttonOnClick: () => onSubmit,
                                    buttonClassName: "primary",
                                }}
                            >
                                Continue
                            </AppButton>
                        </StyledRow>
                    </StyledForm>
                </StyledCol>
            </StyledRow>
        </LayoutTemplate>
    )
};

export default OrderView;
