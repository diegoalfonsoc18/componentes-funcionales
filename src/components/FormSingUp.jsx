import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSingUp() {
  return (
    <form>
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="lastN"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Promociones"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Novedades"
        />
      </FormGroup>
      <Button variant="contained" color="success">
        Registrarse
      </Button>
    </form>
  );
}

export default FormSingUp;
