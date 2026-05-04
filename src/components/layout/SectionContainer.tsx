import type { ComponentPropsWithoutRef } from "react";

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const sectionSpacing = "py-10 sm:py-12 lg:py-16";
const containerSpacing = "mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-14";

type SectionProps = ComponentPropsWithoutRef<"section">;
type SectionContainerProps = ComponentPropsWithoutRef<"div">;

export const Section = ({ className, ...props }: SectionProps) => (
  <section className={cx(sectionSpacing, className)} {...props} />
);

export const SectionContainer = ({
  className,
  ...props
}: SectionContainerProps) => (
  <div className={cx(containerSpacing, className)} {...props} />
);
