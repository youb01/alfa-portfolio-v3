import React from "react";
import { AboutContent } from "./AboutContent";
import { SpaceBackground } from "../../ui/backgrounds/SpaceBackground";

const animation = {
  floatingDotsCount: 35,
};

/**
 * About Section Component
 * Main container for the about page with background effects
 */
export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Main content wrapper with proper z-index */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* About content with all subsections */}
        <AboutContent />
      </div>

      {/* Background layer - below content */}
      <div className="absolute inset-0 z-0">
        {/* Universal space background with prominent intensity */}
        <SpaceBackground intensity="prominent" particleCount={8} showGlows={true} showOrbits={true} />
      </div>
    </section>
  );
};
