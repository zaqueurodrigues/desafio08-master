import { Link } from "react-router-dom";
import ButtonIcon from "../../components/ButtonIcon";
import './styles.css';

const Home = () => {

    return(
        <div className="home-container">
            <div className="home-content">
                
                <h1>Desafio Github API</h1>
                <h3>Bootcamp Spring React - DevSuperior</h3>
                <Link to="/search">
                    <ButtonIcon text="Começar" />
                </Link>
            </div>
        </div>
    );
}

export default Home;