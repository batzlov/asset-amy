import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <VStack as="div" spacing={4}>
            <Outlet />
        </VStack>
    );
}
