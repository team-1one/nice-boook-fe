import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { BookLangSchema, type BookLang } from '@/lib/schemas/book.schema';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { Heart, Home } from 'lucide-react';
import { Fragment, useState } from 'react';

// TODO: remove later soon
const book = {
  eng: {
    id: '5a93f9d0-dc9a-4e58-98cc-55719fe0c3e0',
    type: 'paperback',
    namespaceId: 'chip-war',
    name: "Chip War. The Fight for the World's Most Critical Technology",
    slug: 'chip-war-en-paperback',
    priceRegular: 16.47,
    priceDiscount: 14.81,
    images: ['img/paperback/chip-war/en/00.webp'],
    langAvailable: ['en', 'uk'],
    lang: 'en',
    author: 'Chriss Miller',
    coverType: 'paperback',
    numberOfPages: 464,
    publicationYear: 2023,
    publication: 'Simon & Schuster Ltd',
    format: '130x198x28 mm',
    illustrations: false,
    category: [
      'Foreign Economic Activity and International Relations',
      'World History',
      'International Business',
      'General and World History',
      'Programming',
    ],
    description: [
      "Power in the modern world - military, economic, geopolitical - is built on a foundation of computer chips. America has maintained its lead as a superpower because it has dominated advances in computer chips and all the technology that chips have enabled. (Virtually everything runs on chips: cars, phones, the stock market, even the electric grid.) Now that edge is in danger of slipping, undermined by the naïve assumption that globalising the chip industry and letting players in Taiwan, Korea and Europe take over manufacturing serves America's interests. Currently, as Chip War reveals, China, which spends more on chips than any other product, is pouring billions into a chip-building Manhattan Project to catch up to the US. ",
      "In Chip War economic historian Chris Miller recounts the fascinating sequence of events that led to the United States perfecting chip design, and how faster chips helped defeat the Soviet Union (by rendering the Russians’ arsenal of precision-guided weapons obsolete). The battle to control this industry will shape our future. China spends more money importing chips than buying oil, and they are China's greatest external vulnerability as they are fundamentally reliant on foreign chips. But with 37 per cent of the global supply of chips being made in Taiwan, within easy range of Chinese missiles, the West's fear is that a solution may be close at hand.",
    ],
  },
  ukr: {
    id: '34cc47bd-f445-4518-b800-3b75ab342e95',
    type: 'paperback',
    namespaceId: 'chip-war',
    name: 'Чипова війна. Боротьба за найважливішу технологію у світі',
    slug: 'chip-war-uk-hardcover',
    priceRegular: 13.42,
    priceDiscount: null,
    images: [
      'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/paperback/chip-war/uk/00.webp',
      'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/paperback/chip-war/uk/01.webp',
      'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/paperback/chip-war/uk/02.webp',
      'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/paperback/chip-war/uk/03.webp',
      'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/paperback/chip-war/uk/04.webp',
      'https://cxqrvyjozjyswjemkfhk.supabase.co/storage/v1/object/public/books/img/paperback/chip-war/uk/05.webp',
    ],
    langAvailable: ['en', 'uk'],
    lang: 'uk',
    author: 'Chriss Miller',
    coverType: 'hardcover',
    numberOfPages: 432,
    publicationYear: 2024,
    publication: 'Наш Формат',
    format: '130x198x28 mm',
    illustrations: false,
    category: [
      'Foreign Economic Activity and International Relations',
      'World History',
      'International Business',
      'General and World History',
      'Programming',
    ],
    description: [
      'Мікрочипи — це як нова нафта. Саме від цього дефіцитного ресурсу залежить весь світ. І це не перебільшення: на мікросхемах працює майже все — від мікрохвильовок і смартфонів до ракет і фондового ринку. Та як розвивається індустрія мікрочипів і як вона змінюватиме наше майбутнє?',
      'Кріс Міллер створив не суху технічну оповідь, а захопливу історію про економічні та геополітичні стратегії. Ви поринете у світ глобальних інтриг і технологічних битв, де корпорації та держави ведуть жорстку війну за панування у виробництві мікрочипів. Довідаєтеся, як США здобули основну роль на ринку, як шпигунська мережа ставала секретною зброєю СРСР і чому Тайваню варто остерігатися.',
      'Це книжка про те, як маленькі кремнієві пластини стали ключем до глобального впливу, а також про ризики й можливості війни технологій.',
    ],
  },
};

const randomCategory =
  book.eng.category[Math.floor(Math.random() * book.eng.category.length)];
const images = book.ukr.images;
const langOptions = BookLangSchema.options;

const midBreadcrumbs = [
  {
    label: book.eng.type,
    to: '/bookType/$bookType',
    params: { bookType: book.eng.type },
  },
  {
    label: randomCategory,
    to: '/category/$category',
    params: { category: randomCategory },
  },
];

const BookDetails = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedLang, setSelectedLang] = useState<BookLang>('uk');

  return (
    <article className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-6 md:px-6 lg:px-8">
      <header className="w-full">
        <Breadcrumb className="pb-6">
          <BreadcrumbList className="text-gray-primary flex-nowrap text-sm font-semibold whitespace-nowrap uppercase md:text-base">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">
                  <Home />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            {midBreadcrumbs.map((crumb, index) => (
              <Fragment key={index}>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild>
                    <Link
                      to={crumb.to}
                      params={crumb.params}
                    >
                      {crumb.label}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-secondary hidden md:block" />
              </Fragment>
            ))}

            <BreadcrumbItem className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <BreadcrumbEllipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="uppercase">
                  {midBreadcrumbs.map((crumb, i) => (
                    <DropdownMenuItem
                      key={i}
                      asChild
                    >
                      <Link
                        to={crumb.to}
                        params={crumb.params}
                      >
                        {crumb.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-gray-secondary md:hidden" />

            <BreadcrumbItem className="text-gray-secondary min-w-0">
              <span className="truncate">{book.eng.name}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mb-2 text-4xl leading-tight font-bold wrap-break-word md:text-5xl">
          {book.ukr.name}
        </h1>
        <p className="text-gray-secondary text-lg">{book.ukr.author}</p>
      </header>

      <main className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4 md:flex-row-reverse">
          <AspectRatio
            ratio={1.5}
            className="flex-1 rounded-lg border bg-white p-2 shadow-sm"
          >
            <img
              src={selectedImage}
              alt="Product"
              className="h-full w-full rounded object-contain object-top"
            />
          </AspectRatio>

          <ScrollArea className="h-24 overflow-x-auto md:h-auto md:max-h-130 md:w-28 md:overflow-y-auto">
            <div className="flex gap-3 md:flex-col">
              {images.map((img) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={cn(
                    'h-20 w-16 overflow-hidden rounded-md border-2',
                    selectedImage === img ? 'border-black' : (
                      'border-transparent hover:border-gray-300'
                    ),
                  )}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col gap-6">
          {/* Category */}
          <div>
            <p className="text-gray-secondary mb-1 text-sm">Category</p>
            <Button
              variant="outline"
              className="px-3"
            >
              {randomCategory}
            </Button>
          </div>

          <Separator />

          {/* Language */}
          <div>
            <p className="text-gray-secondary mb-2 text-sm">Select language</p>
            <div className="flex gap-2">
              {langOptions.map((lang) => (
                <Button
                  key={lang}
                  variant={selectedLang === lang ? 'default' : 'outline'}
                  className="w-12"
                  onClick={() => setSelectedLang(lang)}
                >
                  {lang.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          {/* Price Block */}
          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-bold text-black">
              ${book.eng.priceDiscount}
            </span>
            <span className="text-gray-secondary text-xl line-through">
              ${book.eng.priceRegular}
            </span>
          </div>

          {/* Buy + Wish */}
          <div className="flex gap-4">
            <Button className="flex-1">Add to cart</Button>
            <Button variant="outline">
              <Heart />
            </Button>
          </div>

          {/* SHORT DESCRIPTION */}
          <div className="flex flex-col gap-2 text-sm">
            {[
              { label: 'Author', value: book.ukr.author },
              { label: 'Cover type', value: book.ukr.coverType },
              { label: 'Number of pages', value: book.ukr.numberOfPages },
              { label: 'Year of publication', value: book.ukr.publicationYear },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="flex justify-between py-1">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ABOUT + CHARACTERISTICS */}
      <section className="grid grid-cols-1 gap-16 pt-8 lg:grid-cols-2">
        <article className="max-w-prose">
          <h2 className="mb-2 text-3xl font-bold">About</h2>
          <p className="mb-4 font-semibold">{book.ukr.name}</p>
          <p className="leading-relaxed text-gray-800">
            {book.ukr.description}
          </p>
        </article>

        <article className="flex flex-col gap-2 text-sm capitalize">
          <h2 className="mb-4 text-3xl font-bold">Characteristics</h2>

          {[
            { label: 'Author', value: book.ukr.author },
            { label: 'Cover type', value: book.ukr.coverType },
            { label: 'Number of pages', value: book.ukr.numberOfPages },
            { label: 'Year of publication', value: book.ukr.publicationYear },
            { label: 'Publication', value: book.ukr.publication },
            { label: 'Format', value: book.ukr.format },
            { label: 'Language', value: book.ukr.lang },
            {
              label: 'Illustrations',
              value: book.ukr.illustrations ? 'Yes' : 'No illustrations',
            },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="flex justify-between py-1">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <Separator />
            </div>
          ))}
        </article>
      </section>
    </article>
  );
};

export default BookDetails;
