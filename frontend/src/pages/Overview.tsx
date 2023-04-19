import {
    Box,
    Container,
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Overview() {
    const [expenses, setExpenses] = useState([]);
    const [revenues, setRevenues] = useState([]);
    const [assets, setAssets] = useState([]);

    useEffect(() => {}, []);

    const formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    });

    const sumNumbers = (numbers: number[]) => {
        return numbers.reduce((acc, cur) => acc + cur, 0);
    };

    const fetchExpenses = async () => {
        const response = await fetch("http://localhost:3000/expenses");
        const data = await response.json();
        setExpenses(data);
    };

    const fetchRevenues = async () => {
        const response = await fetch("http://localhost:3000/revenues");
        const data = await response.json();
        setRevenues(data);
    };

    const fetchAssets = async () => {
        const response = await fetch("http://localhost:3000/assets");
        const data = await response.json();
        setAssets(data);
    };

    return (
        <>
            <Container minWidth="800px">
                <Box marginTop={8}>
                    <Heading as="h2">Einnahmen</Heading>
                    <TableContainer marginTop={4}>
                        <Table variant="simple">
                            <TableCaption>Monatliche Einnahmen</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Name der Einnahme</Th>
                                    <Th>Höhe der Einnahme</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {revenues.map((revenue: any) => (
                                    <Tr key={revenue.name}>
                                        <Td>{revenue.name}</Td>
                                        <Td>
                                            {formatter.format(revenue.amount)}
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Einnahmen insgesamt:</Th>
                                    <Th>
                                        {formatter.format(
                                            sumNumbers(
                                                revenues.map(
                                                    (revenue: any) =>
                                                        revenue.amount
                                                )
                                            )
                                        )}
                                    </Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Box>
                <Box marginTop={4}>
                    <Heading as="h2">Ausgaben</Heading>
                    <TableContainer marginTop={4}>
                        <Table variant="simple">
                            <TableCaption>Monatliche Ausgaben</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Name der Ausgaben</Th>
                                    <Th>Höhe der Ausgaben</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {expenses.map((expense: any) => (
                                    <Tr key={expense.name}>
                                        <Td>{expense.name}</Td>
                                        <Td>
                                            {formatter.format(expense.amount)}
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Ausgaben insgesamt:</Th>
                                    <Th>
                                        {formatter.format(
                                            sumNumbers(
                                                expenses.map(
                                                    (expense: any) =>
                                                        expense.amount
                                                )
                                            )
                                        )}
                                    </Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Box>
                <Box marginTop={4} marginBottom={4}>
                    <Heading as="h2">Asset Allocation</Heading>
                    <TableContainer marginTop={4}>
                        <Table variant="simple">
                            <TableCaption>Monatliche Ausgaben</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Name des Asset</Th>
                                    <Th>Höhe des Asset</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {assets.map((asset: any) => (
                                    <Tr key={asset.name}>
                                        <Td>{asset.name}</Td>
                                        <Td>
                                            {formatter.format(asset.amount)}
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Assets insgesamt:</Th>
                                    <Th>
                                        {formatter.format(
                                            sumNumbers(
                                                assets.map(
                                                    (asset: any) => asset.amount
                                                )
                                            )
                                        )}
                                    </Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    );
}
