import { useEffect, useState } from 'react';
import './Me.css';
import Info from './components/Info/Info';
import Box from './components/Box/Box';

function Me() {
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
  return (
    <div id="me" className="border-2 border-cyan-500 grid grid-cols-2 gap-1 w-full min-h-screen  ">
      <div className="border-1 flex items-center justify-center">
        {/* <Info profile={profile}></Info> */}
        <Box></Box>
      </div>
      <div className="border-1 flex items-center justify-center">
        <Info profile={profile}></Info>
      </div>
    </div>
  );
}
export default Me;
