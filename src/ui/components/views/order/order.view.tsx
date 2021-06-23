import { useDispatch, useSelector } from "react-redux";
import { T3 } from "../../atoms";
import LayoutTemplate from "../../templates/Layout/layout.template";
import { StyledCol, StyledRow, Progress } from "./order.styles";
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
        if (subscription_plans.length < 1) {
            dispatch(getPricesThunk())
        };
    }, [dispatch, subscription_plans.length])

    const [form, setForm] = useState({ duration: 12, amount: 5, upfrontpayment: "no", finalprice: 0, price: 0, cardno: "", cardexpdate: "", cardcode: "", acceptedterms: false, email: "" } as IFormState)

    const [step, setStep] = useState({ page: 1, percent: 0, increment: 33.33 });

    useEffect(() => {
        // since prices are dynamic, set default price value
        let defaultsubscription = subscription_plans.find(p => p.duration_months === 12);
        if (defaultsubscription && form.price === 0) {
            setForm({
                ...form,
                price: defaultsubscription.price_usd_per_gb,
                finalprice: defaultsubscription.price_usd_per_gb * form.amount * form.duration
            })
        }
    }, [form, subscription_plans])

    const subscriptionConfig = {
        form,
        setForm,
        step,
        setStep,
        subscription_plans
    }

    const confirmConfig = {
        form,
        setForm,
        step,
        setStep,
        subscription_plans
    }

    const paymentConfig = {
        form,
        setForm,
        step,
        setStep,
        subscription_plans
    }

    return (
        <LayoutTemplate>
            <StyledRow>
                <StyledCol className="darkslategray" sm={4}>
                    <T3 className="text-snow">{step.page}</T3>

                    <Progress value={step.percent.toString()} />
                </StyledCol >
                <StyledCol className="snow">
                    {(() => {
                        switch (step.page) {
                            case 1:
                                return <SubscriptionView {...subscriptionConfig} />
                            case 2:
                                return <PaymentdataView {...paymentConfig} />
                            case 3:
                                return <ConfirmationView {...confirmConfig} />
                        }
                    })()}
                </StyledCol>
            </StyledRow>
        </LayoutTemplate>
    )
};

export default OrderView;
