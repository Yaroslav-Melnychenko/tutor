import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FirstStep from './FirstStep/FirstStep';
import './NewTutorPage.scss';

class NewTutorPage extends Component {

  state = {
    activeStep: 0,
  };

  getSteps = () => {
    return ['Введіть своє ім\'я, почту та створіть пароль', 'Create an ad group', 'Create an ad'];
  }
  
  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FirstStep validateFirstStep={this.validateFirstStep} />;
      case 1:
        return 'An ad group contains one or more ads which target a shared set of keywords.';
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {

    const steps = this.getSteps();
    const { activeStep } = this.state;

    return(
      <div className="page-container">
        <div className="page">
          <h2>Створення нового акаунта</h2>
         <div>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <div className="form-container">{this.getStepContent(index)}</div>
                  <div>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        type='submit'
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={this.handleReset}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
        </div>
      </div>
    )
  }
}
export default NewTutorPage;