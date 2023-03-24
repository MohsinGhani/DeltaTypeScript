import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import ClientDetailForm from "../ClientDetailForm";
import SelectProducts from "../SelectProducts";
import ProductQuestions from "../ProductQuestions";
import BindCover from "../BindCover/index";
import CardTitleLogo from "../../assets/images/cardTitleLogo.svg";
import infoIcon from "../../assets/images/infoIcon.svg";
import buildingIconBlack from "../../assets/images/buildingIconBlack.svg";
import breifcaseIcon from "../../assets/images/breifcaseIcon.svg";
import peopleIcon from "../../assets/images/people.svg";
import dollarbagIcon from "../../assets/images/dollarbag.svg";
import QuotesModal from "../Modal";
import Policybound from "../PolicyBound";
import BindModal from "../bindCovermodal/modal";
import validationSchema from "../createQuoteStepper/validationSchema";
import { Form, Formik } from "formik";
import formInitialValues from "./formInitialValues";
import checkoutFormModel from "./checkoutFormModel";
import initialValues from "./formInitialValues";

const steps = [
  "Client details",
  "Select products",
  "Product questions",
  "Bind Cover",
];
const { formId, formField }: any = checkoutFormModel;

function _renderStepContent(step: number, options: any) {
  switch (step) {
    case 0:
      return <ClientDetailForm {...options} />;
    case 1:
      return <SelectProducts formField={formField} />;
    case 2:
      return <ProductQuestions formField={formField} />;
    case 3:
      return <BindCover formField={formField} />;
    default:
      return <Policybound formField={formField} />;
  }
}
console.log(formField);
const CreateQuoteForm = () => {
  window.scrollTo(150, 150);
  const [open, setOpen] = useState(false);
  const [bindOpen, setBindOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      setBindOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  function _sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values: any, actions: any) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values: any, actions: any) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleBindOpen = () => setBindOpen(true);

  const handleBindClose = () => setBindOpen(false);

  return (
    <div className="createQuoteStepper_container">
      <div className="createQuoteStepper_steps">
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="createQuoteStepper_content">
        <Formik
          initialValues={initialValues}
          validationSchema={currentValidationSchema}
          onSubmit={handleNext}
        >
          {(options: any) => {
            console.log("🚀 ~ errors", options["errors"]);
            console.log("🚀 ~ values", options["values"]);

            return (
              <Form className="createQuoteStepper_withCard">
                <Grid container spacing={4}>
                  <Grid item sm={12} md={9} lg={9}>
                    <div className="createQuoteStepper_leftCard">
                      <Card>
                        {_renderStepContent(activeStep, options)}
                        <div className="createQuoteStepper_buttonContainer">
                          {activeStep === 0 ? (
                            <Link to="/home">
                              <Button>Exit</Button>
                            </Link>
                          ) : (
                            <Button onClick={_handleBack}>Back</Button>
                          )}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={options["handleSubmit"]}
                          >
                            {activeStep == 0
                              ? "update end next"
                              : isLastStep
                              ? "Bind Cover"
                              : "Next"}

                            {/* {isLastStep ? "Bind Cover" : "Next"} */}
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </Grid>
                  <Grid item sm={12} md={3} lg={3}>
                    <div className="createQuoteStepper_rightCard">
                      <Card>
                        <div className="createQuoteStepper_cardHeader">
                          <div className="cardHeader_summaryHead">
                            <Typography variant="h3">Quote Summary</Typography>
                            <img src={infoIcon} alt="Edit Icon" />
                          </div>
                          <div className="cardHeader_summaryLogo">
                            <img src={CardTitleLogo} alt="Card Header Logo" />
                          </div>
                        </div>
                        <CardContent>
                          <div className="cardSummary_price">
                            <Typography variant="subtitle1">
                              Your Indicative Premium
                            </Typography>
                            <div className="cardSummary_price">
                              <Typography variant="h2">$0.00</Typography>
                              <Typography variant="subtitle1">
                                excl GST
                              </Typography>
                            </div>
                          </div>
                          <div className="cardSummary_products">
                            <Typography variant="h3">
                              Your Products and Limits
                            </Typography>
                            <Typography variant="subtitle1">
                              None added yet
                            </Typography>
                          </div>
                          <div className="cardSummary_clientInfo">
                            <Typography variant="h3">
                              Client information
                            </Typography>
                            <div className="cardSummary_infoContainer">
                              <img
                                src={buildingIconBlack}
                                alt="Building Icon"
                              />
                              <Typography variant="subtitle1">
                                Ben Ross Limited
                              </Typography>
                            </div>
                            <div className="cardSummary_infoContainer">
                              <img src={breifcaseIcon} alt="Briefcase Icon" />
                              <Typography variant="subtitle1">
                                HealthCare Consultant
                              </Typography>
                            </div>
                            <div className="cardSummary_infoContainer">
                              <img src={peopleIcon} alt="People Icon" />
                              <Typography variant="subtitle1">
                                5 Employees
                              </Typography>
                            </div>
                            <div className="cardSummary_infoContainer">
                              <img src={dollarbagIcon} alt="Dollar Icon" />
                              <Typography variant="subtitle1">
                                $200,000 Turnover
                              </Typography>
                            </div>
                          </div>
                          <div className="cardSummary_button">
                            <Button variant="contained" onClick={handleOpen}>
                              Refer Client
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
        {/* {activeStep === 0 ? (
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleNext}
          >
            <Form id={formId} className="createQuoteStepper_withCard">
              <Grid container spacing={4}>
                <Grid item sm={12} md={9} lg={9}>
                  <div className="createQuoteStepper_leftCard">
                    <Card>
                      {_renderStepContent(activeStep)}
                      <div className="createQuoteStepper_buttonContainer">
                        {activeStep === 0 ? (
                          <Link to="/home">
                            <Button>Exit</Button>
                          </Link>
                        ) : (
                          <Button onClick={_handleBack}>Back</Button>
                        )}
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={
                            isLastStep ? () => setBindOpen(true) : handleNext
                          }
                        >
                          {isLastStep ? "Bind Cover" : "Next"}
                        </Button>
                      </div>
                    </Card>
                  </div>
                </Grid>
                <Grid item sm={12} md={3} lg={3}>
                  <div className="createQuoteStepper_rightCard">
                    <Card>
                      <div className="createQuoteStepper_cardHeader">
                        <div className="cardHeader_summaryHead">
                          <Typography variant="h3">Quote Summary</Typography>
                          <img src={infoIcon} alt="Edit Icon" />
                        </div>
                        <div className="cardHeader_summaryLogo">
                          <img src={CardTitleLogo} alt="Card Header Logo" />
                        </div>
                      </div>
                      <CardContent>
                        <div className="cardSummary_price">
                          <Typography variant="subtitle1">
                            Your Indicative Premium
                          </Typography>
                          <div className="cardSummary_price">
                            <Typography variant="h2">$0.00</Typography>
                            <Typography variant="subtitle1">
                              excl GST
                            </Typography>
                          </div>
                        </div>
                        <div className="cardSummary_products">
                          <Typography variant="h3">
                            Your Products and Limits
                          </Typography>
                          <Typography variant="subtitle1">
                            None added yet
                          </Typography>
                        </div>
                        <div className="cardSummary_clientInfo">
                          <Typography variant="h3">
                            Client information
                          </Typography>
                          <div className="cardSummary_infoContainer">
                            <img src={buildingIconBlack} alt="Building Icon" />
                            <Typography variant="subtitle1">
                              Ben Ross Limited
                            </Typography>
                          </div>
                          <div className="cardSummary_infoContainer">
                            <img src={breifcaseIcon} alt="Briefcase Icon" />
                            <Typography variant="subtitle1">
                              HealthCare Consultant
                            </Typography>
                          </div>
                          <div className="cardSummary_infoContainer">
                            <img src={peopleIcon} alt="People Icon" />
                            <Typography variant="subtitle1">
                              5 Employees
                            </Typography>
                          </div>
                          <div className="cardSummary_infoContainer">
                            <img src={dollarbagIcon} alt="Dollar Icon" />
                            <Typography variant="subtitle1">
                              $200,000 Turnover
                            </Typography>
                          </div>
                        </div>
                        <div className="cardSummary_button">
                          <Button variant="contained" onClick={handleOpen}>
                            Refer Client
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        )} */}
      </div>
      {bindOpen && (
        <BindModal
          open={bindOpen}
          handleOpen={handleBindOpen}
          handleClose={handleBindClose}
          title="Refer client"
          subtitle="Provide the following information to refer to Delta underwriters"
          isFilePick
          actionTitle="additional Reasons"
          onBind={handleNext}
        />
      )}
      {open && (
        <QuotesModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          title="Refer client"
          subtitle="Provide the following information to refer to Delta underwriters"
          isFilePick
          actionTitle="additional Reasons"
        />
      )}
    </div>
  );
};

export default CreateQuoteForm;
