import Hero from "@/components/hero/Hero";
import { getData } from "@/fetch";
import HeroProducts from "@/components/heroProducts/HeroProducts";
import Products from "@/components/products/Products";
import BestProduct from "@/components/bestProduct/BestProduct";
import Benefits from "@/components/benefits/Benefits";
import News from "@/components/news/News";
import FeatProducts from "@/components/featProducts/FeatProducts";

export default async function Home() {
  let data = await getData('/products')
  let category = await getData('/products/categories')

  return (
    <main className="home-page">
      <Hero/>
      <HeroProducts/>
      <Products data={data} category={category}/>
      <BestProduct/>
      <Benefits/>
      <News/>
      <FeatProducts data={data}/>
    </main>
  );
}