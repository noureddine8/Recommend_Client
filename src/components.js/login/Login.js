import {
  Container,
  Paper,
  CssBaseline,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

import { useStyles } from "./styles";

import { useState } from "react";

function Login() {
  const [isClient, setIsClient] = useState(true);
  const [formData, setFormDate] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <CssBaseline />
      <Container className={classes.root} maxWidth="sm">
        <Paper elevation={3}>
          <Container className={classes.container}>
            <form>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <Typography variant="h4" gutterBottom>
                      {isClient ? "Sign in" : "Sign up"}
                    </Typography>
                  </Box>
                </Grid>
                {!isClient && (
                  <>
                    <Grid item xs={12} md={6}>
                      <Box display="flex" justifyContent="center">
                        <TextField
                          onChange={handleChange}
                          fullWidth
                          required
                          label="First Name"
                          name="firstname"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box display="flex" justifyContent="center">
                        <TextField
                          onChange={handleChange}
                          fullWidth
                          required
                          label="Last Name"
                          name="lastname"
                        />
                      </Box>
                    </Grid>
                  </>
                )}
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <TextField
                      onChange={handleChange}
                      fullWidth
                      type="email"
                      required
                      label="Email"
                      name="email"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <TextField
                      onChange={handleChange}
                      fullWidth
                      type="password"
                      required
                      label="Password"
                      name="password"
                    />
                  </Box>
                </Grid>
                {!isClient && (
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        onChange={handleChange}
                        fullWidth
                        type="password"
                        required
                        label="Confirm Password"
                        name="confirmPassword"
                      />
                    </Box>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleClick}
                    >
                      {isClient ? "Sign in" : "Sign up"}
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <Button
                      onClick={() =>
                        setIsClient((prev) => {
                          return !prev;
                        })
                      }
                    >
                      {isClient
                        ? "Don't have an account? Sign Up"
                        : "You already have an account? Sign In"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
