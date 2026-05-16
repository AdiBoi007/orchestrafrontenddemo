import { useState } from "react";
import { WAITLIST_API_URL } from "../lib/config.js";

export function WaitlistForm({ compact = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(WAITLIST_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to join. Please try again.");
    }
  }

  return (
    <form
      className={`waitlist-form${compact ? " waitlist-form--compact" : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={`waitlist-form__row${compact ? " waitlist-form__row--compact" : ""}`}>
        <input
          type="email"
          name="email"
          autoComplete="email"
          className={`waitlist-form__input${compact ? " waitlist-form__input--compact" : ""}`}
          placeholder={compact ? "Your email" : "Enter your email to join the waitlist"}
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
            if (status === "error") setStatus("idle");
          }}
          disabled={status === "loading" || status === "success"}
          aria-invalid={status === "error"}
          aria-describedby={message ? "waitlist-form-message" : undefined}
        />
        <button
          type="submit"
          className={`btn btn--primary waitlist-form__submit${compact ? " waitlist-form__submit--compact" : ""}`}
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Joining…" : status === "success" ? "Joined" : "Join waitlist"}
        </button>
      </div>
      {message ? (
        <p
          id="waitlist-form-message"
          className={`waitlist-form__message${status === "success" ? " waitlist-form__message--ok" : ""}${status === "error" ? " waitlist-form__message--err" : ""}`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
