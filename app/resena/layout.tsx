import { MinimalPublicLayout } from "@/components/minimal-public-layout";

export default function ResenaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MinimalPublicLayout>{children}</MinimalPublicLayout>;
}
