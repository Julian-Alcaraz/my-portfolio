import { useEffect, useState } from 'react';
import './Me.css';

function Me() {
  interface Profile {
    name: string;
    bio: string;
    // podés agregar más campos si los tenés
  }

  const [profile, setProfile] = useState<Profile | null>(null);

  // const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfileInfo();
  }, []);

  // function getProfileInfo() {
  //   fetch(`../data/profile`)
  //     .then((res) => res.json()) // ← Aquí convertís la respuesta a JSON
  //     .then((data) => {
  //       console.log(data);
  //       setProfile(data); // ← Ahora sí, seteás el objeto correctamente
  //     })
  //     .catch((err) => console.log(err));
  // }

  async function getProfileInfo() {
    try {
      const res = await fetch('http://localhost:5173/my-portfolio/src/data/profile.json');
      const data = await res.json();
      setProfile(data);
      console.log(data);
    } catch (error) {
      console.error('Error al cargar el perfil:', error);
    }
  }

  useEffect(() => console.log(profile), [profile]);
  if (!profile) {
    return (
      <>
        <h2>No se encontraron los datos</h2>
      </>
    );
  }
  return (
    <div className=" min-h-100 ">
      Me
      {profile?.name}
    </div>
  );
}
export default Me;
