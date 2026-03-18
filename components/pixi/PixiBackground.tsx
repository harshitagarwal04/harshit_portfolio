"use client";

import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

export const PixiBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isCancelled = false;
    let app: PIXI.Application | null = null;
    let mouseX = -1000;
    let mouseY = -1000;

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const initPixi = async () => {
      if (!containerRef.current) return;

      // Initialize Pixi application explicitly for Pixi v8
      app = new PIXI.Application();
      await app.init({
        resizeTo: window,
        backgroundAlpha: 0,
        antialias: true,
        resolution: Math.max(window.devicePixelRatio || 1, 2),
      });

      if (isCancelled || !containerRef.current) {
        app.destroy(true);
        return;
      }

      containerRef.current.appendChild(app.canvas);

      // Dynamically adjust for mobile to save battery/reduce WebGL calls
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 25 : 80;
      const connectionDistance = isMobile ? 100 : 150;
      // Skip the O(N^2) line-drawing graphics API completely on mobile if desired,
      // but significantly decreasing the particle count also achieves this.

      const particles: { sprite: PIXI.Graphics; x: number; y: number; vx: number; vy: number }[] = [];

      for (let i = 0; i < particleCount; i++) {
        const graphics = new PIXI.Graphics();
        
        // Pixi v8 graphics API
        graphics.circle(0, 0, Math.random() * 2 + 1.5);
        graphics.fill({ color: 0x22c55e, alpha: 0.6 });

        const particle = {
          sprite: graphics,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        };

        graphics.x = particle.x;
        graphics.y = particle.y;
        
        app.stage.addChild(graphics);
        particles.push(particle);
      }

      const lines = new PIXI.Graphics();
      app.stage.addChild(lines);

      window.addEventListener("pointermove", onPointerMove);

      app.ticker.add(() => {
        lines.clear();
        
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
          if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            p.x -= dx * 0.01;
            p.y -= dy * 0.01;
          }

          p.sprite.x = p.x;
          p.sprite.y = p.y;

          // Only draw connection lines on larger screens to avoid heavy Graphics API overhead on mobile
          if (!isMobile) {
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dist2 = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));

              if (dist2 < connectionDistance) {
                const alpha = (1 - dist2 / connectionDistance) * 0.5;
                lines.moveTo(p.x, p.y);
                lines.lineTo(p2.x, p2.y);
                lines.stroke({ width: 1.5, color: 0x22c55e, alpha });
              }
            }
          }
        }
      });
    };

    initPixi();

    return () => {
      isCancelled = true;
      window.removeEventListener("pointermove", onPointerMove);
      if (app) {
        try {
          if (app.canvas && containerRef.current?.contains(app.canvas)) {
            containerRef.current.removeChild(app.canvas);
          }
          app.destroy(true, { children: true, texture: true });
        } catch (e) {
          console.error(e);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[-1] pointer-events-none opacity-90" 
      aria-hidden="true"
    />
  );
};
