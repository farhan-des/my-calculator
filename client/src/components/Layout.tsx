import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  title?: string;
}

export default function Layout({ children, showBackButton = false, title }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with Back to Home */}
      {showBackButton && (
        <header className="border-b">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" />
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Button>
            </Link>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
