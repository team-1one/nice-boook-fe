import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { BookLangSchema, type BookLang } from '@/lib/schemas/book.schema';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { Heart, Home } from 'lucide-react';
import { useState } from 'react';

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

const breadcrumbs = [
  { label: <Home />, to: '/', params: {} },
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
    <div className="flex flex-col items-center-safe">
      <header className="w-fit">
        <Breadcrumb>
          <BreadcrumbList className="text-base text-gray-primary font-bold uppercase">
            {breadcrumbs.map((crumb) => (
              <>
                <BreadcrumbItem className={cn('max-md:hidden')}>
                  <BreadcrumbLink asChild>
                    <Link
                      to={crumb.to}
                      params={crumb.params}
                    >
                      {crumb.label}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-secondary" />
              </>
            ))}

            <BreadcrumbItem className="text-gray-secondary">
              {book.eng.name}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-5xl font-bold">{book.ukr.name}</h1>
        <p>{book.ukr.author}</p>
      </header>
      <div className="flex">
        <div className="grid grid-cols-[80px_1fr] gap-4    max-w-2xl">
          <ScrollArea className="h-125 pr-3">
            <div className="flex flex-col gap-3">
              {images.map((img) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(img)}
                  className={cn(
                    'overflow-hidden rounded-md border-2 transition-all',
                    selectedImage === img ? 'border-black' : (
                      'border-transparent hover:border-gray-200'
                    ),
                  )}
                >
                  <AspectRatio ratio={1 / 1.4}>
                    <img
                      src={img}
                      alt="thumbnail"
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </button>
              ))}
            </div>
          </ScrollArea>

          <div className="h-4/5 relative rounded-lg border-2 border-blue-400 overflow-hidden">
            <AspectRatio ratio={1 / 1.4}>
              <ScrollArea className="h-full">
                <img
                  src={selectedImage}
                  alt="product overview"
                  className="object-contain"
                />
              </ScrollArea>
            </AspectRatio>
          </div>
        </div>

        <article className="w-2/5 flex flex-col gap-4">
          <span>Category</span>
          <Button
            variant="outline"
            className="w-fit"
          >
            {randomCategory}
          </Button>
          <Separator />
          <span>Select Language</span>
          <div className="Lang_Options flex gap-2">
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
          <Separator />
          <div className="Prices flex gap-2 text-2xl font-bold">
            <span>&#xff04;{book.eng.priceDiscount}</span>
            <span className="line-through text-gray-secondary">
              &#xff04;{book.eng.priceRegular}
            </span>
          </div>
          <div className="Purchase_Buttons flex gap-2">
            <Button className="self-start flex-1">Add to cart</Button>
            <Button variant="outline">
              <Heart />
            </Button>
          </div>
          <div className="Short_Descr flex flex-col capitalize">
            <div className="flex justify-between">
              <span>Author</span>
              <span>{book.ukr.author}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Cover type</span>
              <span>{book.ukr.coverType}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Number of Pages</span>
              <span>{book.ukr.numberOfPages}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Year of publication</span>
              <span>{book.ukr.publicationYear}</span>
            </div>
          </div>
        </article>
      </div>
      <div className="flex justify-around">
        <article>
          <h2 className="text-3xl font-bold">About</h2>
          <p className="font-bold">{book.ukr.name}</p>
          <p>{book.ukr.description}</p>
        </article>
        <article className="Descr flex flex-col capitalize">
          <h2 className="text-3xl font-bold">Characteristics</h2>
          <div className="flex justify-between">
            <span>Author</span>
            <span>{book.ukr.author}</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span>Cover type</span>
            <span>{book.ukr.coverType}</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span>Number of Pages</span>
            <span>{book.ukr.numberOfPages}</span>
          </div>
          <Separator />
          <div className="flex justify-between">
            <span>Year of publication</span>
            <span>{book.ukr.publicationYear}</span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BookDetails;
