// import { useEffect, useState } from 'react';
import './Info.css';
type InfoProps = {
  profile: Profile | null;
};
function Info({ profile }: InfoProps) {
  console.log(profile);
  if (!profile) {
    return <h2>No se encontraron los datos</h2>;
  }

  return (
    <div>
      Me {profile.name}
      MI TITULO
      <br />
      Desarrollador Full stack
      <br />
      boton de contacto (lleva abajo) boton de telefono
      <br />
      botonera de redes sociales
    </div>
  );
}

export default Info;
