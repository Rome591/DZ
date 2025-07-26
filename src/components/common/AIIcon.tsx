import { Brain } from "lucide-react";

interface AIIconProps {
  className?: string;
  alt?: string;
  variant?: 'black' | 'white' | 'original';
  useCustomImage?: boolean; // Option pour utiliser une image personnalisée
}

export function AIIcon({ 
  className = "w-4 h-4", 
  alt = "Assistant IA", 
  variant = "original",
  useCustomImage = false 
}: AIIconProps) {
  
  // Si on veut utiliser l'image personnalisée et qu'elle existe
  if (useCustomImage) {
    const getFilterStyle = () => {
      switch (variant) {
        case 'white':
          return { filter: 'brightness(0) invert(1)' };
        case 'black':
          return { filter: 'brightness(0)' };
        case 'original':
        default:
          return {};
      }
    };

    return (
      <img 
        src="/lovable-uploads/AI.png" 
        alt={alt} 
        className={className}
        style={getFilterStyle()}
        onError={(e) => {
          // Si l'image échoue, remplacer par l'icône Brain
          const parent = e.currentTarget.parentElement;
          if (parent) {
            e.currentTarget.style.display = 'none';
            const brainIcon = document.createElement('div');
            brainIcon.innerHTML = `<svg class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>`;
            parent.appendChild(brainIcon);
          }
        }}
      />
    );
  }

  // Par défaut, utiliser l'icône Brain de Lucide (plus fiable)
  const getIconColor = () => {
    switch (variant) {
      case 'white':
        return 'text-white';
      case 'black':
        return 'text-black';
      case 'original':
      default:
        return 'text-blue-600'; // Couleur AI distinctive
    }
  };

  return (
    <Brain 
      className={`${className} ${getIconColor()}`}
      aria-label={alt}
    />
  );
}
