// import './Box.css';
import * as THREE from 'three';
// function Box() {
//   return <>BOX</>;
// }

// export default Box;
// Cube.tsx
import { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function Box() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Animación de rotación
  useFrame(() => {
    meshRef.current.rotation.y += 0.001;
  });
  const { invalidate } = useThree();

  useEffect(() => {
    invalidate(); // fuerza el render y actualiza el raycasting
  }, []);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), 100); // pequeño delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[2, 3, 2]} />
      <meshStandardMaterial opacity={1} attach="material-0" color="lightblue" />
      <meshStandardMaterial opacity={1} attach="material-1" color="lightgreen" />
      <meshStandardMaterial opacity={1} attach="material-2" color="lightcoral" />
      <meshStandardMaterial opacity={1} attach="material-3" color="lightgoldenrodyellow" />
      <meshStandardMaterial opacity={1} attach="material-4" color="lightsalmon" />
      <meshStandardMaterial opacity={1} attach="material-5" color="lightgray" />

      {/* Contenido en cada cara */}
      {isReady && (
        <Html position={[0, 0, 1.01]} center occlude transform distanceFactor={1.5}>
          <div className="flex justify-center flex-col" style={{ width: '533px', textAlign: 'center', alignContent: 'center', alignItems: 'center', border: 'solid 1px black' }}>
            🌐 Front: Portfolio
            <div className="border  overflow-hidden" style={{ borderRadius: '100%', width: '90%' }}>
              <img src="src/assets/profile.jpg" alt="Profile" height={200} />
            </div>
          </div>
        </Html>
      )}
      {isReady && (
        <Html position={[1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]} center occlude transform>
          <div style={{ width: '100px', textAlign: 'center' }}>🧠 Right: Skills</div>
        </Html>
      )}
      {isReady && (
        <Html position={[0, 0, -1.01]} rotation={[0, Math.PI, 0]} center occlude transform distanceFactor={1.5}>
          <div style={{ width: '100px', textAlign: 'center' }}>📁 Back: Projects</div>
        </Html>
      )}
      {isReady && (
        <Html position={[-1.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]} center occlude>
          <div style={{ width: '100px', textAlign: 'center' }}>📞 Left: Contact</div>
        </Html>
      )}
      {/* <Html position={[0, 1.01, 0]} rotation={[-Math.PI / 2, 0, 0]} center>
        <div style={{ width: '100px', textAlign: 'center' }}>👋 Top: About Me</div>
      </Html> */}
      {/* <Html position={[0, -1.01, 0]} rotation={[Math.PI / 2, 0, 0]} center>
        <div style={{ width: '100px', textAlign: 'center' }}>🛠️ Bottom: Tools</div>
      </Html> */}
    </mesh>
  );
}
