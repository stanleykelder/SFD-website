import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Over Stanley - Stanley Innovation',
  description: 'Maak kennis met Stanley: innovatiecoach met een passie voor het creëren van betekenisvolle impact door mensgerichte innovatie.',
}

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Stanley"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Hey, ik ben Stanley! 👋
                </h1>
                
                <div className="prose prose-lg">
                  <p className="text-lg text-gray-600 mb-6">
                    Als innovatiecoach help ik organisaties om écht impact te maken. Niet door fancy technologie of hippe buzzwords, maar door mensen centraal te stellen. Want daar geloof ik in: de beste innovaties ontstaan wanneer we echt begrijpen wat mensen nodig hebben.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mijn kijk op innovatie</h2>
                <p className="text-gray-600">
                  Te vaak zie ik dat innovatie wordt verward met digitalisering of efficiency. Maar weet je wat écht werkt? De werkvloer op gaan. Praten met mensen. Begrijpen waar ze tegenaan lopen. En dan samen - ja, écht samen - oplossingen ontwikkelen die het verschil maken.
                </p>
                <p className="text-gray-600 mt-4">
                  Mijn aanpak? Die is simpel maar effectief. Ik breng de mensen die het probleem ervaren (de échte experts) samen met mensen die weten hoe je oplossingen bouwt. Deze combinatie van praktijkervaring en innovatie-expertise leidt tot resultaten waar iedereen blij van wordt.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ervaring die ertoe doet</h2>
                <p className="text-gray-600">
                  Mijn reis begon op Curaçao, waar ik leerde hoe belangrijk het is om verschillende perspectieven te begrijpen. Via studies in Madrid en Helsinki (Master in Computer Science and Innovation) en werk als Scrum Master bij KPN heb ik geleerd hoe je innovatie praktisch en effectief maakt.
                </p>
                <p className="text-gray-600 mt-4">
                  Nu, als zelfstandig innovatiecoach, help ik organisaties zoals Rijkswaterstaat en Gemeente Dordrecht om hun innovatie-uitdagingen aan te pakken. Niet met dikke rapporten, maar met concrete actie en meetbare resultaten.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">En als ik niet aan het innoveren ben...</h2>
                <p className="text-gray-600">
                  Vind je me in de natuur, in de keuken (koken is ook een vorm van innovatie, toch?), of op ontdekkingsreis in nieuwe culturen. Die nieuwsgierigheid en creativiteit neem ik ook mee in mijn werk. Oh, en samen met vrienden heb ik <a href="https://savethecity.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">savethecity.app</a> ontwikkeld - want innovatie is het leukst als je het samen doet!
                </p>
              </div>

              <div className="mt-12 flex justify-center">
                <Button asChild>
                  <Link href="/contact">
                    Zullen we kennismaken?
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