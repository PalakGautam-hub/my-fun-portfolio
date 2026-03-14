import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from "lucide-react";

const tracks = [
  { title: "Airbnb Clone", artist: "Full Stack Project", duration: "3:42" },
  { title: "Lexora AI", artist: "AI/NLP Project", duration: "2:58" },
  { title: "URL Shortener", artist: "Microservice Project", duration: "4:15" },
  { title: "Traffic Manager", artist: "Python Simulation", duration: "3:30" },
];

const PlayerBar = () => {
  const [playing, setPlaying] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrentTrack((t) => (t + 1) % tracks.length);
          return 0;
        }
        return p + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [playing]);

  const track = tracks[currentTrack];

  const handleNext = () => {
    setCurrentTrack((t) => (t + 1) % tracks.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrack((t) => (t - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-player h-[var(--player-height)] flex items-center px-4 md:px-6">
      <div className="flex items-center justify-between w-full max-w-full gap-4">
        {/* Track info */}
        <div className="flex items-center gap-3 min-w-0 w-1/4">
          <div className="w-12 h-12 shrink-0 rounded-md bg-primary/20 flex items-center justify-center">
            <div className="flex items-end gap-[2px] h-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="equalizer-bar"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">{track.title}</p>
            <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-1 flex-1 max-w-md">
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              <Shuffle className="w-4 h-4" />
            </button>
            <button onClick={handlePrev} className="text-muted-foreground hover:text-foreground transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button onClick={() => setPlaying(!playing)} className="btn-play pulse-glow">
              {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <button onClick={handleNext} className="text-muted-foreground hover:text-foreground transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              <Repeat className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-[10px] font-mono text-muted-foreground tabular-nums w-8 text-right">
              {Math.floor(progress * 0.042)}:{String(Math.floor((progress * 2.52) % 60)).padStart(2, "0")}
            </span>
            <div className="progress-bar flex-1">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground w-8">{track.duration}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="hidden md:flex items-center gap-2 w-1/4 justify-end">
          <Volume2 className="w-4 h-4 text-muted-foreground" />
          <div className="progress-bar w-24">
            <div className="progress-bar-fill" style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PlayerBar;
