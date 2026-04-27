import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xlgakwzp";

export default function ContactForm({ isDark }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
    background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.8)",
    color: isDark ? "white" : "#0f172a",
    fontSize: "0.9rem",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box"
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "0.4rem",
    color: isDark ? "rgba(148,163,184,1)" : "rgba(71,85,105,1)"
  };

  return (
    <div style={{
      padding: "2rem",
      borderRadius: "1.5rem",
      border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.6)",
    }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: "700",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: isDark ? "#a78bfa" : "#7c3aed",
          marginBottom: "0.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <span style={{ width: "2rem", height: "1px", background: "currentColor", display: "inline-block" }} />
          Work with me
        </div>
        <h3 style={{
          fontSize: "1.8rem",
          fontWeight: "900",
          color: isDark ? "white" : "#0f172a",
          margin: 0,
          lineHeight: 1.1
        }}>
          Leave your details
        </h3>
        <p style={{
          fontSize: "0.9rem",
          color: isDark ? "rgba(148,163,184,1)" : "rgba(71,85,105,1)",
          marginTop: "0.5rem",
          marginBottom: 0
        }}>
          Collaborators, companies, or anyone interested — drop your info and I will get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div>
            <label style={labelStyle}>Your Name *</label>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email *</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" style={inputStyle} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Company / Organisation</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder="Your company or university (optional)" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Message *</label>
          <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell me about your project, collaboration idea, or opportunity..." rows={5} style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }} />
        </div>

        <button type="submit" disabled={status === "loading"} style={{
          padding: "0.9rem 2rem",
          borderRadius: "999px",
          border: "none",
          background: "linear-gradient(135deg, #7c3aed, #ec4899)",
          color: "white",
          fontWeight: "700",
          fontSize: "0.9rem",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
          alignSelf: "flex-start",
          fontFamily: "inherit"
        }}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <div style={{
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.3)",
            color: "#22c55e",
            fontSize: "0.85rem",
            fontWeight: "600"
          }}>
            Message sent! I will get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div style={{
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            background: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.3)",
            color: "#ef4444",
            fontSize: "0.85rem",
            fontWeight: "600"
          }}>
            Something went wrong. Email me directly at muhammed01n@gmail.com
          </div>
        )}
      </form>
    </div>
  );
}
