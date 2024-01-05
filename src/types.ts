import { type Programme } from "@prisma/client";

export type Programmes = [Programme, ...Programme[]];
