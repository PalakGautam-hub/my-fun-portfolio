import { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface SoundSystemContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
  playTransition: () => void;
}

const SoundSystemContext = createContext<SoundSystemContextType | undefined>(undefined);

export function SoundSystemProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(true);
  const [hoverSound, setHoverSound] = useState<HTMLAudioElement | null>(null);
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null);
  const [transitionSound, setTransitionSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    try {
      // Using high-frequency subtle blips for a premium digital feel
      const hover = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'); // Soft blip
      const click = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'); // Mechanical click
      const transition = new Audio('https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3'); // Airy sweep

      hover.volume = 0.1;
      click.volume = 0.15;
      transition.volume = 0.2;

      setHoverSound(hover);
      setClickSound(click);
      setTransitionSound(transition);
    } catch (error) {
      console.warn("Audio system failed to initialize (common on mobile). Falling back to silent mode.", error);
    }
  }, []);

  const toggleMute = useCallback(() => setIsMuted(prev => !prev), []);

  const playHover = useCallback(() => {
    if (!isMuted && hoverSound) {
      hoverSound.currentTime = 0;
      hoverSound.play().catch(() => {});
    }
  }, [isMuted, hoverSound]);

  const playClick = useCallback(() => {
    if (!isMuted && clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    }
  }, [isMuted, clickSound]);

  const playTransition = useCallback(() => {
    if (!isMuted && transitionSound) {
      transitionSound.currentTime = 0;
      transitionSound.play().catch(() => {});
    }
  }, [isMuted, transitionSound]);

  return (
    <SoundSystemContext.Provider value={{ isMuted, toggleMute, playHover, playClick, playTransition }}>
      {children}
    </SoundSystemContext.Provider>
  );
}

export const useSoundSystem = () => {
  const context = useContext(SoundSystemContext);
  if (!context) throw new Error('useSoundSystem must be used within SoundSystemProvider');
  return context;
};
