import { HeartIcon, MessageCircleDashedIcon, SplineIcon } from "lucide-react";

import { Brand } from "@/components/ui/brand";
import Link from "next/link";
import { ThemeBtn } from "@/components/theme-btn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-20 border-b bg-background">
      <nav className="flex items-center justify-between max-w-6xl px-4 mx-auto h-14">
        <div className="flex items-center gap-4">
          <Brand />
        </div>

        <div className="flex items-center gap-x-4">
          <Link
            href={"/tools"}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "xs",
                className: "rounded-lg",
              })
            )}
          >
            <SplineIcon className="text-muted-foreground" />
            Toools
          </Link>
          <Link
            href={"#"}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "xs",
                className: "rounded-lg",
              })
            )}
          >
            <HeartIcon className="text-muted-foreground" />
            Donate
          </Link>
          <Link
            href={"#"}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "xs",
                className: "rounded-lg",
              })
            )}
          >
            <MessageCircleDashedIcon className="text-muted-foreground" />
            Feedback
          </Link>
          <ThemeBtn />
        </div>
      </nav>
    </header>
  );
}
