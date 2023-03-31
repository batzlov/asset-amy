import { Container, Spinner } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Container
            height="90vh"
            width="100vw"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Spinner size="xl" />
        </Container>
    );
}
