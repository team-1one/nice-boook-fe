import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Github, Linkedin, type LucideIcon } from 'lucide-react';
import type { Developer } from '@/lib/schemas/contact.schema';
import { Typography } from '@/components/ui/Typography';
import { type ComponentProps, useState } from 'react';
import { cn } from '@/lib/utils';

interface DeveloperCardProps {
  cardProps?: ComponentProps<typeof Card>;
  developer: Developer;
}

interface DeveloperAvatarProps {
  readonly name: string;
  readonly surname: string;
  readonly avatarUrl?: string | null;
}

function DeveloperAvatar({ name, surname, avatarUrl }: DeveloperAvatarProps) {
  const [imgError, setImgError] = useState(false);
  const initials = `${name[0] ?? '?'}${surname[0] ?? '?'}`.toUpperCase();
  const showImage = avatarUrl && !imgError;

  return (
    <div className="bg-primary/10 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full">
      {showImage ?
        <img
          src={avatarUrl}
          alt={`${name} ${surname}`}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      : <span className="text-primary text-2xl font-bold">{initials}</span>}
    </div>
  );
}

interface SocialLinkProps {
  readonly href: string;
  readonly icon: LucideIcon;
  readonly label: string;
  readonly ariaLabel: string;
}

function SocialLink({ href, icon: Icon, label, ariaLabel }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-muted-foreground hover:text-primary flex items-center gap-1.5 text-sm transition-colors"
    >
      <Icon size={16} />
      {label}
    </a>
  );
}

export const DeveloperCard = ({ developer, cardProps }: DeveloperCardProps) => {
  const {
    name,
    surname,
    role,
    contributions,
    linkedin,
    github,
    tagline,
    avatar_url,
  } = developer;

  const { className: cardClassName, ...restCardProps } = cardProps ?? {};

  const socials = [
    { href: linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: github, icon: Github, label: 'GitHub' },
  ].filter((s): s is { href: string; icon: LucideIcon; label: string } =>
    Boolean(s.href),
  );

  return (
    <Card
      {...restCardProps}
      className={cn('flex flex-col', cardClassName)}
    >
      <div className="flex items-center gap-4 px-6">
        <DeveloperAvatar
          name={name}
          surname={surname}
          avatarUrl={avatar_url}
        />

        <div className="space-y-0.5">
          <Typography
            variant={'body'}
            className="text-lg leading-tight font-semibold"
          >
            {name} {surname}
          </Typography>
          <Typography
            variant={'body'}
            className="text-primary text-sm font-medium"
          >
            {role}
          </Typography>
          {tagline && (
            <Typography
              variant={'body'}
              className="text-muted-foreground text-xs"
            >
              {tagline}
            </Typography>
          )}
        </div>
      </div>

      <CardContent className="flex-1">
        <Accordion
          type="single"
          collapsible
          defaultValue="contributions"
        >
          <AccordionItem value="contributions">
            <AccordionTrigger className="text-xs font-semibold tracking-wide uppercase hover:no-underline">
              Contributions
            </AccordionTrigger>
            <AccordionContent>
              {contributions.length === 0 ?
                <Typography
                  variant={'body'}
                  className="text-muted-foreground text-sm"
                >
                  —
                </Typography>
              : <ul className="space-y-1.5">
                  {contributions.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="text-muted-foreground flex items-start gap-2 text-sm"
                    >
                      <span className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              }
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>

      <CardFooter className="justify-center gap-6 border-t pt-4">
        {socials.length > 0 ?
          socials.map(({ href, icon, label }) => (
            <SocialLink
              key={label}
              href={href}
              icon={icon}
              label={label}
              ariaLabel={`${name} ${surname} on ${label}`}
            />
          ))
        : <Typography
            variant={'body'}
            className="text-muted-foreground text-sm"
          >
            No links provided
          </Typography>
        }
      </CardFooter>
    </Card>
  );
};
