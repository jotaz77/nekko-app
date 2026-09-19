import { Benefits } from "../components/landing/benefits";
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
    </main>
  );
}
