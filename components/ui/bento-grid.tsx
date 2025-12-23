import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[20rem] grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background?: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-3xl",
            // light styles
            "bg-white border border-border/50 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            // dark styles
            "dark:bg-black/40 dark:backdrop-blur-md dark:border-white/10 dark:[box-shadow:0_-20px_80px_-20px_#ffffff08_inset]",
            className,
        )}
    >
        <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>

        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-8 transition-all duration-500 group-hover:-translate-y-8">
            <div className="mb-2 p-3 rounded-2xl bg-primary/5 border border-primary/10 w-fit group-hover:bg-primary/10 transition-colors duration-500">
                <Icon className="h-8 w-8 text-primary transition-all duration-500 ease-in-out group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] dark:text-white">
                {name}
            </h3>
            <p className="max-w-xs text-sm text-[var(--text-secondary)] dark:text-zinc-300 group-hover:text-[var(--text-primary)] dark:group-hover:text-white transition-colors duration-500">
                {description}
            </p>
        </div>

        <div
            className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Button variant="ghost" asChild size="sm" className="pointer-events-auto rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                <a href={href} className="flex items-center gap-2">
                    {cta}
                    <ArrowRight className="w-4 h-4" />
                </a>
            </Button>
        </div>

        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-500 group-hover:bg-primary/[0.02] group-hover:dark:bg-primary/[0.05]" />
    </div>
);

export { BentoCard, BentoGrid };
