import emailjs from "emailjs-com";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_p15s3od",
      "template_yb1vpzt",
      e.target,
      "w1RK_dpMk0mBE2DTc"
    ).then(
      () => alert("Message sent successfully!"),
      () => alert("Failed to send message")
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#001B48] text-white">
      <div className="max-w-4xl mx-auto px-8">

        <h2 className="text-4xl font-bold mb-6">
          Let’s Create Something Amazing
        </h2>

        <form onSubmit={sendEmail} className="grid gap-6 mt-8">

          <input
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg text-black"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-4 rounded-lg text-black"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="p-4 rounded-lg text-black"
          />

          <button className="bg-[#018ABE] py-3 rounded-lg font-semibold hover:opacity-90">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
