import { Brain } from "lucide-react";
import { useState } from "react";

interface AIIconProps {
  className?: string;
  alt?: string;
  variant?: 'black' | 'white' | 'original';
}

export function AIIcon({ className = "w-4 h-4", alt = "Assistant IA", variant = "original" }: AIIconProps) {
  const [imageError, setImageError] = useState(false);

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

  const handleImageError = () => {
    setImageError(true);
  };

  // Si l'image a échoué ou si on préfère l'icône par défaut, utiliser Brain
  if (imageError) {
    return (
      <Brain 
        className={className} 
        aria-label={alt}
        style={variant === 'white' ? { color: 'white' } : variant === 'black' ? { color: 'black' } : {}}
      />
    );
  }

  return (
    <img 
      src="/lovable-uploads/AI.png" 
      alt={alt} 
      className={className}
      style={getFilterStyle()}
      onError={handleImageError}
    />
  );
}
