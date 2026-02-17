import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { capitalize } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { Home } from 'lucide-react';

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
      'img/paperback/chip-war/uk/00.webp',
      'img/paperback/chip-war/uk/01.webp',
      'img/paperback/chip-war/uk/02.webp',
      'img/paperback/chip-war/uk/03.webp',
      'img/paperback/chip-war/uk/04.webp',
      'img/paperback/chip-war/uk/05.webp',
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
  book.eng.category[Math.round(Math.random() * book.eng.category.length)];

const BookDetails = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">
                <Home />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                to="/$type"
                params={{ type: book.eng.type }}
              >
                {capitalize(book.eng.type)}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">{randomCategory}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BookDetails;
