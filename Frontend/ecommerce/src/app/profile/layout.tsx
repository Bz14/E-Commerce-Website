import SideBar from "./components/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex bg-gray-50">
      <SideBar />
      <div className="w-full bg-gray-50">{children}</div>
    </section>
  );
}
