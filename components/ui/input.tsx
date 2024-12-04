import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { focusError, focusInput } from "@/lib/focuses";

import { cn } from "@/lib/cn";

const inputVariants = cva(
	[
    // base
		"flex w-full rounded-md border border-input text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors",
    // type: file
    "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
		focusInput,
	],
	{
		variants: {
			variant: {
				default: "bg-background hover:border-primary",
				secondary: "bg-secondary hover:bg-secondary/80",
			},
			sizes: {
				sm: "h-9 px-2 py-1.5",
				md: "h-10 px-3 py-2",
				lg: "h-11 px-4 py-2",
			},
			hasError: {
				true: focusError,
			},
		},
		defaultVariants: {
			variant: "default",
			sizes: "md",
			hasError: false,
		},
	}
);

const Input = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input"> & VariantProps<typeof inputVariants>
>(({ className, type, variant, sizes, hasError, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(inputVariants({ variant, sizes, hasError, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };

