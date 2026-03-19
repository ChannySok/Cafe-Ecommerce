import React, { useState } from "react";
import emailjs from "emailjs-com";

const MessageForm = ({ darkMode }) => {
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5ld9xf7",
        "template_sgepxp9",
        { message },
        "iM1y9lgZNJqNCY7m8"
      )
      .then(() => {
        alert("Message sent successfully!");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="mt-2 flex">
        <input
          type="text"
          placeholder="Your text here..."
          className={`px-4 py-2 rounded-l w-full ${
            darkMode
              ? "bg-gray-700 text-amber-50 "
              : "text-gray-200 bg-gray-400"
          }`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`px-4 py-2 rounded-r transition duration-300 cursor-pointer ${
            darkMode
              ? "bg-amber-700 hover:bg-amber-600"
              : "bg-amber-600 hover:bg-amber-700"
          } text-white`}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
