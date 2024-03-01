import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React from "react";

interface SpecsTableProps {
    specs: Array<{ attribute: string; value: string }>;
}

export function SpecsTable({ specs }: SpecsTableProps) {
    // Helper function to group specs by attribute
    const groupSpecsByAttribute = () => {
        const groupedSpecs: { [key: string]: Array<string> } = {};

        specs.forEach((spec) => {
            if (!groupedSpecs[spec.attribute]) {
                groupedSpecs[spec.attribute] = [];
            }
            groupedSpecs[spec.attribute].push(spec.value);
        });

        return groupedSpecs;
    };

    const groupedSpecs = groupSpecsByAttribute();

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Attribute</TableHead>
                    <TableHead>Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Object.keys(groupedSpecs).map((attribute, index) => (
                    <React.Fragment key={index}>
                        <TableRow>
                            <TableCell
                                className="font-medium"
                                rowSpan={groupedSpecs[attribute].length}
                            >
                                {attribute}
                            </TableCell>
                            <TableCell>{groupedSpecs[attribute][0]}</TableCell>
                        </TableRow>
                        {groupedSpecs[attribute]
                            .slice(1)
                            .map((value, subIndex) => (
                                <TableRow key={`${index}-${subIndex}`}>
                                    <TableCell>{value}</TableCell>
                                </TableRow>
                            ))}
                    </React.Fragment>
                ))}
            </TableBody>
        </Table>
    );
}
