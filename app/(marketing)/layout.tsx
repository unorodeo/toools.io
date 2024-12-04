import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function AppLayout({ children }: Props) {
	return (
		<>
			<Header />
			<main className="relative flex-1">{children}</main>
			<Footer />
		</>
	);
}
