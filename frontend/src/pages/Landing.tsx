import {
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";

export default function Landing() {
    return (
        <Grid
            as="main"
            minHeight="90vh"
            w="100vw"
            templateColumns="repeat(6, 1fr)"
        >
            <GridItem
                alignItems="center"
                display="flex"
                justifyContent="center"
                p={6}
                colSpan={{
                    base: 6,
                    lg: 3,
                }}
            >
                <Container>
                    <Heading as="h1" fontSize="3xl" lineHeight="xxl">
                        Deine Finanzen und du,
                    </Heading>
                    <Heading as="h2" fontSize="3xl" lineHeight="xxl">
                        ein Dream-Team wie aus dem Bilderbuch.
                    </Heading>
                    <Text mt="20px" fontSize="large">
                        Egal ob du deine Ausgaben im Blick behalten oder deine
                        Asset Allocation tracken möchtest, mit Asset Amy hast du
                        alles im Griff.
                    </Text>
                    <Stack direction="row" mt="30px">
                        <Button colorScheme="teal">Jetzt starten</Button>
                        <Button variant="outline" colorScheme="teal">
                            Du hast schon ein Konto?
                        </Button>
                    </Stack>
                </Container>
            </GridItem>
            <GridItem
                alignItems="center"
                display="flex"
                justifyContent="center"
                p={6}
                colSpan={{
                    base: 6,
                    lg: 3,
                }}
            >
                <Image
                    boxSize="700px"
                    objectFit="contain"
                    src="/imperfect-circle.svg"
                    alt="Imperfect Circle"
                />
            </GridItem>
        </Grid>
    );
}
