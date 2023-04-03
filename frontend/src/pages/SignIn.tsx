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
import { Form } from "react-router-dom";

export default function SignIn() {
    return (
        <Card m={6} w="100%">
            <CardBody>
                <Heading as="h2" fontSize="2xl" textAlign="center" mb={5}>
                    Melde dich in deinem Konto an.
                </Heading>
                <Form>
                    <FormControl isRequired mb="20px">
                        <FormLabel>E-Mail:</FormLabel>
                        <Input
                            type="text"
                            name="mail"
                            placeholder="Deine E-Mail-Adresse"
                        />
                    </FormControl>
                    <FormControl isRequired mb="20px">
                        <FormLabel>Passwort:</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Dein Passwort"
                        />
                    </FormControl>
                    <Button variant="link" mb="20px">
                        Du hast noch kein Nutzer:innen-Konto bei Asset Amy?
                    </Button>
                    <Stack direction="row" justifyContent="center">
                        <Button colorScheme="teal">anmelden</Button>
                    </Stack>
                </Form>
            </CardBody>
        </Card>
    );
}
