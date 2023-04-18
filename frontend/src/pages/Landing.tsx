import { CheckIcon } from "@chakra-ui/icons";
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    HStack,
    Icon,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";

const features = Array.apply(null, Array(8)).map(function (x, i) {
    return {
        id: i,
        title: "Lorem ipsum dolor sit amet",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
    };
});

export default function Landing() {
    return (
        <>
            <Grid
                as="main"
                pt={20}
                pb={40}
                bgColor="gray.100"
                templateColumns="repeat(10, 1fr)"
                justifyContent="space-evenly"
                display="flex"
            >
                <GridItem
                    alignItems="center"
                    display="flex"
                    justifyContent="center"
                    p={6}
                    colSpan={{
                        base: 10,
                        lg: 4,
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
                            Egal ob du deine Ausgaben im Blick behalten oder
                            deine Asset Allocation tracken möchtest, mit Asset
                            Amy hast du alles im Griff.
                        </Text>
                        <Stack direction="row" mt="30px">
                            <Button colorScheme="purple">Jetzt starten</Button>
                            <Button variant="outline" colorScheme="purple">
                                Du hast schon ein Konto?
                            </Button>
                        </Stack>
                    </Container>
                </GridItem>
                <GridItem
                    alignItems="center"
                    justifyContent="start"
                    display={{ base: "none", lg: "flex" }}
                    p={6}
                    colSpan={{
                        base: 10,
                        lg: 5,
                    }}
                >
                    <Image
                        boxShadow="2xl"
                        maxH="600px"
                        borderRadius="10"
                        objectFit="cover"
                        src="/app-screenshot.png"
                        alt="App Screenshot"
                    />
                </GridItem>
            </Grid>

            <Box p={4} mt={20} mb={40} as="section">
                <Stack
                    spacing={4}
                    as={Container}
                    maxW={"3xl"}
                    textAlign={"center"}
                >
                    <Heading fontSize={"3xl"} as="h2">
                        Was wir bieten
                    </Heading>
                    <Text color={"gray.600"} fontSize={"xl"}>
                        Finanz-Software gibt es wie Sand am Meer. Die Funktionen
                        die wir dir mit Asset Amy bieten hat so allerdings noch
                        niemand. Erfahre auf einen Blick was wir dir alles
                        bieten.
                    </Text>
                </Stack>

                <Container maxW={"6xl"} mt={10}>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 4 }}
                        spacing={10}
                    >
                        {features.map((feature) => (
                            <HStack key={feature.id} align={"top"}>
                                <Box color={"green.400"} px={2}>
                                    <Icon as={CheckIcon} />
                                </Box>
                                <VStack align={"start"}>
                                    <Text fontWeight={600}>
                                        {feature.title}
                                    </Text>
                                    <Text color={"gray.600"}>
                                        {feature.text}
                                    </Text>
                                </VStack>
                            </HStack>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
            <Box
                p={4}
                mt={20}
                pb="20"
                as="section"
                bg={useColorModeValue("gray.100", "gray.800")}
            >
                <Stack
                    py={16}
                    px={8}
                    spacing={{ base: 8, md: 10 }}
                    align={"center"}
                    direction={"column"}
                >
                    <Heading fontSize={"3xl"} as="h2">
                        Was ich dir sagen möchte
                    </Heading>
                    <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign={"center"}
                        maxW={"3xl"}
                    >
                        Es ist wichtig, sich Gedanken über seine Finanzen zu
                        machen, um ein finanziell stabiles Leben zu führen. Wenn
                        man keine Kontrolle über seine Finanzen hat, kann das zu
                        Schulden, finanzieller Instabilität und Stress führen.
                        Durch eine regelmäßige Überprüfung der Einnahmen und
                        Ausgaben kann man ein besseres Verständnis dafür
                        entwickeln, wo das Geld ausgeht und wie man es am
                        effektivsten einsetzen kann. Das kann dabei helfen,
                        Schulden abzubauen, Geld zu sparen und langfristig
                        finanzielle Ziele zu erreichen, wie zum Beispiel die
                        eigene Altersvorsorge zu sichern oder eine größere
                        Anschaffung zu tätigen. Kurz gesagt, sich Gedanken über
                        seine Finanzen zu machen, ist der erste Schritt auf dem
                        Weg zu einem finanziell gesunden Leben.
                    </Text>
                    <Box textAlign={"center"}>
                        <Avatar
                            boxShadow="md"
                            bg="purple.700"
                            color="white"
                            name={"Robert Ackermann"}
                            mb={2}
                        />

                        <Text fontWeight={600}>Robert Ackermann</Text>
                        <Text
                            fontSize={"sm"}
                            color={useColorModeValue("gray.400", "gray.400")}
                        >
                            CEO
                        </Text>
                    </Box>
                </Stack>
            </Box>

            <Box
                bg={useColorModeValue("purple.700", "gray.900")}
                color={useColorModeValue("white", "white")}
            >
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    spacing={4}
                    justify="center"
                >
                    <Text>© 2023 Asset Amy.</Text>
                </Container>
            </Box>
        </>
    );
}
