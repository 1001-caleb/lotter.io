import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components";
import { InputForm, WinnerSection } from "./sections";
import { StepsSection } from "./sections/steps";

export const HomePage: React.FC<{}> = () => {
  const [participant, setParticipant] = React.useState<string | null>(null);
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [participants, setParticipants] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (participant) {
      setParticipants([...participants, participant]);
    }
  }, [participant]);


  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 1) {
      setActiveStep(3);
    }

    if (activeStep === 3) {
      setActiveStep(0);
    }
  }


  return (
    <>
      <Container maxWidth='xl' sx={{ mt: 9 }}>
        <HeaderComponent title='Lotter.io' description='Genera tu sorteo Gratis.' />
        <StepsSection steps={steps} activeStep={activeStep} />
        <Container sx={{ mt: 6 }} maxWidth='md'>
          <Grid container justifyContent='center'>
            <Grid item xs={12}>
              <Typography variant='h4' align='center' sx={{ mb: 4 }} > {steps[activeStep]} </Typography>
            </Grid>
          </Grid>
          {activeStep === 0 && <InputForm participant={setParticipant} />}
          {activeStep === 1 && <WinnerSection />}
        </Container>
        <Button onClick={nextStep}>Next</Button>
      </Container>
    </>
  );
};
