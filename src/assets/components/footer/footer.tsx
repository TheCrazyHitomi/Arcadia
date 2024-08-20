import Newsletter from "./newsletter";

const Footer: React.FC = () =>{

    return (
        <>
        <div className="footer">
            <div className="footerContent">
                <div className="mentions">
                    <a href="">Conditions générales de vente</a>
                    <a href="">Mentions légales</a>
                    <a href="">Politique de confidentialité</a>
                </div>
                <Newsletter />
                
            </div>
        </div>
        </>
    );

};

export default Footer;