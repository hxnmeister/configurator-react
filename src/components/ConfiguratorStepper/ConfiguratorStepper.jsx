import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RoomType from "../RoomType/RoomType";
import ProtectionType from "../ProtectionType/ProtectionType";
import AdditionalInformation from "../AdditionalInformation/AdditionalInformation";
import { useSelector } from "react-redux";
import Result from "../Result/Result";

const steps = 
[
  "Виберіть тип приміщення",
  "Виберіть тип захисту",
  "Уточніть деталі",
  "Результат",
];

export default function HorizontalNonLinearStepper() 
{
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const { roomType, protectionType } = useSelector(state => state);

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => 
  {
    const newCompleted = completed;

    switch(activeStep)
    {
      case 0:
        if(roomType.value !== '')
        {
          newCompleted[activeStep] = true;
        }
        break;
      case 1:
        newCompleted[activeStep] = (protectionType.value.length !== 0);
        break;
      case 2:
        newCompleted[activeStep] = true;
        break;
    }

    setCompleted(newCompleted);
    !isLastStep() && setActiveStep(activeStep + 1);
  };

  const handleBack = () => 
  {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () =>
  {
    setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              { (() => 
                {
                  switch(activeStep)
                  {
                    case 0:
                      return <RoomType/>
                    case 1:
                      return <ProtectionType/>
                    case 2:
                      return <AdditionalInformation/>
                    case 3:
                      return <Result/>
                  }
                })()
              }
            </div>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
