import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { useForm } from "react-hook-form";
import {
  Row, Col, Form, FormGroup,
} from "reactstrap";
import classnames from "classnames";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import {
  Eye, PlayButton, GoogleStore, AppleStore,
} from "@base";
import {
  AppLabel,
  AppInput,
  AppButton,
  AppImage,
  AppErrorMessage,
} from "../../atoms";
import JoinNow from "../../templates/JoinNow/joinnow.template";
import {
  TextLg,
  Link,
  Wrapper,
  TextXs,
  SectionMd,
  SectionBg,
  TextMd,
  Header,
  Footer,
  Div,
} from "./signup.styles";
import { AppCarousel } from "../../molecules";
import constants from "./signup.constants";
import IData from "./signup.interfaces";

const SignupView: React.FunctionComponent = () => {
  const { register, handleSubmit, errors } = useForm();

  const {
    firstname, email, lastname, password,
  } = errors;

  const { items } = constants;

  const [active, setActive] = useState(false);

  const [pwd, setPassword] = useState("");

  const toggle = () => setActive(prevState => !prevState);

  const onSubmit = (data: IData) => data;

  return (
    <JoinNow>
      <Wrapper>
        <Row>
          <SectionBg lg={7} md={12} sm={12} xs={12}>
            <Row>
              <Col>
                <TextLg className="sensei">Sensei</TextLg>
              </Col>
            </Row>
            <Div className="d-flex justify-content-center">
              <AppCarousel config={{ carouselItems: items }} />
            </Div>
            <Footer>
              <Row>
                <Col>
                  <AppImage
                    config={{
                      imageSrc: PlayButton,
                      imageClassName: "mt-2 mr-3",
                      imageAlt: "How Sensei Works",
                    }}
                  />
                  <Link config={{ linkText: "How Sensei Works" }} />
                </Col>
              </Row>
              <Row className="d-flex flex-row-reverse">
                <Col>
                  <AppImage
                    config={{
                      imageSrc: GoogleStore,
                      imageClassName: "mr-1 mt-2",
                      imageAlt: "Download From Google Store",
                    }}
                  />
                  <AppImage
                    config={{
                      imageSrc: AppleStore,
                      imageClassName: "ml-1 mt-2",
                      imageAlt: "Download From Apple Store",
                    }}
                  />
                </Col>
              </Row>
            </Footer>
          </SectionBg>
          <SectionMd lg={5} md={12} sm={12} xs={12}>
            <Header>
              <Col lg={2} md={2} sm={2} xs={2} className="pl-0">
                <TextMd
                  className={classnames({ active })}
                  onClick={toggle}
                >
                  Login
                </TextMd>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2} className="pr-0">
                <TextMd className={classnames({ active })} onClick={toggle}>
                  Register
                </TextMd>
              </Col>
            </Header>
            <TextLg>Getting Started</TextLg>
            <TextXs>Please enter your information to create an account</TextXs>
            <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <Row form>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup>
                    <AppLabel
                      config={{
                        labelHtmlFor: "firstname",
                        labelClassName: "form-label",
                      }}
                    >
                      *First Name
                    </AppLabel>
                    <AppInput
                      config={{
                        inputType: "text",
                        inputRef: register(),
                        inputId: "firstname",
                        inputName: "firstname",
                        inputClassName: classnames("form-control", {
                          "is-invalid": firstname,
                        }),
                      }}
                    />
                    <AppErrorMessage config={{ message: firstname?.message }} />
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup>
                    <AppLabel
                      config={{
                        labelHtmlFor: "lastname",
                        labelClassName: "form-label",
                      }}
                    >
                      *Last Name
                    </AppLabel>
                    <AppInput
                      config={{
                        inputType: "text",
                        inputRef: register(),
                        inputId: "lastname",
                        inputName: "lastname",
                        inputClassName: classnames("form-control", {
                          "is-invalid": lastname,
                        }),
                      }}
                    />
                    <AppErrorMessage config={{ message: lastname?.message }} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <AppLabel
                      config={{
                        labelHtmlFor: "email",
                        labelClassName: "form-label",
                      }}
                    >
                      *Email Address
                    </AppLabel>
                    <AppInput
                      config={{
                        inputType: "email",
                        inputRef: register({
                          required: "this field is required",
                        }),
                        inputId: "email",
                        inputName: "email",
                        inputClassName: classnames("form-control", {
                          "is-invalid": email,
                        }),
                      }}
                    />
                    <AppErrorMessage config={{ message: email?.message }} />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <AppLabel
                      config={{
                        labelHtmlFor: "password",
                        labelClassName: "form-label",
                      }}
                    >
                      *Password
                    </AppLabel>
                    <AppInput
                      config={{
                        inputType: "password",
                        inputRef: register({
                          required: "this field is required",
                        }),
                        inputId: "password",
                        inputName: "password",
                        inputClassName: classnames("form-control br-0", {
                          "is-invalid": password,
                        }),
                        inputGroup: "append",
                        inputOnChange:
                        (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
                        inputGroupIcon: <AppImage config={{ imageSrc: Eye }} />,
                      }}
                    />
                    <AppErrorMessage config={{ message: password?.message }} />
                    <Col lg={4} md={4} className="mt-2">
                      <PasswordStrengthBar password={pwd} />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <AppButton
                    config={{
                      buttonType: "submit",
                      buttonId: "register",
                      // buttonOnClick: () => {},
                      buttonClassName: "mt-4",
                    }}
                  >
                    Continue
                  </AppButton>
                </Col>
              </Row>
              <Row>
                <Col>
                  <AppButton
                    config={{
                      buttonType: "submit",
                      buttonId: "register",
                      // buttonOnClick: () => {},
                      buttonClassName: "mt-4 btn-primary",
                    }}
                  >
                    <FaLinkedinIn className="mr-3 mb--2" size="18" />
                    Join with Linkedin
                  </AppButton>
                </Col>
                <Col>
                  <AppButton
                    config={{
                      buttonType: "submit",
                      buttonId: "register",
                      // buttonOnClick: () => {},
                      buttonClassName: "mt-4 btn-primary",
                    }}
                  >
                    <FaGoogle className="mr-3 mb--2" size="18" />
                    Join with Google
                  </AppButton>
                </Col>
              </Row>
            </Form>
          </SectionMd>
        </Row>
      </Wrapper>
    </JoinNow>
  );
};

export default SignupView;
