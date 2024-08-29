"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import DesktopScreen3 from "@/public/DesktopScreen3.png";
import Head from "next/head";
import MailerLite from "@mailerlite/mailerlite-nodejs";

const mailerlite = new MailerLite({
  api_key:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTRmNWRlOWZlYWI3MzkyZGY3ODgxYjBkZTllNTlmNzQzMWVlMjNjMWUxZTRkZTU4ZDlhZjg0Y2M0MjEyZjEwNzU5ZWMzZDY2OTVmMWFmNzQiLCJpYXQiOjE3MjQ5MTc5NDYuMzEwNjMxLCJuYmYiOjE3MjQ5MTc5NDYuMzEwNjMzLCJleHAiOjQ4ODA1OTE1NDYuMzA3OTM4LCJzdWIiOiIxMDkxNzA5Iiwic2NvcGVzIjpbXX0.rQJ2loY87Nmk2eBBkdvfma7lM6JGL1UJ1GznioM4qBAg7NNQvx6z1JmGpSCQF8G_s_ddpe09uBKT7k2HmU6v5Az2v-kNgEO4oz8tN0zMU3_9rTlI-LyxgZJTJQiMVe6O8SY1E_LJ5KHGWWhwcYRDpM2uk83k42NmKsjXFg_MTuVQZ0GdjZSVg0-4gCbFmyjPx7qHjrEu2NJt_jsaz4wE7ck-v1xljc6-sXjAdnxiLYoGurF3k5HVwaLYgyiWTmnJtLqy-vViIdMVPm_tZIQqhq3UuoXJJQn5RKGy8JNRTRkU3TIfXRpgfaTk29s1smw-qpDdZ3vW9K3tRUbzb2ZMEZVPpwLGRAH9SF_0uuXYB10ckt0meFA8fxXg-Ez5Ay8EYEkcZXW7_5wWSzrzacZtCGoPvNK0N27hj2waykHTno010YjRjOhHE1TIdAp9Z8Onz3Y6ao7BMFfHakaceqLLDdmwKF-gggEJ7OW-wSRGiLvMYipZcScl7a6c0C4v88JP73rH34e_cVT4L9BoEIgfKLLkpKoll186q_8EI4BLqc6c5vyzCUbFJxHeaCtt1vCF08X6ft08kSW5xRgu1d0UMgvXlv9TmwGTv4pcSED5yK5Z03kxv7WhUWeCx1xV8IrCHGeIclufLqEs8dOTz5eAFN5TInpCvfmQa-X2jO-X96s",
});

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [email, setEmail] = useState(""); // State for storing the email

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleJoinWaitlist = async () => {
    setSubmitted(true);
    setIsExploding(true);

    try {
      // Send the email to MailerLite
      await mailerlite.subscribers.createOrUpdate({
        email: email, // Email entered by the user
      });
      console.log("User added to the waitlist successfully");
    } catch (error) {
      console.error("Failed to add user to the waitlist:", error);
    }

    setTimeout(() => setIsExploding(false), 3000);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${DesktopScreen3.src})`,
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
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: "center",
                backgroundColor: "#778da9",
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
                Thank you for joining the waitlist!
              </p>
            </motion.div>
          ) : null}

          {/* Input field for email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "250px",
              textAlign: "center",
            }}
          />

          {/* Join Waitlist Button */}
          <button
            onClick={handleJoinWaitlist}
            style={{
              padding: "10px 20px",
              backgroundColor: "#2E3191",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
              border: "none",
              fontSize: "16px",
            }}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </>
  );
}
