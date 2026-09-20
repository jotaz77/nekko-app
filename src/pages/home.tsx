import { About } from "../components/landing/about";
import { Benefits } from "../components/landing/benefits";
import { FAQ } from "../components/landing/faq";
import { Footer } from "../components/landing/footer";
import { Hero } from "../components/landing/hero";
import { Products } from "../components/landing/products";
import { Plans } from "../components/landing/plans";

export function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Benefits />
      <Plans />
      <FAQ />
      <Footer />
    </main>
  );
}
