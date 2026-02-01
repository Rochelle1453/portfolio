export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="bg-red-200 h-screen">
        <aside>SideBar</aside>
        <main>
            {children}
        </main>
    </div>
  );
}
