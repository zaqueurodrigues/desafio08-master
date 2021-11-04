import { Profile } from "../../../types/profile";
import "./styles.css";

type Props = {
    profile: Profile;
}

const Info = ( {profile}: Props) => {
  return (
    <div className="info-container">
      <div className="img-container">
        <img
          src={profile.avatar_url}
          alt={profile.name}
        ></img>
      </div>

      <div className="info-content">
        <h5>Informações</h5>
        <div className="line">
          <span className="field-line"> Perfil: </span>
          <span className="description-line">
            {profile.url}
          </span>
        </div>
        <div className="line">
          <span className="field-line">Seguidores: </span>
          <span className="description-line"> {profile.followers} </span>
        </div>
        <div className="line">
          <span className="field-line">Localidade: </span>
          <span className="description-line"> {profile.location} </span>
        </div>
        <div className="line">
          <span className="field-line">Nome: </span>
          <span className="description-line"> {profile.name} </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
