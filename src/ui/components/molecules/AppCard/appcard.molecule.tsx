import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import IProps from "./appcard.interfaces";

const AppCard: React.FunctionComponent<IProps> = ({ config }) => {
  const {
    header = true, cardHeader, cardText, footer = false, cardFooter,
  } = config;

  return (
    <div>
      <Card>
        {
          header ?? <CardHeader>{cardHeader}</CardHeader>
        }
        <CardBody>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            { cardText }
          </CardText>
        </CardBody>
        {
          footer ?? <CardFooter>{cardFooter}</CardFooter>
        }
      </Card>
    </div>
  );
};

export default AppCard;
