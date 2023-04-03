import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link,
    Stack,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink as ReactNavLink } from "react-router-dom";

const routerLinks = [
    { name: "Übersicht", path: "/" },
    { name: "Anmelden", path: "/sign-in" },
    { name: "Registrieren", path: "/sign-up" },
];

// const routerLinks = [
//     { name: "Übersicht", path: "/" },
//     { name: "Ausgaben", path: "/expenses" },
//     { name: "Einnahmen", path: "/revenues" },
//     { name: "Vermögensverteilung", path: "/asset-allocation" },
// ];

const NavLink = ({ children, to }: { children: ReactNode; to: string }) => (
    <Link
        px={2}
        py={1}
        as={ReactNavLink}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("teal.300", "gray.700"),
        }}
        to={to}
    >
        {children}
    </Link>
);

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                bg={useColorModeValue("teal.500", "gray.900")}
                px={4}
                color="white"
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <HStack spacing={8} alignItems={"center"}>
                        <Box>Asset Amy</Box>
                    </HStack>
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        {routerLinks.map((link) => (
                            <NavLink key={link.path} to={link.path}>
                                {link.name}
                            </NavLink>
                        ))}
                    </HStack>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {routerLinks.map((link) => (
                                <NavLink key={link.path} to={link.path}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
