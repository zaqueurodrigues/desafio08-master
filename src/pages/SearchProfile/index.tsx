import axios from "axios";
import { useState } from "react";
import ButtonIcon from "../../components/ButtonIcon";
import { Profile } from "../../types/profile";
import Info from "./Info";
import "./styles.css";

type FormData = {
  name: string;
};

const SearchProfile = () => {
  const url_base = "https://api.github.com/users/";

  const [profile, setProfile] = useState<Profile>();

  const [formData, setFormData] = useState<FormData>({
    name: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData( { name: event.target.value})
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.get(url_base +formData.name).then((response => {
        setProfile(response.data);
    })).catch((error) => {
        setProfile(undefined);
    });
  };

  return (
    <div className="search-container">
      <div className="card-search">
        <form onSubmit={handleSubmit}>
          <h6>Encontre um perfil Github</h6>
          <input
            name="name"
            value={formData.name}
            type="text"
            placeholder="Usuário Github"
            onChange={handleChange}
          />
          <ButtonIcon text="Encontrar" />
        </form>
      </div>
      { (profile &&
      <Info profile={profile} />)
      }
    </div>
  );
};

export default SearchProfile;
