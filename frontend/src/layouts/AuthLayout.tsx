import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Icon,
    Text,
    VStack,
} from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <Grid as="main" minH="100vh" w="100vw" templateColumns="repeat(6, 1fr)">
            <GridItem
                bg="teal.600"
                alignItems="center"
                display="flex"
                justifyContent="center"
                p={6}
                colSpan={{
                    base: 6,
                    lg: 3,
                    xl: 2,
                }}
            >
                <VStack>
                    <Heading
                        fontSize="5xl"
                        fontWeight={700}
                        fontFamily="Secular One"
                        color="white"
                        textAlign="center"
                    >
                        "The best thing money can buy is time."
                    </Heading>
                    <Text
                        w="100%"
                        fontSize="2xl"
                        fontWeight={500}
                        fontFamily="Secular One"
                        color="white"
                        pr={5}
                        textAlign="end"
                    >
                        Author
                    </Text>
                </VStack>
            </GridItem>
            <GridItem
                bg="gray.200"
                colSpan={{
                    base: 6,
                    lg: 3,
                    xl: 4,
                }}
            >
                <Box display="flex" justifyContent="end">
                    <Button variant="ghost" as={NavLink} to="/">
                        <Icon as={ArrowBackIcon} color="black" mr={2} />
                        Home
                    </Button>
                </Box>
                <Box
                    alignItems="center"
                    display="flex"
                    justifyContent="center"
                    h="95%"
                >
                    <Outlet />
                </Box>
            </GridItem>
        </Grid>
    );
}
