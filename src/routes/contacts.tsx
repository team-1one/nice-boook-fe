import { DeveloperCard } from '@/components/organism/Contact/DeveloperCard';
import { createFileRoute } from '@tanstack/react-router';
import { Typography } from '@/components/ui/Typography';
import { fetchContacts } from '@/api/supabase';

export const Route = createFileRoute('/contacts')({
  component: RouteComponent,
  loader: async () => {
    const contacts = await fetchContacts();

    return {
      contacts,
    };
  },
});

function RouteComponent() {
  const { contacts } = Route.useLoaderData();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <Typography
          variant={'h1'}
          className="text-3xl font-bold"
        >
          Meet the Team
        </Typography>
        <Typography
          variant={'body'}
          className="text-muted-foreground mt-2 text-base"
        >
          The people who built this project
        </Typography>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((developer) => (
          <DeveloperCard
            key={`${developer.name}-${developer.surname}`}
            developer={developer}
          />
        ))}
      </div>
    </div>
  );
}
