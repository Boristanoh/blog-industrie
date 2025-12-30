import styled from "styled-components"
import { Link } from "react-router-dom"

const CardFooter = styled.footer`
    background-color : #1A1A1A;
    padding: 4rem 1rem 1rem 1rem;
`

function Footer() {
    return (
    <CardFooter>
        <div className="row">
            <div className="col-12 col-md-6 mb-3">
                <h4>GAD </h4>
                <p className="text-wrap">
                    Génie Alimentaire durable : 
                    La plateforme de référence pour les professionels et amoureux de l'agroalimentaire en 
                    Afrique. Nous connectons innovation, tradition et durabilité.
                </p>
            </div>

            <div className="col-12 col-md-3 mb-3">
                <h4>Navigation</h4>
                <nav>
                    <ul>
                        <li><Link to="/" >Accueil</Link></li>
                        <li><Link to="/a-propos" >A propos</Link></li>
                        <li><Link to="/blog" >Blog</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="col-12 col-md-3 mb-3">
                <h4>Suivez nous</h4>
                <div>
                    <p>
                        Contact : <a href="mailto:contact-gad@gmail.com">contact-gad@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
        <hr className="border" />

        <div className="text-center" > <p>© 2025 GAD – Génie Alimentaire Durable. Tous droits réservés. <br /> Valoriser l'Afrique, nourrir demain.</p> </div>
          
    </CardFooter>
    )
}


export default Footer