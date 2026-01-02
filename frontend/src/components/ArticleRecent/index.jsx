import { Link } from "react-router-dom"

function ArticleRecent({  index, categorie,title, picture,minute,contenu,lien}){
    return (
        <div className="card rounded-3" style={{width: 380 }}>
            <img src={picture} className="card-img-top" alt="..." style={{height: 250 }} />
            <div className="card-body">
                <div>           
                    <p><span>{categorie}</span> {minute} min de lecture</p>
                </div>
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{contenu}</p>
            </div>

            <div className="card-body">
                <Link href="#" className="card-link">Lire la suite</Link>
            </div>
        </div>
    )
}


export default ArticleRecent