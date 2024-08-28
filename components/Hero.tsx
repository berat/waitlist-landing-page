"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: -10 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const handleJoinWaitlist = () => {
    // Send email to Google Sheets
    fetch(
      "https://script.google.com/macros/s/AKfycbyDUunSQJRYzqdPzKeEs-iEIj94cmVfezl4M8aY_gkKGzyFef7Btk6VBYzevPoWdrkyFA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Show confirmation and animation
    setSubmitted(true);
    setIsExploding(true); // Trigger the confetti explosion

    // Reset email state after submission
    setEmail("");

    // Stop the confetti after a short duration
    setTimeout(() => setIsExploding(false), 3000);
  };
  return (
    <div
      style={{
        backgroundImage: `url(/DesktopScreen2.png)`, // Directly reference the image in the public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Adjust as needed
        width: "100%", // Adjust as needed
        position: "relative", // Ensure the child elements are positioned relative to this
      }}
    >
      {isExploding && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={500}
          gravity={0.07} // Reduce gravity to slow down the confetti fall
          initialVelocityY={2} // Adjust initial velocity to slow down the confetti
          recycle={false} // Confetti will not recycle
          colors={["#FFC700", "#FF0000", "#2E3191", "#41BBC7"]}
          wind={0.01} // Small wind effect
          tweenDuration={5000} // Duration of the fall
        />
      )}
      <div
        style={{
          position: "absolute",
          top: "calc(50% + 100px)", // Move down by 100px
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the content
          zIndex: 10, // Ensure this is on top of the background
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
                backgroundColor: "#778da9", // Black background
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
              ></motion.div>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 600, // Increase font weight by 100 (assuming original was 500)
                  paddingBottom: "1rem", // Equal padding on all sides
                }}
              >
                You have been added to the waitlist!
              </p>
            </motion.div>
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "0.75rem",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "none",
                width: "300px",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            />
            <button
              onClick={handleJoinWaitlist}
              style={{
                padding: "0.75rem 1.5rem",
                marginLeft: "1rem",
                marginRight: "1rem",
                fontSize: "1rem",
                color: "#ffffff",
                backgroundColor: "#a7c957", // Button color
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
              }}
            >
              Join Waitlist
            </button>
          </>
        )}
      </div>
    </div>
  );
}
