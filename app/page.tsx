"use client";

import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={sendEmail} disabled={isLoading}>
      {isLoading ? "Sending..." : "send"}
    </button>
  );
}
