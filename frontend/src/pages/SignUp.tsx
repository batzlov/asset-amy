import {
    Button,
    Card,
    CardBody,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Form, NavLink } from "react-router-dom";
import * as Yup from "yup";
import usePost from "../hooks/UsePost";

export default function SignUp() {
    const { error: signUpError, sendPost: signUpPost } = usePost<any>(
        "/auth/sign-up",
        (data) => {
            console.log(data, "Sign up successful!");
        }
    );

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required()
                .min(3, "Bitte ein gültigen Vornamen eingeben."),
            lastName: Yup.string()
                .required()
                .min(3, "Bitte ein gültigen Nachnamen eingeben."),
            email: Yup.string()
                .required()
                .email("Bitte eine gültiges E-Mail eingeben."),
            password: Yup.string()
                .required()
                .min(3, "Bitte ein gültiges Passwort eingeben."),
        }),
        onSubmit: (values) => {
            signUpPost(values);
            console.log(values);
        },
    });

    return (
        <Card m={6} w="100%" maxW="700px">
            <CardBody>
                <Heading as="h2" fontSize="2xl" textAlign="center" mb={5}>
                    Erstelle jetzt ein Konto.
                </Heading>
                <Form onSubmit={formik.handleSubmit}>
                    <FormControl
                        mb="20px"
                        isInvalid={
                            formik.touched.firstName && formik.errors.firstName
                                ? true
                                : false
                        }
                    >
                        <FormLabel>Vorname:</FormLabel>
                        <Input
                            type="text"
                            name="firstName"
                            placeholder="Dein Vorname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                    </FormControl>
                    <FormControl
                        mb="20px"
                        isInvalid={
                            formik.touched.lastName && formik.errors.lastName
                                ? true
                                : false
                        }
                    >
                        <FormLabel>Nachname:</FormLabel>
                        <Input
                            type="text"
                            name="lastName"
                            placeholder="Dein Nachname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                    </FormControl>
                    <FormControl
                        mb="20px"
                        isInvalid={
                            formik.touched.email && formik.errors.email
                                ? true
                                : false
                        }
                    >
                        <FormLabel>E-Mail:</FormLabel>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Deine E-Mail-Adresse"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                    </FormControl>
                    <FormControl
                        mb="20px"
                        isInvalid={
                            formik.touched.password && formik.errors.password
                                ? true
                                : false
                        }
                    >
                        <FormLabel>Passwort:</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Dein Passwort"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                    </FormControl>
                    <Button as={NavLink} to="/sign-in" variant="link" mb="20px">
                        Du hast bereits ein Konto bei Asset Amy?
                    </Button>
                    <Stack direction="row" justifyContent="center">
                        <Button type="submit" colorScheme="purple">
                            Registrieren
                        </Button>
                    </Stack>
                </Form>
            </CardBody>
        </Card>
    );
}
