import { Link } from "react-router-dom"
import colors from "../../utils/style/color";
import styled from "styled-components";


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

const CardImage = styled.div`
  
  background-color: white;
  padding: 3rem 5rem;
  max-width:  15rem;
  height: 15rem;
  border-radius: 50%;
  margin-bottom : 3rem;
  
  box-shadow: 0 4px 45px ${colors.primary};

`;

function Error() {
    return (
        <section className="container">
            <section className="row text-center d-flex align-content-center justify-content-center">

                <CardImage>JJJJ</CardImage>

                <h1 className="text-black">404</h1>
                <h2>Oups!, Cette page n'existe pas</h2>
                <p>
                     Le contenu que vous cherchez n'est plus disponible, a changé d'adresse ou n'a jamais été planté ici.
                </p>

                <div>
                    <ItemLink to="/" className="rounded-3"> <b>Retour à l'accueil </b></ItemLink>
                <ItemLink to="/a-propos" className="rounded-3 ms-3 bg-white"> Voir les derniers articles</ItemLink>
                </div>

                
            </section>

        </section>
   )
}


export default Error