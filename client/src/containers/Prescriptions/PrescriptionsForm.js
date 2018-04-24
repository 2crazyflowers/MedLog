// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

const styles = {
  textField: {
    marginTop: 40,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
  },
  button: {
    marginTop: 20,
    padding: 5,
  },
};

class PrescriptionsForm extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add a prescription
            </Typography>
            <form noValidate className={classes.root} autoComplete="off">
              <TextField
                id="prescription-name"
                label="Prescription name"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={this.props.prescriptionName}
                onChange={this.props.handlePrescriptionNameChange}
              />
              {/* <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="select-doctor-dropdown">Select a doctor</InputLabel>
                <Select
                  value={this.props.prescriptionDoctor}
                  onChange={this.props.handlePrescriptionDoctorChange}
                  inputProps={{
                    doctor: '',
                    id: 'select-doctor',
                  }}
                >
                  <MenuItem value="" />
                  <MenuItem value="Pain">Dr. Pain</MenuItem>
                  <MenuItem value="Joins">Dr. Jones</MenuItem>
                  <MenuItem value="Johnson">Dr. Johnson</MenuItem>
                  <MenuItem value="Smith">Dr. Smith</MenuItem>
                  <MenuItem value="Phil">Dr. Phil</MenuItem>
                  <MenuItem value="J"></MenuItem>Dr. J</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl> */}

              <TextField
                id="select-doctor-dropdown"
                label="Select a doctor"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={this.props.prescriptionDoctor}
                onChange={this.props.handlePrescriptionDoctorChange}
              />

              <TextField
                id="date-prescribed"
                label="Date prescribed"
                type="date"
                defaultValue="MM-DD-YYYY"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={this.props.prescriptionDate}
                onChange={this.props.handlePrescriptionDateChange}
              />

              <TextField
                id="prescription-amount"
                label="Number of tablets"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={this.props.prescriptionAmount}
                onChange={this.props.handlePrescriptionAmountChange}
              />

              <TextField
                id="prescription-directions"
                label="Directions for use"
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                value={this.props.prescriptionDirections}
                onChange={this.props.handlePrescriptionDirectionsChange}
              />

              <Button size="large" className={classes.button} color="primary" onClick={this.props.handleFormSubmit}>
                Add prescription
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(PrescriptionsForm);