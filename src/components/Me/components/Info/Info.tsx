// import { useEffect, useState } from 'react';
import './Info.css';
type InfoProps = {
  profile: Profile | null;
};
function Info({ profile }: InfoProps) {
  if (!profile) {
    return <h2>No se encontraron los datos</h2>;
  }

  return <div>Me {profile.name}</div>;
}

export default Info;
