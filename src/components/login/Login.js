import {
  Container,
  Paper,
  CssBaseline,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { signin, signup } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Login() {
  const initialformData = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialformData);
  const [isPassMatched, setMatch] = useState(true);
  const [helperText, setHelper] = useState("");
  const [isClient, setIsClient] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [isConfirmShown, setIsConfirmShown] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isClient) {
      dispatch(signin(formData, history));
    } else {
      if (!isPassMatched) {
      } else {
        dispatch(signup(formData, history));
      }
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    auth.token && history.push("/");
  }, []);
  useEffect(() => {
    if (formData.password === formData.confirmPassword) {
      setMatch(true);
      setHelper("");
    } else {
      setMatch(false);
      setHelper("Passwords mismatch");
    }
  }, [formData.confirmPassword, formData.password]);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Container className={classes.container}>
            {auth.token ? (
              <Typography variant="h3">You are Already logged in</Typography>
            ) : (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <Typography variant="h3" gutterBottom>
                        {isClient ? "Sign in" : "Sign up"}
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                      <Typography variant="h6" color="secondary" gutterBottom>
                        {auth.error}
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
                            value={formData.firstname}
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
                            value={formData.lastname}
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
                        value={formData.email}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <FormControl fullWidth={true}>
                        <InputLabel htmlFor="password">Password</InputLabel>

                        <Input
                          id="password"
                          onChange={handleChange}
                          fullWidth
                          type={isShown ? "text" : "password"}
                          required
                          label="Password"
                          name="password"
                          value={formData.password}
                          endAdornment={
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => {
                                setIsShown((shown) => !shown);
                              }}
                            >
                              {!isShown ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          }
                        />
                      </FormControl>
                    </Box>
                  </Grid>
                  {!isClient && (
                    <Grid item xs={12}>
                      <Box display="flex" justifyContent="center">
                        <FormControl fullWidth={true} error={!isPassMatched}>
                          <InputLabel htmlFor="confirm">
                            Confirm Password
                          </InputLabel>
                          <Input
                            id="confirm"
                            helperText={helperText}
                            onChange={handleChange}
                            fullWidth
                            type={isConfirmShown ? "text" : "password"}
                            required
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            endAdornment={
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => {
                                  setIsConfirmShown((shown) => !shown);
                                }}
                              >
                                {!isConfirmShown ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            }
                          />
                          <FormHelperText id="component-error-text">
                            {isPassMatched ? "" : helperText}
                          </FormHelperText>
                        </FormControl>
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
                      >
                        {isClient ? "Sign in" : "Sign up"}
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                      <Button
                        onClick={() => {
                          setFormData(initialformData);
                          setIsClient((prev) => !prev);
                          auth.error = "";
                        }}
                      >
                        {isClient
                          ? "Don't have an account? Sign Up"
                          : "You already have an account? Sign In"}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            )}
          </Container>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
