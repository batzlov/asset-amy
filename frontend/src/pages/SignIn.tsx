import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
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
import { Form, Link } from "react-router-dom";
import * as Yup from "yup";
import useAuth from "../components/store/AuthContext";

export default function SignIn() {
    const { signIn, error: signInError } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required()
                .email("Bitte eine gültiges E-Mail eingeben."),
            password: Yup.string()
                .required()
                .min(3, "Bitte ein gültiges Passwort eingeben."),
        }),
        onSubmit: (values) => {
            console.log(values);
            signIn(values.email, values.password);
        },
    });

    return (
        <Card m={6} w="100%" maxW="700px">
            <CardBody>
                <Heading as="h2" fontSize="2xl" textAlign="center" mb={5}>
                    Melde dich in deinem Konto an.
                </Heading>
                <Form onSubmit={formik.handleSubmit}>
                    {signInError && (
                        <Alert status="error" mb={5}>
                            <AlertIcon />
                            <AlertTitle>Ups!</AlertTitle>
                            <AlertDescription>
                                Etwas ist schief gelaufen. Bitte überprüfe deine
                                Eingaben.
                            </AlertDescription>
                        </Alert>
                    )}
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
                    <Button as={Link} to="/sign-up" variant="link" mb="20px">
                        Du hast noch kein Konto bei Asset Amy?
                    </Button>
                    <Stack direction="row" justifyContent="center">
                        <Button type="submit" colorScheme="purple">
                            Anmelden
                        </Button>
                    </Stack>
                </Form>
            </CardBody>
        </Card>
    );
}
