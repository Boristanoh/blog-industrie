import "./contact.css";

export default function ContactForm() {
  return (
    <div className="row g-4">
        {/* FORMULAIRE */}
        <div className="col-lg-8">
          <div className="card shadow-sm p-4">
            <h4 className="mb-4 fw-semibold">Envoyer un message</h4>

            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Nom complet</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Sujet</label>
                <select className="form-select">
                  <option>Demande d'information</option>
                  <option>Proposition d’article</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>

              <button type="submit" className="btn btn-success px-4">
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="col-lg-4">
          <div className="card mb-4 shadow-sm p-4">
            <h5 className="fw-semibold mb-3">Coordonnées</h5>
            <p className="mb-1"><strong>Email :</strong> contact@blog.com</p>
            <p><strong>Localisation :</strong> Abidjan – France</p>
            <div><strong>Reseaux Sociaux :</strong>
                <div></div>
            </div>
          </div>

          <div className="card saviez-vous shadow-sm p-4">
            <h5 className="fw-bold text-success">Le saviez-vous ?</h5>
            <p className="mb-0">
              Plus de <strong>60 % des lecteurs</strong> découvrent nos articles
              grâce aux contributions externes.  
              Votre idée peut inspirer toute une communauté.
            </p>
          </div>
        </div>
     </div>
   
  );
}