import { createFileRoute } from '@tanstack/react-router';
import { Typography } from '@/components/ui/Typography';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/rights')({
  component: RouteComponent,
});

const CURRENT_YEAR = new Date().getFullYear();
const COMPANY_NAME = 'Nice Book';

function RouteComponent() {
  const { t } = useTranslation('rights');
  const sections = t('sections', {
    year: CURRENT_YEAR,
    company: COMPANY_NAME,
    returnObjects: true,
  }) as {
    title: string;
    body: string;
  }[];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6">
        <Typography variant="h1">{t('heading')}</Typography>
      </div>

      <Typography
        variant="body"
        color="secondary"
        className="mb-8"
      >
        {t('updated', { year: CURRENT_YEAR })}
      </Typography>

      <div className="flex flex-col gap-8">
        {sections.map(
          ({ title, body }: { title: string; body: string }, index: number) => (
            <div key={title}>
              {index !== 0 && <Separator className="mb-8" />}
              <Typography
                variant="h3"
                className="mb-3"
              >
                {title}
              </Typography>
              <Typography
                variant="body"
                color="secondary"
              >
                {body}
              </Typography>
            </div>
          ),
        )}
      </div>
    </main>
  );
}
