export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-muted p-4">Dashboard Sidebar</aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
