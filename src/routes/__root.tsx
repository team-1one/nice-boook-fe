import { fetchCategories } from '@/api/supabase';
import { Navbar } from '@/components/organisms/Navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <>
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/69 border-b-2 mb-3">
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
