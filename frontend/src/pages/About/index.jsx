import { Link } from "react-router-dom";
import styled from "styled-components";
import photoProfile from "../../assets/moi/profile.jpg";
import colors from "../../utils/style/color";
import '../../styles/fonts.css';

const ItemLink = styled(Link)`
  display: inline-block;
  color : black;
  background-color: ${colors.primary};
  padding:0.5rem;
  border : solid 0.10rem ${colors.backgroundDark};
  &:hover{
  color:${colors.earthLight};
  }
`;

const CardFormationWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;

    top: -1rem;
    left: -1rem;

    width: 5rem;
    height: 5rem;

    background-color: #D0BB95;
    border-radius: 4px;

    z-index: 0;
  }
`;

const CardFormation = styled.div`
  position: relative;
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  width: max-content;
  z-index: 1;
`;

const Formation = styled.div`
  
  color:${colors.earthDark};
  font-size: 1.2rem;
   font-weight: bold;
`;

const CardMission = styled.div`
  
  background-color: white;
  padding: 3rem 5rem;
  max-width: 21rem;
  height: 20rem;
  border-radius: 0.75rem;
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

`;

const SectionCitation = styled.section`
  background-color: ${colors.earthDark};
  padding: 3rem 2rem;
`;

const CardODD = styled.section`
  background-color: ${colors.earthLight};
  color : white;
  font-weight: bold;
  border-radius: 0.5rem;

  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
 
`;

function About() {
    return (
    <section className=" container-fluid">
        <h1 className="text-center text-black">A propos de de GAD</h1>

        <section className="row d-flex p-5 flex-wrap-reverse bg-white">
            <div className="col-lg-6 m-auto">
                <p className="special">L'éditrice et fondatrice</p>
                <h2 className="fs-1">Une vision experte pour l'Afrique de demain</h2>
                <p>
                    Elève ingénieure en génie des procédés, je partage mon expertise pour batir une industrie agroalimentaire
                    durable, rentable et respectueuse des traditions africaines. 
                </p>

                <p>
                    Génie Alimentaire Durable (GAD) est né d'une conviction profonde : la science alimentaire est le levier essentiel pour transformer le potentiel agricole de l'Afrique en richesse durable.

                    Ce blog est une plateforme éditoriale professionnelle qui fait le pont entre la recherche académique, l'ingénierie industrielle et les défis de la consommation durable. Nous vulgarisons 
                    les procédés de transformation complexes pour les rendre accessibles aux entrepreneurs, étudiants et décideurs.
                </p>
                <div>
                    <ItemLink to="/a-propos" className="rounded-3"> <b>Lire mon parcours</b></ItemLink>
                    <ItemLink to="/a-propos" className="rounded-3 ms-3 bg-white"> Me contacter</ItemLink>
                </div>
            </div>

            <div className="col-lg-6 position-relative rotate-90"  style={{ transform: 'rotate(2deg)' }}> 
                <img className="rounded-3" src={photoProfile} alt="" />
                <p className="position-absolute bottom-0 ms-3 text-white">
                    <strong>KOFFI MARIE MARTHE</strong> <br />
                    Elève ingénieure en génie des procédés
                </p>
            </div>      
        </section>

        <section className="row d-flex p-5 flex-lg-row-reverse earth">

            <div className="col-12 col-lg-6">
                <p className="special">Mon parcours </p>
                <h2>De la théorie à la pratique industrielle</h2>

                <p>
                    Diplômée en génie des procédés, j'ai consacré ma carrière à l'optimisation de la transformation alimentaire. 
                    Mon objectif est simple : valoriser nos ressources locales tout en respectant les standards internationaux.
                </p>

                <p>
                    J'ai vu trop de matières premières gaspillées par manque de techniques de conservation adéquates. Ce blog est ma réponse : un espace de partage pour les entrepreneurs, les étudiants et les passionnés qui veulent changer la donne.
                </p>
            </div>

            <CardFormationWrapper className="col-12 col-lg-6 mt-5 m-lg-auto">
                <CardFormation>
                    <h3> Formations & Expertise</h3>
                    <div>
                        <Formation>Master en Génie des Procédés</Formation> 
                        <p>Spécialisation Agroalimentaire & Bioprocédés</p>
                    </div>

                    <div>
                        <Formation>10 ans d'expérience terrain</Formation> 
                        <p>Gestion de projets industriels en Afrique de l'Ouest</p>
                    </div>

                    <div>
                        <Formation>Consultante en Qualité</Formation> 
                        <p>Accompagnement ISO 22000 et HACCP pour PME</p>
                    </div>
                </CardFormation>
            </CardFormationWrapper>

            
        </section>

        <section className="row text-center py-5">
            <h2>Notre Mission</h2>
            <p> Informer, inspirer et outiller la nouvelle génération d'acteurs de l'agroalimentaire africain.</p>

            <div className="col-12 d-flex gap-5 px-3 justify-content-center flex-wrap">
                <CardMission className="col-12 col-lg-4 mission-1">
                    <h3>Durabilité</h3>
                    <p>Encourager des méthodes de production respectueuses de l'environnement et la réduction du gaspillage post-récolte.</p>
                </CardMission>

                <CardMission className="col-12 col-lg-4 mission-2">
                    <h3>Transformation Locale</h3>
                    <p>Créer de la valeur ajoutée sur le continent en transformant nos matières premières sur place.</p>
                </CardMission>

                <CardMission className="col-12 col-lg-4 mission-3">
                    <h3>Innovation</h3>
                    <p>Adopter les nouvelles technologies tout en valorisant les savoir-faire ancestraux adaptés à nos contextes.</p>
                </CardMission>
            </div>
        </section>

        <SectionCitation className="text-center m-0">
            <span class="quote-mark">“</span>
            <div className="text-white fs-2 fw-bold ps-5">     
                    "L'avenir de l'Afrique ne s'écrira pas seulement dans les bureaux, mais dans nos champs et nos usines de transformation."
            </div>

            <div class="author">
                <span class="line"></span>
                <span class="name">Aminata Diop</span>
                <span class="line"></span>
            </div>

        </SectionCitation>

        <section className="bg-white p-5">
            <p className="text-center">Engagée pour les objectifs de Développement durable</p>
            <div className="col-12 d-flex gap-5 px-3 justify-content-center flex-wrap">
                <CardODD >
                    2 <br />
                    FAIM <br />
                    "ZÉRO" 
                </CardODD>

                <CardODD>
                    9 <br />
                    INDUSTRIE, <br />
                     INNOVATION
                </CardODD>

                <CardODD>
                    12 <br />
                    CONSOMMATION, <br />
                     RESPONSABLE
                </CardODD>
            </div>
        </section>

    </section>
        
          
    )
}


export default About



