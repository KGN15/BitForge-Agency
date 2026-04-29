"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // লোডিং প্রগ্রেস সিমুলেশন
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // ১০০ হওয়ার কিছুটা পর লোডার বন্ধ হবে যাতে ইউজার লাস্ট ফ্রেম দেখতে পায়
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // স্পিড আপনার ইচ্ছা মতো কমাতে বাড়াতে পারেন

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#050505",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Background Decorative Element */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, #00ff8820 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Main Content */}
          <div style={{ position: "relative", textAlign: "center" }}>
            {/* Logo or Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                letterSpacing: "0.5em",
                color: "#fff",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 300,
              }}
            >
              BitForge <span style={{ color: "#00ff88" }}>Agency</span>
            </motion.h1>

            {/* Percentage Number */}
            <div style={{ overflow: "hidden", height: "120px" }}>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                style={{
                  fontSize: "6rem",
                  fontWeight: 900,
                  fontFamily: "monospace",
                  background: "linear-gradient(to bottom, #fff, #333)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                }}
              >
                {progress}%
              </motion.div>
            </div>

            {/* Animated Progress Bar */}
            <div style={{
              width: "200px",
              height: "2px",
              background: "rgba(255,255,255,0.1)",
              margin: "20px auto",
              position: "relative",
              borderRadius: "10px"
            }}>
              <motion.div 
                style={{
                  position: "absolute",
                  height: "100%",
                  background: "#00ff88",
                  width: `${progress}%`,
                  boxShadow: "0 0 15px #00ff88",
                }}
              />
            </div>
          </div>

          {/* Bottom Luxury Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            style={{
              position: "absolute",
              bottom: "40px",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#fff",
              textTransform: "uppercase"
            }}
          >
            Digital Craftsmanship © 2026
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}