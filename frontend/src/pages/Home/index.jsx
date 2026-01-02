
import { Link } from "react-router-dom"
import colors from "../../utils/style/color";
import styled from "styled-components";
import ArticleRecent from "../../components/ArticleRecent";
import DefaultPicture from "../../assets/moi/profile.jpg";
import PictureHome from "../../assets/home1.jpg";
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

const CardPilier = styled.div`
  
  background-color: white;
  padding: 3rem 2rem;
  max-width: 25rem;
  height: 14rem;
  border-radius: 0.75rem;
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

`;

// index, categorie,title, picture,minute,contenu,lien

const ArticlesRecents = [
  {
    index:0,
    title: 'Les nouvelles technologies de séchage solaire',
    picture: "DefaultPicture",
    resume: "Comment l'innovation low-tech réduit les pertes post-récolte en Afrique de l'ouest",
    categorie:"Technologie",
    link:"hhh",
    minute:5,
  },
  {
     index:1,
    title: 'Le Fonio : super-aliment de demain ?',
    picture: "DefaultPicture",
    resume: "Pourquoi cette céréale ancestrale attire l'attention des marchés internationaux",
    categorie:"Nutrition",
    link:"hhh",
    minute:7,
  },
  {
     index:2,
    title: 'Réduire le gaspillage alimentaire à Abidjan',
    picture: "DefaultPicture",
    resume: "Initiative locale pour transformer les individus en ressources précieuses",
    categorie:"Durabilité",
    link:"hhh",
    minute:6,

  },
]

function Home() {
    return (
    <section className="container-fluid">
        {/* <section className="row bg-black">
            <h1>Réinvinter l'alimentation africaine</h1>
            <p>
                Entre traditions ancestrales, science moderne et durabilité écologique
                pour un futur prospère
            </p>
            <div>
                <ItemLink to="/" className="rounded-3"> <b>Retour à l'accueil </b></ItemLink>
                <ItemLink to="/a-propos" className="rounded-3 ms-3 bg-white"> Voir les derniers articles</ItemLink>
            </div>
        </section> */}

       <section className="row">
        <div className="col-12 p-0">
            <div className="card hero-card text-white border-0">
            <img src={PictureHome} className="card-img hero-img" alt="..." />

            <div className="card-img-overlay hero-overlay d-flex flex-column justify-content-center ps-5">
                <h1>Réinventer l'alimentation africaine</h1>
                <p className="col-lg-6">
                Entre traditions ancestrales, science moderne et durabilité écologique
                pour un futur prospère
                </p>

                <div>
                <ItemLink to="/" className="rounded-3">
                    <b>Retour à l'accueil</b>
                </ItemLink>

                <ItemLink to="/a-propos" className="rounded-3 ms-3 bg-white">
                    Voir les derniers articles
                </ItemLink>
                </div>
            </div>
            </div>
        </div>
        </section>


        <section className="row bg-white py-5">
            <h2 className="text-center">Nos 3 piliers fondamentaux</h2>
            <p className="text-center">Une approche holistique pour transformer l'industrie agroalimentaire du continent.</p>
            <div className="d-flex gap-5 px-3 justify-content-center flex-wrap">
                <CardPilier>
                    <h3>Innovation & Technologie</h3>
                    <p>Adoption de technologies de transformation modernes pour valoriser les matières premières locales.</p>
                </CardPilier>

                <CardPilier>
                    <h3>Valeur des Aliments</h3>
                    <p>Redécouverte des super-aliments africains et de leur potentiel nutritionnel exceptionnel.</p>
                </CardPilier>

                <CardPilier>
                    <h3>Consommation Durable</h3>
                    <p>Promotion de circuits courts et de pratiques respectueuses de l'environnement.</p>
                </CardPilier>
            </div>
        </section>


        <section className="row d-flex p-5 flex-lg-row-reverse earth">   
            <h2>Articles récents</h2>
            <p>Analyses approfondies et tendances du secteur. </p>
            <Link to="/blog" className="text-end mb-2"> Voir tous les articles</Link>

            <div className="d-flex gap-4 justify-content-between flex-wrap">
            {ArticlesRecents.map((article, index) => (
                    <ArticleRecent
                        key={`${article.index}`}
                        index ={article.index}
                        title={article.title}                       
                        picture={DefaultPicture}
                        contenu={article.resume}
                        link={article.link}
                        minute={article.minute}
                        categorie={article.categorie}
                    />
                ))}
            </div>
        </section>

        <section className="p-5 d-flex justify-content-center bg-white">
            <div class="card mb-3" style={{maxWidth: 1000 }}>
                <div class="row g-0">     

                    <div class="col-md-8 m-auto p-5">
                    <div class="card-body">
                        <h3 class="card-title">Chocolaterie Éthique : De la fève à la tablette</h3>
                        <p class="card-text">Découvrez comment une coopérative au Cameroun révolutionne la chaîne de valeur du cacao en transformant localement 100% de sa production, garantissant des revenus équitables aux fermiers.</p>
                        <div className="d-flex ">
                            <ItemLink to="/" className="rounded-3"> <b>Découvrir les produits</b></ItemLink>
                            <ItemLink to="/a-propos" className="rounded-3 ms-3 bg-white"> Lire l'étude de cas</ItemLink>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4">
                    <img src={DefaultPicture} class="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
        </section>


        <section className="p-5 m-auto text-center d-flex flex-column align-items-center justify-content-center">
            <h2 className="pt-5">Restez au coeur de l'agro-industrie</h2>
            <p>Recevez chaque semaine notre sélection d'articles, d'innovations et d'opportunités d'affaires en Afrique.</p>
            <div className="row g-3 align-items-center hustify-content-center">
                <div className="col-auto">
                    <input type="email" id="exampleInputEmail1" class="form-control" aria-describedby="emailHelp" placeholder="Votre adresse email" />
                </div>
                
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {/* <span id="passwordHelpInline" class="form-text">
                    Must be 8-20 characters long.
                    </span> */}
                </div>         
            </div>
            <div id="emailHelp" className="form-text pt-3 pb-5">Nous respectons votre vie privée. Désabonnement à tout moment.</div>

        </section>

    </section>
    )
}


export default Home