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
import { useState } from "react";
import { Form, NavLink } from "react-router-dom";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasswort] = useState("");

    return (
        <Card m={6} w="100%" maxW="700px">
            <CardBody>
                <Heading as="h2" fontSize="2xl" textAlign="center" mb={5}>
                    Erstelle jetzt ein Konto.
                </Heading>
                <Form>
                    <FormControl mb="20px">
                        <FormLabel>Vorname:</FormLabel>
                        <Input
                            type="text"
                            name="firstName"
                            placeholder="Dein Vorname"
                            value={firstName}
                            onChange={(_firstName) =>
                                setEmail(_firstName.target.value)
                            }
                        />
                    </FormControl>
                    <FormControl mb="20px">
                        <FormLabel>Nachname:</FormLabel>
                        <Input
                            type="text"
                            name="lastName"
                            placeholder="Dein Nachname"
                            value={lastName}
                            onChange={(_lastName) =>
                                setEmail(_lastName.target.value)
                            }
                        />
                    </FormControl>
                    <FormControl mb="20px">
                        <FormLabel>E-Mail:</FormLabel>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Deine E-Mail-Adresse"
                            value={email}
                            onChange={(_email) => setEmail(_email.target.value)}
                        />
                    </FormControl>
                    <FormControl mb="20px">
                        <FormLabel>Passwort:</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Dein Passwort"
                            value={password}
                            onChange={(_password) =>
                                setPasswort(_password.target.value)
                            }
                        />
                    </FormControl>
                    <Button as={NavLink} to="/sign-in" variant="link" mb="20px">
                        Du hast bereits ein Konto bei Asset Amy?
                    </Button>
                    <Stack direction="row" justifyContent="center">
                        <Button
                            type="submit"
                            colorScheme="purple"
                            onClick={() => {
                                console.log(
                                    firstName,
                                    lastName,
                                    email,
                                    password
                                );
                            }}
                        >
                            Registrieren
                        </Button>
                    </Stack>
                </Form>
            </CardBody>
        </Card>
    );
}
