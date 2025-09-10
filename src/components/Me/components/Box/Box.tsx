import * as THREE from 'three';
import { useContext, useEffect, useRef, useState, type JSX } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { themeColors } from '../../../../utils/themColors';
import { useSpring, a } from '@react-spring/three';

export default function Box() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    console.log(theme);
    console.log(color);
  }, [theme]);

  const { color } = useSpring({
    color: themeColors[theme],
    config: { duration: 400 }, // animación de 0.4s
  });

  // Animación de rotación
  useFrame(() => {
    meshRef.current.rotation.y -= 0.003;
  });
  const { invalidate } = useThree();

  useEffect(() => {
    invalidate(); // fuerza el render y actualiza el raycasting
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), 100); // pequeño delay
    return () => clearTimeout(timeout);
  }, []);

  type FaceConfig = {
    position: [number, number, number];
    rotation: [number, number, number];
    content: JSX.Element;
  };

  const faces: FaceConfig[] = [
    {
      position: [0, 0, 1.01],
      rotation: [0, 0, 0],
      content: (
        <div className="border overflow-hidden" style={{ borderRadius: '100%', width: '100%' }}>
          <img src="src/assets/profile.jpg" alt="Profile" height={200} />
        </div>
      ),
    },
    {
      position: [1.01, 0, 0],
      rotation: [0, Math.PI / 2, 0],
      content: <div style={{ border: '1px solid white', width: '650px', textAlign: 'center', fontSize: '40px' }}>Descripcion sobre mi</div>,
    },
    {
      position: [0, 0, -1.01],
      rotation: [0, Math.PI, 0],
      content: (
        <div style={{ border: '1px solid white', width: '650px', textAlign: 'center', fontSize: '40px' }}>
          Datos personales... data persona
          <br />
          cumpleaños
          <br />
          lugar de nacimineto
          <br />
          estado civil
          <br />
          familia
        </div>
      ),
    },
    {
      position: [-1.01, 0, 0],
      rotation: [0, -Math.PI / 2, 0],
      content: <div style={{ border: '1px solid white', width: '650px', textAlign: 'center', fontSize: '40px' }}>datos de contacto telefon email instagram</div>,
    },
  ];
  return (
    <a.mesh ref={meshRef} castShadow>
      {/* Caja con esquinas redondeadas */}
      <RoundedBox args={[2, 3, 2]} radius={0.13} smoothness={4} castShadow>
        <a.meshStandardMaterial opacity={1} color={color} roughness={0.1} metalness={0.1} />
      </RoundedBox>

      {/* Contenido en cada cara */}
      {isReady &&
        faces.map(({ position, rotation, content }, i) => (
          <Html key={i} position={position} rotation={rotation} center occlude transform distanceFactor={1}>
            <div className="face-content">{content}</div>
          </Html>
        ))}
    </a.mesh>
  );
}
