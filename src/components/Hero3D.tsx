import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// FloatingShape Component
function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// ParticleField Component
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// AnimatedText Component
function AnimatedText() {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={textRef}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          XplnHUB
          <meshStandardMaterial
            color="#00ffff"
            emissive="#0088ff"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </mesh>
    </Float>
  );
}

// Main Hero3D Component
function Hero3D() {
  return (
    <div className="w-full h-full fixed top-0 left-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingShape position={[-2, 0, 0]} color="#00ffff" />
        <FloatingShape position={[2, 1, -1]} color="#ff00ff" />
        <FloatingShape position={[0, -1, 1]} color="#ffff00" />
        <ParticleField />
        <Suspense fallback={null}>
          <AnimatedText />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Sparkles
          count={100}
          size={2}
          speed={0.1}
          opacity={0.6}
          scale={20}
          color="#00ffff"
        />
      </Canvas>
    </div>
  );
}

export default Hero3D;