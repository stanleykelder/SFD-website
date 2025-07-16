import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import { ShadowedImage } from '@/components/ui/shadowed-image'
import { generateMetadata, defaultViewport } from '@/config/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Over Stanley',
  description: 'Maak kennis met Stanley: innovatiecoach met een passie voor het creëren van betekenisvolle impact door mensgerichte innovatie.',
  keywords: ['innovatiecoach', 'innovatie', 'Stanley', 'over Stanley', 'innovatie expert'],
  images: [
    {
      url: '/images/stanley-presenteert.jpg',
      width: 800,
      height: 1067,
      alt: 'Stanley presenteert',
    },
  ],
  canonical: 'https://stanleyinnovation.nl/over-stanley',
})

// Add viewport export
export const viewport = defaultViewport

// Content configuration for easier editing
const content = {
  hero: {
    image: {
      src: '/images/stanley-presenteert.jpg',
      alt: 'Stanley',
      width: 600,
      height: 800,
    },
    title: 'Dit is Stanley',
    introduction: 'Stanley is geboren en opgegroeid op Curacao, waar hij van jongs af aan genoot van alle verschillende culturele invloeden. Na de middelbare school verhuisde Stanley naar Nederland, waar hij in Amsterdam studeerde. Zijn passie voor andere culturen bracht hem tijdens zijn studie in Costa Rica, Madrid en Helsinki. Het omarmen van de diversiteit en het inleven en begrijpen van anderen heeft hij meegenomen naar zijn gebruikersgerichte aanpak van innovatie.'
  },
  
  sections: [
    {
      title: 'Wat innovatie voor mij betekent',
      paragraphs: [
        'Innovatie gaat over mensen. Mijn grote doel is om zo veel mogelijk mensen te helpen. Dat kan op veel verschillende manieren, maar om echt te kunnen helpen moet je eerst goed begrijpen wat er nodig is. Dit vereist dat je luistert naar je gebruikers en jezelf durft uit te dagen vooroordelen opzij te zetten en buiten je eigen kaders te denken.',
        'We leven in een wereld waar keuzes veelal worden gemaakt op basis van winstmaximalisatie. Grote multinationals die onder het mom van innovatie op zoek zijn naar nog meer geld. Vaak genoeg gaat dit juist te koste van de mensen die het hardst hulp nodig hebben. ',
      ]
    },
    {
      title: 'Mijn pad tot innovatiecoach',
      paragraphs: [
        'Naast mijn passie voor mensen en culturen heb ik ook mijn hele leven al een fascinatie voor nieuwe ontwikkelingen en ondernemerschap. In mijn tussenjaar organiseerde ik \’Wie is de Mol\’-feestjes via Marktplaats. Vervolgens koos ik voor de interdisciplinaire studie Bèta-gamma, met de richting Natuurkunde. Hierin vond ik vooral alle ontwikkelingen rondom quantum computers heel interessant. Als Master mocht ik deelnemen aan het Europese programma Computer Science and Innovation, met de specialisatie Human-Computer Interaction and Design. Hier leerde ik voor het eerst concreet mijn kennis en passie toepassen in innovatie.',
        'Tijdens mijn studie richtte ik savethecity.app op met vrienden. Niet alleen konden we zo een hele leuke app maken voor onder andere Gemeente Dordrecht en gemeente Hardenberg, ik kon meteen alles wat ik leerde over innovatie op mijn studie in de praktijk brengen. Na mijn studie ben ik bij KPN gaan werken als Scrum Master. Als Scrum Master in zo’n grote organisatie leerde ik snel hoe belangrijk het is om goed samen te blijven werken en te blijven luisteren naar alle belangen die spelen. Om nog meer maatschappelijke impact te kunnen maken met innoveren ben ik hierna voor mezelf begonnen met Stanley Innovation. Als innovatiebegeleider of innovatiecoach help ik teams om een efficiënte manier van werken op te zetten, gebruikers-gericht en kort-cyclisch. Dit doe ik onder andere door het geven van trainingen en workshops, het faciliteren van brainstormsessies en met het inrichten van een Kanban-bord en standups.'
      ]
    },
    {
      title: 'Mijn leven buiten innovatie',
      paragraphs: [
        'Naast de innovatie ben ik graag buiten. Ik hou ervan om te (hard)lopen door het bos en het bos te zien veranderen door de seizoenen heen. Ik ben ook dol op sneeuw en hoop ooit nog een winter door te brengen op een husky-farm in Lapland. Daarnaast houd ik van eten en van koken. Als ik zelf kook doe ik dat het liefst met verse ingrediënten uit mijn eigen tuin. Als ik uit eten ga dan probeer ik graag nieuwe dingen uit, ook dat is een goede manier van een andere cultuur ontdekken. Al eet ik ook met veel liefde heel vaak Indiaas!'
      ]
    }
  ],
  
  ctaButton: {
    text: 'Neem contact op',
    link: '/contact'
  }
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 items-start">
              <div className="flex justify-center col-span-1">
                <ShadowedImage
                  src={content.hero.image.src}
                  alt={content.hero.image.alt}
                  width={content.hero.image.width}
                  height={content.hero.image.height}
                  priority
                  size="small"
                  containerClassName="w-full max-w-[240px] md:max-w-full"
                />
              </div>
              
              <div className="col-span-1 md:col-span-3">
                <Title as="h1" className="mb-6">
                  {content.hero.title}
                </Title>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-6 mt-6">
                    {content.hero.introduction}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="mt-12 space-y-8">
              {content.sections.map((section, index) => (
                <div key={index} className="prose prose-lg max-w-none">
                  <Title as="h2" className="mb-6">
                    {section.title}
                  </Title>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p 
                      key={pIndex} 
                      className={`text-gray-600 ${pIndex === 0 ? 'mt-6' : 'mt-4'}`}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              ))}

              {/* CTA Button */}
              <div className="mt-12 flex justify-center">
                <Button asChild>
                  <Link href={content.ctaButton.link}>
                    {content.ctaButton.text}
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
} 