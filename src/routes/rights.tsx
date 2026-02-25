import {
  ButtonGroup,
  ButtonGroupSeparator,
} from '@/components/ui/button-group';
import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Typography } from '@/components/ui/Typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/rights')({
  component: RouteComponent,
});

// TODO: Use i18n library for this, but for visual purposes, this is enough for now.
type Lang = 'en' | 'uk';

const CURRENT_YEAR = new Date().getFullYear();
const SITE_NAME = 'NiceBook';

const content: Record<
  Lang,
  {
    heading: string;
    updated: string;
    sections: { title: string; body: string }[];
  }
> = {
  en: {
    heading: 'Rights & Legal',
    updated: `Last updated: ${CURRENT_YEAR}`,
    sections: [
      {
        title: 'Copyright Notice',
        body: `© ${CURRENT_YEAR} ${SITE_NAME}. All rights reserved. All content on this website — including text, images, graphics, logos, and book cover art — is the property of ${SITE_NAME} or its content suppliers and is protected by applicable copyright law.`,
      },
      {
        title: 'Intellectual Property',
        body: `Book titles, authors, cover images, and descriptions are the intellectual property of their respective publishers and authors. ${SITE_NAME} displays this content under license or for informational purposes only. Unauthorized reproduction or distribution of any materials from this site is strictly prohibited.`,
      },
      {
        title: 'Terms of Use',
        body: `By accessing and using this website, you agree not to reproduce, duplicate, copy, sell, or exploit any portion of the service or its content for commercial purposes without the express written permission of ${SITE_NAME}. Personal, non-commercial use is permitted provided all copyright and proprietary notices are retained.`,
      },
      {
        title: 'Disclaimer',
        body: `${SITE_NAME} makes no warranties, expressed or implied, regarding the accuracy, completeness, or fitness for a particular purpose of the information on this site. Prices and availability are subject to change without notice.`,
      },
      {
        title: 'Contact',
        body: `If you believe any content on this site infringes your copyright or intellectual property rights, or if you have questions about permitted use, please reach out via the Contacts page.`,
      },
    ],
  },
  uk: {
    heading: 'Права та правова інформація',
    updated: `Останнє оновлення: ${CURRENT_YEAR}`,
    sections: [
      {
        title: 'Авторські права',
        body: `© ${CURRENT_YEAR} ${SITE_NAME}. Усі права захищені. Весь вміст цього вебсайту — включаючи тексти, зображення, графіку, логотипи та обкладинки книг — є власністю ${SITE_NAME} або її постачальників контенту й захищений відповідним законодавством про авторське право.`,
      },
      {
        title: 'Інтелектуальна власність',
        body: `Назви книг, імена авторів, зображення обкладинок та описи є інтелектуальною власністю відповідних видавців та авторів. ${SITE_NAME} відображає цей вміст на підставі ліцензії або виключно в інформаційних цілях. Несанкціоноване відтворення або розповсюдження будь-яких матеріалів із цього сайту суворо заборонено.`,
      },
      {
        title: 'Умови використання',
        body: `Отримуючи доступ до цього вебсайту та використовуючи його, ви погоджуєтеся не відтворювати, не копіювати, не продавати та не використовувати будь-яку частину сервісу чи його вміст у комерційних цілях без письмового дозволу ${SITE_NAME}. Особисте некомерційне використання дозволено за умови збереження всіх повідомлень про авторські права.`,
      },
      {
        title: 'Відмова від відповідальності',
        body: `${SITE_NAME} не надає жодних гарантій, явних чи неявних, щодо точності, повноти або придатності інформації на цьому сайті для будь-яких цілей. Ціни та наявність товарів можуть змінюватися без попереднього повідомлення.`,
      },
      {
        title: 'Контакти',
        body: `Якщо ви вважаєте, що будь-який вміст на цьому сайті порушує ваші авторські або суміжні права, або якщо у вас виникли запитання щодо дозволеного використання, будь ласка, зверніться до нас через сторінку Контактів.`,
      },
    ],
  },
};

function RouteComponent() {
  const [lang, setLang] = useState<Lang>('en');
  const { heading, updated, sections } = content[lang];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6 flex items-start justify-between gap-4">
        <Typography variant="h1">{heading}</Typography>

        <ButtonGroup className="shrink-0">
          <Button
            variant={lang === 'en' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLang('en')}
          >
            EN
          </Button>
          <ButtonGroupSeparator />
          <Button
            variant={lang === 'uk' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLang('uk')}
          >
            UA
          </Button>
        </ButtonGroup>
      </div>

      <Typography
        variant="body"
        color="secondary"
        className="mb-8"
      >
        {updated}
      </Typography>

      <div className="flex flex-col gap-8">
        {sections.map(({ title, body }, index) => (
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
        ))}
      </div>
    </main>
  );
}
