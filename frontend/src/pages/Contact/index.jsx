import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact & Collaboration</h1>
        <p className="text-muted">
          Une question, une proposition éditoriale ou un partenariat ?
          Écrivez-nous...
        </p>
      </div>

      <ContactForm />
    </div>
  );
}

export default Contact;