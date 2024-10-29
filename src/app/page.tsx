
import { SearchProvider } from "@/context/SearchContext";
import Navbar from "@/components/Navbar";
import Topics from "@/components/Topics";
import Footer from "@/components/Footer";
import SearchMobile from "@/components/Search-Mobile";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <SearchProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          <SearchMobile />
          <Topics />
          <ComingSoon />
        </main>
        <Footer />
      </div>
    </SearchProvider>
  );
}