import { fetchCategories } from '@/api/supabase';
import { Footer } from '@/components/organism/Footer';
import { Navbar } from '@/components/organism/Navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <div className="flex min-h-screen flex-col">
    <header className="sticky top-0 z-50 mb-3 w-full border-b-2 backdrop-blur">
      <Navbar />
    </header>
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({
  component: RootLayout,
  loader: () => fetchCategories(),
});
