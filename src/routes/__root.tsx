import { fetchCategories } from '@/api/supabase';
import { Navbar } from '@/components/organism/Navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <>
    <header className="bg-background/69 sticky top-0 z-50 mb-3 w-full border-b-2 backdrop-blur-md">
      <Navbar />
    </header>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({
  component: RootLayout,
  loader: () => fetchCategories(),
});
