export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="contact-container">
        <h2>
          Let's <span>Connect</span>
        </h2>
        <p
          style={{
            fontSize: "1.35rem",
            marginBottom: "3rem",
            color: "var(--text-light)",
          }}
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. <br />
          Whether you have a question or just want to say hi, my inbox is open!
          <br />
          Drop me a message — I'll get back to you quickly ♡
        </p>

        <form action="https://formspree.io/f/meeryjqn" method="POST">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="email"
          />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Your Message...if you want to build something together, describe your project idea"
            required
          ></textarea>
          <button
            type="button"
            className="btn"
            onClick={() =>
              window.open(
                "https://calendly.com/shravanijamsandekar19/30min",
                "_blank",
              )
            }
          >
            Book Free Consultation Call →
          </button>
        </form>
      </div>
    </section>
  );
}
