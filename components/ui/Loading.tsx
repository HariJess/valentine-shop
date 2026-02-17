'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

type ModelProps = {
  path: string;
};

function HeartModel({ path }: ModelProps) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={2} />;
}

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* 3D Heart Model with React Three Fiber */}
        <div className="absolute inset-0 w-full h-full">
          <Canvas camera={{ position: [0, 0, 5] }} gl={{ toneMappingExposure: 2.5 }}>
            {/* Lumière ambiante très forte */}
            <ambientLight intensity={3.5} color="#ffffff" />
            
            {/* Lumière directionnelle avant */}
            <directionalLight position={[5, 5, 5]} intensity={3} color="#ffffff" />
            
            {/* Lumière directionnelle arrière */}
            <directionalLight position={[-5, -5, -5]} intensity={3} color="#ffffff" />
            
            {/* Lumière directionnelle haut */}
            <directionalLight position={[0, 10, 0]} intensity={2.5} color="#ffffff" />
            
            {/* Lumière de remplissage latérale gauche */}
            <pointLight position={[10, 0, 0]} intensity={3} color="#ffffff" />
            
            {/* Lumière de remplissage latérale droite */}
            <pointLight position={[-10, 0, 0]} intensity={3} color="#ffffff" />
            
            {/* Lumière de remplissage basse */}
            <pointLight position={[0, -5, 10]} intensity={2.5} color="#ffffff" />
            
            <Suspense fallback={null}>
              <HeartModel path="/loading/heart-cristal-3d.glb" />
              {/* <HeartModel path="/loading/cristal-3d.glb" /> */}
            </Suspense>
            <OrbitControls 
              autoRotate 
              autoRotateSpeed={8}
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </div>

        {/* Loading SVG - overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-full md:h-[400px]">
            <Image
              src="/loading/loading.svg"
              alt="Loading"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}