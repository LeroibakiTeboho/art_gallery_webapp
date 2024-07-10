import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero
        heading="Discover the Masterpieces"
        message="Explore a curated collection of exquisite art from taleted artists around the world. Find your inspiration, embrace creativity, and brinf home your next masterpiece."
      />
      <Gallery />
    </div>
  );
}
