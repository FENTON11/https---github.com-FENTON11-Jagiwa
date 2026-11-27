export default async function GamingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <div className="px-4">{children}</div>
    </main>
  );
}
