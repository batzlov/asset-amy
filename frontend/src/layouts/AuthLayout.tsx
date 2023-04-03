import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <SimpleGrid as="main" minH="100vh" w="100vw" columns={[1, 1, 2]}>
            <Box
                bg="teal.600"
                alignItems="center"
                display="flex"
                justifyContent="center"
                p={6}
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
            </Box>
            <Box
                bg="gray.200"
                alignItems="center"
                display="flex"
                justifyContent="center"
            >
                <Outlet />
            </Box>
        </SimpleGrid>
    );
}
