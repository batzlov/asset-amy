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
import { Form } from "react-router-dom";

import useAuth from "../components/store/AuthContext";

export default function SignIn() {
    const [mail, setMail] = useState("");
    const [password, setPasswort] = useState("");

    const auth = useAuth();

    return (
        <Card m={6} w="100%" maxW="700px">
            <CardBody>
                <Heading as="h2" fontSize="2xl" textAlign="center" mb={5}>
                    Melde dich in deinem Konto an.
                </Heading>
                <Form
                    method="post"
                    onSubmit={() => auth.signIn(mail, password)}
                >
                    <FormControl isRequired mb="20px">
                        <FormLabel>E-Mail:</FormLabel>
                        <Input
                            type="text"
                            name="mail"
                            placeholder="Deine E-Mail-Adresse"
                            value={mail}
                            onChange={(_mail) => setMail(_mail.target.value)}
                        />
                    </FormControl>
                    <FormControl isRequired mb="20px">
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
                    <Button variant="link" mb="20px">
                        Du hast noch kein Konto bei Asset Amy?
                    </Button>
                    <Stack direction="row" justifyContent="center">
                        <Button type="submit" colorScheme="teal">
                            Anmelden
                        </Button>
                    </Stack>
                </Form>
            </CardBody>
        </Card>
    );
}
