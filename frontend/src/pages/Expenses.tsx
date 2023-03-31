import {
    Box,
    Container,
    Heading,
    Spinner,
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
import UseFetch from "../hooks/useFetch";

export default function Expenses() {
    const {
        data: expenses,
        loading,
        error,
        refetch: refetchExpenses,
    } = UseFetch("expenses");

    const formatter = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    });

    const sumNumbers = (numbers: number[]) => {
        return numbers.reduce((acc, cur) => acc + cur, 0);
    };

    if (loading) {
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
    } else {
        console.log(expenses, refetchExpenses);
    }

    return (
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
                                <Td>{formatter.format(expense.amount)}</Td>
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
                                            (expense: any) => expense.amount
                                        )
                                    )
                                )}
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>
    );
}
