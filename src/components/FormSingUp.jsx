import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

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

      <label>Promociones</label>
      <input type="checkbox" />
      <label>Novedades</label>
      <input type="checkbox" />
      <Button variant="contained" color="success">
        Registrarse
      </Button>
    </form>
  );
}

export default FormSingUp;
