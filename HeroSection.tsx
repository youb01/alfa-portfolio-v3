import SpaceBackground from "../../ui/backgrounds/SpaceBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <SpaceBackground intensity="subtle" />
      
      <div className="container mx-auto px-4">
        {/* Main content container */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building exceptional digital experiences
          </p>
        </div>
      </div>
    </section>
  );
}
