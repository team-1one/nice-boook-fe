import Navbar from '@/components/features/Navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <>
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b-2 mb-3">
      <Navbar />
    </header>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
