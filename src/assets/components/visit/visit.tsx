import React from "react";

const VisitAnim: React.FC =() =>{

    return(
        <>
            <div className="visitComponent">
                <div className="visitTxt">
                    <h1>Pour une visite <br/> plus dynamique</h1>
                    <h3>découvrez le parc avec notre meilleur accompagnement, adapté a vos attentes.</h3>
                </div>
                <div className="visitPics">
                    <div className="animPics">
                        <h2 className="animTxt">Visite guidée avec un membre<br/>de notre equipe</h2>
                        <img className="animPic" src="./image/isaac-chou-CYqh_2Vju1E-unsplash.jpg" alt="" />
                    </div>
                    <div className="animPics">
                        <h2 className="animTxt">Visite à bord<br/>de notre petit train</h2>
                        <img className="animPic" src="./image/FrontCards/animationPic.jpg"  alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitAnim;