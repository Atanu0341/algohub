import Navbar from "@/components/Navbar";
import { SearchProvider } from "@/context/SearchContext";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SearchProvider>
        <Navbar />
      </SearchProvider>
    </main>
  );
}
