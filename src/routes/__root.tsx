import { fetchCategories } from '@/api/supabase';
import { Footer } from '@/components/organism/Footer';
import { Navbar } from '@/components/organism/Navbar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Suspense, lazy } from 'react';

const TanStackRouterDevtools =
  import.meta.env.DEV ?
    lazy(() =>
      import('@tanstack/react-router-devtools').then((module) => ({
        default: module.TanStackRouterDevtools,
      })),
    )
  : () => null;

const RootLayout = () => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <Suspense fallback={null}>
      <TanStackRouterDevtools />
    </Suspense>
  </div>
);

export const Route = createRootRoute({
  component: RootLayout,
  loader: () => fetchCategories(),
});
