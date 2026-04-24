"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const products = [
  {
    name: "T-Shirt",
    href: "https://www.teepublic.com/t-shirt/88287964-moths-flew-in-the-room?store_id=4359961",
    image: "/images/tshirt-1.webp",
  },
  {
    name: "Hoodie",
    href: "https://www.teepublic.com/hoodie/88287964-moths-flew-in-the-room",
    image: "/images/hoodie-1.webp",
  },
  {
    name: "Sweater",
    href: "https://www.teepublic.com/crewneck-sweatshirt/88287964-moths-flew-in-the-room",
    image: "/images/sweater-1.webp",
  },
  {
    name: "Sticker",
    href: "https://www.teepublic.com/sticker/88287964-moths-flew-in-the-room",
    image: "/images/sticker-1.webp",
  },
  {
    name: "Magnet",
    href: "https://www.teepublic.com/magnet/88287964-moths-flew-in-the-room",
    image: "/images/magnet-1.webp",
  },
  {
    name: "Phone-Case",
    href: "https://www.teepublic.com/phone-case/88287964-moths-flew-in-the-room",
    image: "/images/phone-case-1.webp",
  },
  {
    name: "Pin",
    href: "https://www.teepublic.com/pin/88287964-moths-flew-in-the-room",
    image: "/images/ping-1.webp",
  },
  {
    name: "Tote",
    href: "https://www.teepublic.com/tote/88287964-moths-flew-in-the-room",
    image: "/images/tote-1.webp",
  },
  {
    name: "Wall-Art",
    href: "https://www.teepublic.com/poster-and-art/88287964-moths-flew-in-the-room",
    image: "/images/wall-art-1.webp",
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

const gridReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOut,
    },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="fixed inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/bg-video-compressed.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,10,0.48)_0%,rgba(14,12,10,0.74)_40%,rgba(14,12,10,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,163,58,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(210,163,58,0.14),transparent_28%)]" />
      </div>

      <div className="relative z-10">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="border-b border-white/10 bg-black/25 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl uppercase tracking-[0.18em] text-accent sm:text-4xl">
                A Brand Mustard
              </p>
              <p className="text-xs uppercase tracking-[0.34em] text-foreground/75 sm:text-sm">
                Design-driven. Skate-rooted.
              </p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.24em] text-foreground/80">
              <a href="#about" className="hover:text-accent">
                About
              </a>
              <a href="#drop" className="hover:text-accent">
                Drop
              </a>
              <a href="#contact" className="hover:text-accent">
                Contact
              </a>
            </nav>
          </div>
        </motion.header>

        <section className="mx-auto flex min-h-[calc(100vh-89px)] max-w-7xl items-end px-5 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionReveal}
            className="max-w-4xl"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-accent/90">
              First Release
            </p>
            <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-6xl uppercase leading-[0.86] tracking-[0.04em] text-foreground sm:text-8xl lg:text-[10rem]">
              A Brand Mustard
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-foreground/88 sm:text-xl">
              We don’t chase trends—we create what feels right and let it
              speak for itself.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#drop"
                className="inline-flex items-center justify-center rounded-full border border-accent bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-black hover:-translate-y-0.5 hover:bg-[#e0b24b]"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-foreground hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                View Drop
              </a>
            </div>
          </motion.div>
        </section>

        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
          <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionReveal}
            className="grid gap-8 border border-[var(--border)] bg-[var(--panel)] p-6 backdrop-blur-md md:grid-cols-[1.1fr_0.9fr] lg:p-10"
          >
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.34em] text-accent">
                About
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl uppercase tracking-[0.08em] sm:text-5xl">
                Built To Move
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/84 sm:text-lg">
                A Brand Mustard is a design-driven skate brand built on
                creativity and individuality. We don’t chase trends—we create
                what feels right and let it speak for itself. Every piece starts
                with a vision and ends with something you can wear your own
                way—on the board, in the street, wherever you are. If you get
                it, you get it.
              </p>
            </div>
            <div className="grid gap-6 self-end md:pl-6">
              <div className="border-t border-white/15 pt-5">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">
                  Mission
                </p>
                <p className="mt-3 text-xl leading-9 text-foreground">
                  Create freely.
                  <br />
                  Stay original.
                  <br />
                  Push everything forward.
                </p>
              </div>
              <div className="border-t border-white/15 pt-5">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">
                  Description
                </p>
                <p className="mt-3 text-base leading-8 text-foreground/84">
                  The first release from A Brand Mustard. One design, carried
                  across pieces that keep it simple and intentional. This drop
                  sets the tone—clean, bold, and built to move.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="drop"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionReveal}
            className="mt-16"
          >
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.34em] text-accent">
                  Collection
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl uppercase tracking-[0.08em] sm:text-5xl">
                  Moths Flew In The Room
                </h2>
              </div>
              <p className="max-w-xl text-sm uppercase tracking-[0.24em] text-foreground/70">
                One design. Nine pieces. Direct links to the full drop.
              </p>
            </div>

            <motion.div
              variants={gridReveal}
              className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
            >
              {products.map((product) => (
                <motion.a
                  key={product.name}
                  variants={cardReveal}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden border border-white/12 bg-[rgba(11,10,8,0.72)] backdrop-blur-sm"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(8,8,8,0.74)_100%)]" />
                  </div>
                  <div className="flex items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-[0.08em] text-foreground">
                        {product.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.26em] text-foreground/58">
                        TeePublic
                      </p>
                    </div>
                    <span className="text-sm uppercase tracking-[0.22em] text-accent transition group-hover:translate-x-1">
                      View
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={sectionReveal}
            className="mt-16 border border-[var(--border)] bg-[rgba(210,163,58,0.1)] p-6 backdrop-blur-md lg:p-10"
          >
            <p className="text-sm uppercase tracking-[0.34em] text-accent">
              Contact
            </p>
            <div className="mt-4 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-4xl uppercase tracking-[0.08em] sm:text-5xl">
                  Questions, collabs, or just reach out.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/82 sm:text-lg">
                  We’re always open to creative ideas.
                </p>
              </div>
              <p className="inline-flex items-center justify-center rounded-full border border-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Open For Creative Ideas
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
