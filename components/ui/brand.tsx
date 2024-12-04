import Link from "next/link";
import { cn } from "@/lib/cn";
import { focusRing } from "@/lib/focuses";

interface Props {
	href?: string;
	as?: "link" | "div";
	className?: string;
}

export function Brand({ href, className, as = "link" }: Props) {
	if (as === "link") {
		return (
			<Link
				href={href ?? "/"}
				className={cn("font-brand text-3xl rounded-md px-3 py-1.5", focusRing)}
			>
				Toools.io
			</Link>
		);
	}

	if (as === "div") {
		return (
			<div className={cn("select-none font-brand text-3xl", className)}>
				Toools.io
			</div>
		);
	}

	return null;
}
