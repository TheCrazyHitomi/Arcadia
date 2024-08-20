import React from "react";

const VisitAnim: React.FC =() =>{

    return(
        <>
            <div className="visitComponent">
                <div className="visitTxt">
                    <h2>Pour une visite <br/> plus dynamique</h2>
                    <h3>bla bla bla</h3>
                </div>
                <div className="visitPics">
                    <div className="animPics">
                        <h2 className="animTxt">blob</h2>
                        <img className="animPic" src="src/assets/image/isaac-chou-CYqh_2Vju1E-unsplash.jpg" alt="" />
                    </div>
                    <div className="animPics">
                        <h2 className="animTxt">plop</h2>
                        <img className="animPic" src="src/assets/image/FrontCards/animationPic.jpg"  alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitAnim;