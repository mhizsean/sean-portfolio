import HomeLeftSection from "@/components/HomeLeftSection";
import HomeRightSection from "@/components/HomeRightSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <HomeLeftSection />
      <HomeRightSection />
    </main>
  );
}
