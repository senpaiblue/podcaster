import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        <section className="min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto w-full flex max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <Image src="/icons/logo.svg" width={22} height={22} alt="logo" />
             <MobileNav/>
            </div>
          </div>
          <div className="flex flex-col md:pb-14">
            Toaster
            {children}
          </div>
        </section>
        <RightSidebar />
      </main>
    </div>
  );
}
