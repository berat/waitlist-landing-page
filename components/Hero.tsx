"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import DesktopScreen3 from "@/public/DesktopScreen3.png"; // Importing the image


export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // MailerLite Universal Script
    (function (w, d, e, u, f, l, n) {
      w[f] =
        w[f] ||
        function () {
          (w[f].q = w[f].q || []).push(arguments);
        };
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(
      window,
      document,
      "script",
      "https://assets.mailerlite.com/js/universal.js",
      "ml"
    );

    ml("account", "1081832");
  }, []);

  const handleJoinWaitlist = () => {
    // Show confirmation and animation
    setSubmitted(true);
    setIsExploding(true);

    // Stop the confetti after a short duration
    setTimeout(() => setIsExploding(false), 3000);
  };

  return (
    <div
      style={{
        backgroundImage: `url(/DesktopScreen3.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      {isExploding && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={500}
          gravity={0.07}
          initialVelocityY={2}
          recycle={false}
          colors={["#FFC700", "#FF0000", "#2E3191", "#41BBC7"]}
          wind={0.01}
          tweenDuration={5000}
        />
      )}
      <div
        style={{
          position: "absolute",
          top: "calc(50% + 100px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        {submitted ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: "center",
                backgroundColor: "#778da9", // Blue/grey background
                padding: "1rem 2rem",
                borderRadius: "8px",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  color: "#ffffff",
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                🎉
              </motion.div>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 600,
                  paddingBottom: "1rem",
                }}
              >
              </p>
            </motion.div>
          </>
        ) : (
          <></>
        )}

        <motion.div
          className="ml-embedded"
          data-form="e1c5oX"
          initial={{ opacity: 0, y: -100 }} // Start with opacity 0 and y position above the screen
          animate={{ opacity: 1, y: 2 }} // Animate to opacity 1 and y position to 0 (original position)
          transition={{ duration: 1.1 }} // Duration of the animation
          style={{ marginTop: "100px", marginLeft: "15px" }} // Keep the marginTop for spacing
        ></motion.div>
      </div>
    </div>
  );
}
