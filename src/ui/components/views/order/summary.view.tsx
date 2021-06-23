import { ListGroup, ListGroupItem } from "reactstrap";
import { IFormState } from "./order.interfaces";

const SummaryView: React.FunctionComponent<{ form: IFormState, view?: string }> = ({ form, view = "" }) => {
    return (
        <ListGroup className="mt-4">
            <ListGroupItem>Duration: {`${form.duration} months`}</ListGroupItem>
            {
                (view === "summary") ? <ListGroupItem>Price: {`${form.price} gigabytes`}</ListGroupItem> : ""
            }
            <ListGroupItem>Storage amount: {`${form.amount} gigabytes`}</ListGroupItem>
            <ListGroupItem>Total price: {`$${form.finalprice}`}</ListGroupItem>
        </ListGroup>
    )
};

export default SummaryView;
