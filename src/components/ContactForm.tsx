import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import Form from "../UI/Form";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  function sendEmail(e: FormEvent) {
    e.preventDefault();

    // Ensure form.current is not null before sending the email
    if (form.current) {
      setLoading(true);

      emailjs
        .sendForm("service_l8ukmnd", "template_uzs8tbh", form.current, {
          publicKey: "vw2p8YWeRSBzKL_qW",
        })
        .then(
          () => {
            setName("");
            setEmail("");
            setMessage("");

            toast.success(`Message sent successfully!`);
          },
          (error) => {
            toast.error(`Failed to send message: ${error.text}`);
          }
        )
        .finally(() => setLoading(false));
    } else {
      console.error("Form reference is null. Unable to send email.");
    }
  }

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        autoComplete="false"
        name="user_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="user_email"
        autoComplete="false"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <textarea
        rows={10}
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        required
      ></textarea>
      <button disabled={loading}>
        {loading ? <SyncLoader color="white" size={10} margin={5} /> : "Send"}
      </button>
    </Form>
  );
};

export default ContactForm;
