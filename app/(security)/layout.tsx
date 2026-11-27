import Navbar from "@/components/nav/DashboardTopnav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <Navbar />
      <div className="px-4">{children}</div>
    </main>
  );
}
