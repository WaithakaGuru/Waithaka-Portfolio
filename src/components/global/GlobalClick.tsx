import { useEffect, useRef, useState } from "react";

import click from "/sounds/click.mp3";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function Click() {
  // Use a ref so the audio object is only created once
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    // Initialize the audio file
    audioRef.current = new Audio(click);
    // console.log(audioRef.current);
    const handleGlobalClick = (e: MouseEvent) => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reset to start for rapid clicks
        audioRef.current
          .play()
          .catch((err) => console.log("Playback blocked:", err));
      }
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.pageX,
        y: e.pageY,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove item matching the animation duration (600ms)
      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id),
        );
      }, 600);
    };

    // Listen for clicks across the entire window
    window.addEventListener("click", handleGlobalClick);

    // Clean up listener when component unmounts
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <>
      <div className="ripple-layer">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="click-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      </div>
    </>
  );
}
