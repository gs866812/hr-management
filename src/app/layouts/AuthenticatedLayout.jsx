import Header from "@/Components/Front-end/Header";
import Navbar from "@/Components/Front-end/Navbar";

export default function AuthenticatedLayout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-8 flex items-start">
            <div className="w-[20%] h-[100vh] border-r">
              <Navbar />
            </div>
            <div className="w-[80%] pl-1 pt-1 rounded-md">{children}</div>
          </div>
        </div>
      </main>
      <footer>{/* Footer component will be added here */}</footer>
    </div>
  );
}
