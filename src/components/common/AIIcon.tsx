
interface AIIconProps {
  className?: string;
  alt?: string;
  variant?: 'black' | 'white' | 'original';
}

export function AIIcon({ className = "w-4 h-4", alt = "Assistant IA", variant = "original" }: AIIconProps) {
  const getFilterStyle = () => {
    switch (variant) {
      case 'white':
        return { filter: 'brightness(0) invert(1)' };
      case 'black':
        return { filter: 'brightness(0)' };
      case 'original':
      default:
        return {}; // Pas de filtre pour afficher l'image originale
    }
  };

  return (
    <img 
      src="/lovable-uploads/AI.png" 
      alt={alt} 
      className={className}
      style={getFilterStyle()}
      onError={(e) => {
        // Fallback si l'image ne charge pas
        console.warn('AI icon failed to load, using fallback');
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}
