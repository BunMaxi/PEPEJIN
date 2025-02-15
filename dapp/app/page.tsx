import Link from "next/link"
import Image from "next/image"
import { MoonIcon, SunIcon, Sword } from "lucide-react"
import GalleryImage from "@/components/gallery-image"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/jp-bg.webp"
        alt="Japanese landscape with mountains and cherry blossoms"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-30"
      />
      <div className="relative z-10">
        <header className="container mx-auto p-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">PEPE JIN</h1>
            <ul className="flex space-x-4">
              <li>
                <Link href="#story" className="text-white hover:text-green-300 transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link href="#meme-map" className="text-white hover:text-green-300 transition-colors">
                  Meme Map
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto p-4 text-white">
          <section id="hero" className="text-center py-20 items-center justify-center flex flex-col">
            <Image src="/4.jpg" width={300} height={300} alt="PEPE JIN" className="rounded-md mb-10" />
            <h2 className="text-5xl font-bold mb-4">PEPE JIN: The Frog Ronin</h2>
            <p className="text-xl mb-8">Ribbit in Japanese, Hop like a Samurai!</p>
            <div className="flex justify-center space-x-4">
              <MoonIcon className="w-12 h-12 text-green-300" />
              <Sword className="w-12 h-12 text-green-300" />
              <SunIcon className="w-12 h-12 text-green-300" />
            </div>
          </section>

          <section id="story" className="mb-20">
            <h3 className="text-3xl font-bold mb-4">The Tale of PEPE JIN</h3>
            <div className="space-y-4 bg-green-900 bg-opacity-75 p-6 rounded-lg">
              <p>
                In the land of the Rising Sun, where sushi rolls and meme scrolls collide, a peculiar tadpole was born
                in a sacred pond. His name was PEPE JIN, destined to become the most unlikely ronin samurai in all of
                Japan (and possibly the internet).
              </p>
              <p>
                From the moment he sprouted legs, it was clear that PEPE JIN was no ordinary frog. While other
                amphibians were content with catching flies, PEPE JIN felt the call of the warrior&apos;s path. He would
                spend hours watching samurai anime, mimicking their moves with a chopstick as his sword.
              </p>
              <p>
                As PEPE JIN grew, so did his meme power and determination. He fashioned armor from discarded bento boxes
                and trained relentlessly, often to the amusement and confusion of both humans and animals alike. But
                PEPE JIN cared not for their laughter, for in his heart, he knew he was born to be the dankest warrior
                meme ever created.
              </p>
              <p>
                One fateful day, when a group of normie bandits threatened his village, PEPE JIN leaped into action.
                With a series of graceful hops and precise sword strikes (using a blade comically oversized for his
                amphibian frame), he single-handedly defeated the marauders with the power of cringe and secondhand
                embarrassment. The villagers, who once mocked him, now cheered for their unlikely hero and shared his
                epic battle on TikTok.
              </p>
              <p>
                From that day forward, PEPE JIN roamed the land as a true ronin, righting wrongs and defending the weak
                (but mostly just photobombing tourist pictures and creating dank memes). His tale spread far and wide,
                inspiring both laughter and confusion. For in PEPE JIN, the world saw that even the most unexpected
                among us can rise to become legendary memes.
              </p>
            </div>
          </section>

          <section id="gallery" className="mb-20">
            <h3 className="text-3xl font-bold mb-4">PEPE JIN&apos;s Memeable Moments</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <GalleryImage src="/1.jpg" alt="PEPE JIN training with a chopstick katana" />
              <GalleryImage src="/2.jpg" alt="PEPE JIN meditating on a floating sushi roll" />
              <GalleryImage src="/3.jpg" alt="PEPE JIN's epic battle against a rubber duck" />
              <GalleryImage src="/7.jpg" alt="PEPE JIN hitchhiking across Japan on a Roomba" />
              <GalleryImage src="/5.jpg" alt="PEPE JIN studying ancient meme scrolls" />
              <GalleryImage src="/6.jpg" alt="PEPE JIN's destiny revealed by a fortune cookie" />
            </div>
          </section>

          <section id="meme-map" className="mb-20">
            <h3 className="text-3xl font-bold mb-4">The Great Meme Map</h3>
            <div className="space-y-8">
              <div className="bg-green-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Phase 1: The Tadpole Awakens</h4>
                <ul className="list-disc list-inside">
                  <li>Master the art of the perfectly timed &quot;ribbit&quot;</li>
                  <li>Achieve 1,000 followers on FrogTok</li>
                  <li>Successfully photobomb 50 tourist pictures at Mount Fuji</li>
                </ul>
              </div>
              <div className="bg-green-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Phase 2: Samurai Training Montage</h4>
                <ul className="list-disc list-inside">
                  <li>Learn to slice a fly mid-air with a miniature katana</li>
                  <li>Master the &quot;crane kick&quot; from Karate Kid (but make it frog-style)</li>
                  <li>Develop a signature move called &quot;The Hopposite Direction"</li>
                </ul>
              </div>
              <div className="bg-green-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Phase 3: The Meme Crusade</h4>
                <ul className="list-disc list-inside">
                  <li>Become a playable character in &quot;Super Smash Frogs Ultimate&quot;</li>
                  <li>Start a viral dance trend called the &quot;Samurai Shuffle&quot;</li>
                  <li>Convince at least one human to cosplay as PEPE JIN</li>
                </ul>
              </div>
              <div className="bg-green-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Phase 4: Legendary Amphibian Status</h4>
                <ul className="list-disc list-inside">
                  <li>Achieve enlightenment (or at least pretend to for the 'gram)</li>
                  <li>Open a chain of meditation retreats called &quot;Zen and the Art of Frog Maintenance&quot;</li>
                  <li>Retire to a lily pad, but continue to drop wisdom in the form of fortune cookie messages</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-green-900 bg-opacity-75 py-4 text-center text-white">
          <p>&copy; 2025 PEPE JIN Meme Dojo. All rights reserved (but feel free to share this ridiculousness).</p>
        </footer>
      </div>
    </div>
  )
}

