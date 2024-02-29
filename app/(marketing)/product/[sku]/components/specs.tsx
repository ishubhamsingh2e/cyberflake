import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface SpecsTableProps {
    specs: Array<{ attribute: string; value: string }>;
}

export function SpecsTable({ specs }: SpecsTableProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Attribute</TableHead>
                    <TableHead>Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {specs.map((spec, index) => (
                    <TableRow key={index}>
                        <TableCell>{spec.attribute}</TableCell>
                        <TableCell><p>{spec.value}</p></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
