import SideBar from "./components/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex">
      <SideBar />
      <div className="w-3/4">{children}</div>
    </section>
  );
}
