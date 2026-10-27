import Image from "next/image"
import { ArrowDown, Banknote, Home, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden py-12 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-white/20 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/80 bg-white/95 p-6 text-center shadow-2xl shadow-blue-950/15 backdrop-blur md:p-8 lg:mx-0 lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-bold text-primary shadow-sm backdrop-blur">
              <span className="size-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
              Vacantes disponibles
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Empaca desde casa con <span className="text-primary">SurtidoraMX</span>
            </h1>

            <p className="mb-8 text-lg font-medium leading-relaxed text-foreground/85 md:text-xl text-balance">
              Organiza y empaca productos como cosméticos, juguetes y accesorios. Nosotros te los llevamos y los recogemos cuando estén listos.
            </p>

            <div className="mb-8 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
              <div className="rounded-2xl border border-white/70 bg-white/90 px-5 py-4 text-center shadow-lg shadow-blue-950/10 sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pago semanal</p>
                <p className="whitespace-nowrap text-2xl font-extrabold tracking-tight text-accent md:text-3xl">$4,000 pesos</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">Pagos puntuales cada semana</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-start">
                <p className="text-sm font-bold text-foreground">¿Te interesa? Postúlate aquí</p>
                <ArrowDown aria-hidden="true" className="size-5 motion-safe:animate-bounce text-primary" />
                <Button asChild size="lg" className="bg-accent px-8 font-bold text-accent-foreground shadow-lg shadow-orange-950/15 hover:bg-accent/90">
                  <Link href="#postularme">Postularme</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Feature icon={Home} title="Desde tu casa" detail="Sin traslados" />
              <Feature icon={Truck} title="Entrega a domicilio" detail="Llevamos y recogemos" />
              <Feature icon={Banknote} title="Pago semanal" detail="$4,000 pesos" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg rounded-[2rem] border border-white/75 bg-white/90 p-4 shadow-2xl shadow-blue-950/20 backdrop-blur sm:p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-blue-100">
              <Image
                src="/images/surtidoramx-empaque.png"
                alt="Mujer de cabello rizado sosteniendo una caja mientras empaca productos en casa"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-center"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-950/55 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-center text-lg font-extrabold text-white drop-shadow sm:text-xl">
                Empaca desde casa, a tu ritmo
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 px-3 pb-2 pt-5 text-center">
              <p className="text-lg font-extrabold text-foreground">¡Forma parte de SurtidoraMX!</p>
              <Button asChild size="lg" className="w-full max-w-sm bg-accent px-8 font-extrabold text-accent-foreground shadow-lg shadow-orange-950/15 hover:bg-accent/90">
                <Link href="#postularme">Postularme</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, detail }: { icon: typeof Home; title: string; detail: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/90 p-3 shadow-sm">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-primary"><Icon aria-hidden="true" className="size-5" /></span>
      <span className="text-left">
        <span className="block text-sm font-extrabold text-foreground">{title}</span>
        <span className="block text-xs font-semibold text-muted-foreground">{detail}</span>
      </span>
    </div>
  )
}
