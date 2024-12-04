import "@/styles/globals.css";

import { brand, geistMono, geistSans } from "@/lib/fonts";

import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
	title: {
		template: "%s",
		default: "✨Simple web tools | Toools.io",
	},
	description: "Simple web tools for productive gains.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body
				className={cn(
					"scroll-smooth font-geist-sans antialiased",
					"flex flex-col min-h-dvh justify-between",
					geistSans.variable,
					geistMono.variable,
					brand.variable
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

