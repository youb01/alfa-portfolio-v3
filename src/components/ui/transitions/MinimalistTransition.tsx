/**
 * MinimalistTransition Component
 * 
 * A clean, performance-focused transition component that uses only CSS gradients
 * to create smooth, professional transitions between sections without particles
 * or heavy animations.
 */

interface MinimalistTransitionProps {
  /**
   * Starting color of the gradient
   * Use CSS variable format: rgb(var(--bg-primary))
   */
  fromColor: string;
  
  /**
   * Ending color of the gradient
   * Use CSS variable format: rgb(var(--bg-secondary))
   */
  toColor: string;
  
  /**
   * Height of the transition in pixels
   * Default: 200px
   * Mobile: Automatically reduced by 20% for better mobile experience
   */
  height?: number;
  
  /**
   * Intensity of the gradient transition
   * - subtle: 0.3 opacity, good for minimal transitions
   * - medium: 0.5 opacity, balanced default
   * - bold: 0.7 opacity, strong visual separation
   */
  intensity?: 'subtle' | 'medium' | 'bold';
  
  /**
   * Position of the transition
   * - top: Transition at the top of the section
   * - bottom: Transition at the bottom of the section
   */
  position?: 'top' | 'bottom';
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const MinimalistTransition = ({
  fromColor,
  toColor,
  height = 200,
  intensity = 'medium',
  position = 'bottom',
  className = '',
}: MinimalistTransitionProps) => {
  // Map intensity to opacity values
  const opacityMap = {
    subtle: 0.3,
    medium: 0.5,
    bold: 0.7,
  };

  const opacity = opacityMap[intensity];
  
  // Determine gradient direction based on position
  const gradientDirection = position === 'top' ? 'to bottom' : 'to top';
  
  // Create the gradient: from source color to target color
  const gradientStyle = {
    height: `${height}px`,
    background: `linear-gradient(${gradientDirection}, ${fromColor}, ${toColor})`,
    opacity,
  };

  return (
    <div
      className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 pointer-events-none ${className}`}
      style={gradientStyle}
      aria-hidden="true"
    >
      {/* Mobile-optimized gradient overlay */}
      <div 
        className="md:hidden absolute inset-0"
        style={{
          background: `linear-gradient(${gradientDirection}, ${fromColor}, ${toColor})`,
          opacity: opacity * 0.8, // Slightly reduce opacity on mobile
        }}
      />
    </div>
  );
};
