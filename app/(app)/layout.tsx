import { AppNav } from "@/components/nav/Navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <>
      <AppNav session={session} />
      <main>{children}</main>
    </>
  );
}
