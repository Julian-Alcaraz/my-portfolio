import { Suspense, useEffect, useState } from 'react';
import './Me.css';
import Info from './components/Info/Info';
import Box from './components/Box/Box';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Me() {
  const [profile, setProfile] = useState<Profile | null>(null);

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
        <Canvas style={{ height: '100%' }} frameloop="always" shadows camera={{ position: [4, 4, 4], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 0]} intensity={1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <OrbitControls
            enableZoom={false} // ❌ Desactiva zoom
            enablePan={false} // ❌ Desactiva desplazamiento
            minPolarAngle={Math.PI / 2} // 🔒 Limita rotación vertical (Y)
            maxPolarAngle={Math.PI / 2} // 🔒 Fija rotación vertical (Y)
            minAzimuthAngle={-Infinity} // ✅ Permite rotar horizontalmente
            maxAzimuthAngle={Infinity}
          />
          <Suspense fallback={null}>ojects
          
            <Box></Box>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -2.0, 0]} // ajustá según la altura del cubo
              receiveShadow
            >
              <planeGeometry args={[10, 10]} />
              <shadowMaterial opacity={0.3} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      <div className="border-1 flex items-center justify-center">
        <Info profile={profile}></Info>
      </div>
    </div>
  );
}
export default Me;
