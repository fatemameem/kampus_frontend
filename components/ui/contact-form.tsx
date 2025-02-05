import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName:"", email: "", subject:"", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ firstName: "", lastName:"", email: "", subject:"", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col gap-4">
      <div className="flex gap-12 justify-between items-center">
        <div className="w-full">
          <p className="text-customGreen pb-2 text-sm">First Name</p>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-2 border text-customGreen focus:outline-none focus:border-customGreen rounded mb-3"
          />
        </div>
        <div className="w-full">
          <p className="text-customGreen pb-2 text-sm">Last Name</p>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-2 border text-customGreen focus:outline-none focus:border-customGreen rounded mb-3"
          />
        </div>
      </div>
      <div className="">
        <p className="text-customGreen pb-2 text-sm">Email</p>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border text-customGreen focus:outline-none focus:border-customGreen rounded mb-3"
        />
      </div>
      <div className="">
        <p className="text-customGreen pb-2 text-sm">Subject</p>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-2 border text-customGreen focus:outline-none focus:border-customGreen rounded mb-3"
        />
      </div>
      <div className="">
        <p className="text-customGreen pb-2 text-sm">Message</p>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border text-customGreen focus:outline-none focus:border-customGreen rounded mb-3"
        />
      </div>
      <button type="submit" className="w-full bg-customGreen text-white py-2 rounded" disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>
      {success && <p className="text-customGreen mt-3">Message sent successfully!</p>}
      {error && <p className="text-customRed mt-3">{error}</p>}
    </form>
  );
};

export default ContactForm;