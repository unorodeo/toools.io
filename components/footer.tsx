import { Brand } from "@/components/ui/brand";

export function Footer() {
  return (
    <footer className="border-t shadow-inner bg-background">
      <nav className="flex items-center justify-between max-w-6xl px-4 py-6 mx-auto">
        <div className="flex flex-col items-start">
          <Brand as="div"/>
          <p className="muted">
            Copyright &copy; 2024 &mdash; Present. Toools.io
          </p>
        </div>

        <div>
          <p className="[&:not(:first-child)]:mt-0 muted">
            Built by unorodeo. 2024
          </p>
        </div>
      </nav>
    </footer>
  );
}
