@@ -0,0 +1,195 @@
"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const long_description = `
<p><strong>Radeon™ RX 7600 MECH 2X CLASSIC 8G OC</strong></p>
<p><strong>Radeon™ Rx 7000 Mech Seriesarm Yourself For The Final Blow</strong></p>
<p>MECH brings a performance-focused design that maintains the essentials to accomplish any task at hand.<br>
Rocking a trusted dual fan arrangement laid into a rigid industrial design lets this sharp looking graphics card fit into any build.</p>
<p><strong>Backplate</strong></p>
<p>A clean-looking brushed-finish backplate reinforces the length of the card.</p>
<p><strong>Tailored PCB Design</strong></p>
<p>Not all circuit boards are created equal. A custom PCB Design provides greater reliability and beefed up power circuitry for pushing the card to its limits.</p>
<p>Experience unprecedented performance, visuals, and efficiency for gaming and streaming in 1080p with the AMD Radeon™ RX 7600 graphics card, powered by RDNA™ 3 architecture. Immerse yourself in breathtaking visuals with the pinpoint color accuracy of AMD Radiance Display™ Engine and boost frame rates with AMD FidelityFX™ Super Resolution and Radeon™ Super Resolution upscaling technologies.1,2&nbsp;To unlock even more performance, combine AMD Radeon™ RX 7000 Series graphics card with a compatible AMD Ryzen™ processor to activate AMD smart technologies.3</p>
<p><strong>FEATURES</strong></p>
<ul>
<li>Boost Clock / Memory Speed - Up to 2695 MHz / 18Gbps</li>
<li>8GB, GDDR6</li>
<li>DisplayPort™ x 3 (v1.4)</li>
<li>HDMI™ x 1 (Supports 4K@120Hz/8K@60Hz and VRR as specified in HDMI™ 2.1)</li>
<li>Dual Fan Thermal Design</li>
<li>TORX Fan 3.0</li>
<li>Afterburner Overclocking Utility</li>
<li>Supports multi-GPU setups.</li>
<li>OC Scanner.</li>
<li>On Screen Display</li>
</ul>
`;

function SpecsTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Attribute</TableHead>
                    <TableHead>Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">MODEL NAME</TableCell>
                    <TableCell>
                        Radeon™ RX 7600 MECH 2X CLASSIC 8G OC
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        GRAPHICS PROCESSING UNIT
                    </TableCell>
                    <TableCell>AMD Radeon™ RX 7600</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">INTERFACE</TableCell>
                    <TableCell>PCI Express® Gen 4 x 8</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        STREAM PROCESSORS
                    </TableCell>
                    <TableCell>2048 Units</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium" rowSpan={2}>
                        CORE CLOCKS
                    </TableCell>
                    <TableCell>Boost: Up to 2695 MHz</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Game: Up to 2280 MHz</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">MEMORY SPEED</TableCell>
                    <TableCell>18 Gbps</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">MEMORY</TableCell>
                    <TableCell>8GB GDDR6</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">MEMORY BUS</TableCell>
                    <TableCell>128-bit</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">OUTPUT</TableCell>
                    <TableCell>
                        DisplayPort x 3 (v1.4) / HDMI™ x 1 (Supports
                        4K@120Hz/8K@60Hz and VRR as specified in HDMI™ 2.1)
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">HDCP SUPPORT</TableCell>
                    <TableCell>YES</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        POWER CONSUMPTION
                    </TableCell>
                    <TableCell>165 W</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        POWER CONNECTORS
                    </TableCell>
                    <TableCell>8-pin x 1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        RECOMMENDED PSU
                    </TableCell>
                    <TableCell>550 W</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        CARD DIMENSION (MM)
                    </TableCell>
                    <TableCell>235 x 125 x 47 mm</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        WEIGHT (CARD / PACKAGE)
                    </TableCell>
                    <TableCell>666g / 983g</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        DIRECTX VERSION SUPPORT
                    </TableCell>
                    <TableCell>12 Ultimate</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        OPENGL VERSION SUPPORT
                    </TableCell>
                    <TableCell>4.6</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        MAXIMUM DISPLAYS
                    </TableCell>
                    <TableCell>4</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        FREESYNC™ TECHNOLOGY
                    </TableCell>
                    <TableCell>YES</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">
                        DIGITAL MAXIMUM RESOLUTION
                    </TableCell>
                    <TableCell>7680 x 4320</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

function Description() {
    return (
        <>
            <Separator />
            <div>
                <h1 className="text-center text-2xl font-semibold lg:text-3xl">
                    Description
                </h1>
                <div className="grid-cols-2 space-y-8 py-8 lg:grid lg:gap-x-12 lg:space-y-0 lg:p-12">
                    <div>
                        <div
                            className="space-y-4"
                            dangerouslySetInnerHTML={{
                                __html: long_description,
                            }}
                        />
                    </div>
                    <div>
                        <SpecsTable />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;
