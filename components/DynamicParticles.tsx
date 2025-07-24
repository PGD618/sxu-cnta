import dynamic from 'next/dynamic';

const DynamicParticles = dynamic(() => import('@/components/ParticlesBackground'), {
    ssr: false,
});

export default DynamicParticles;