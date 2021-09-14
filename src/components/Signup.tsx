import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./style.css"
import { Formik, Form } from "formik";
import * as yup from "yup";

let SignupSchema = yup.object().shape({
    firstName: yup.string().required("This field is required."),
    lastName: yup.string().required("This field is required."),
    email: yup
        .string()
        .email()
        .required("This field is required."),
    password: yup
        .string()
        .min(6, "Password is too short.")
        .max(20, "Password is too long.")
        .required("This field is required.")
});

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundImage: "url(https://i.pinimg.com/736x/9c/b1/43/9cb14391091d0718acd4c84fb50e1e03.jpg)",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderBottom: "18px solid black",
        boxShadow: "0px 3px 10px 10px grey",


    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        color: "black",
        padding: "10px",
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
}));

export const Signup = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <br/>
                <br/>
                <Typography component="h1" variant="h4">
                    Sign up
                </Typography>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...errors.firstName ? <div className="err">{errors.firstName}</div> : ""}
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        helperText={
                                            errors.firstName && touched.firstName
                                                ? errors.firstName
                                                : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        {...errors.lastName ? <div className="err">{errors.lastName}</div> : ""}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        helperText={
                                            errors.lastName && touched.lastName
                                                ? errors.lastName
                                                : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        {...errors.email ? <div className="err">{errors.email}</div> : ""}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        helperText={
                                            errors.email && touched.email ? errors.email : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        {...errors.password ? <div className="err">{errors.password}</div> : ""}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        helperText={
                                            errors.password && touched.password
                                                ? errors.password
                                                : null
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            
                        </Form>
                    )}
                </Formik>
                <br/>
            </div>
        </Container>
    );
};
