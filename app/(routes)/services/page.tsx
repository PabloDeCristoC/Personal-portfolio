import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Deslizar en la derecha, Mis <span className="font-bold text-secondary"> Habilidades.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Desarrollo de software con integración de IA (APIs, microservicios, arquitecturas escalables) Machine Learning end-to-end (entrenamiento, optimización y despliegue de modelos con TensorFlow/PyTorch) Ingeniería de datos avanzada (pipelines ETL, procesamiento distribuido con Spark, cloud solutions) Comunicación técnica multilingüe (español, alemán, inglés) Transformo algoritmos en productos reales que automatizan procesos, generan insights accionables y crean experiencias adaptativas - siempre con código limpio, arquitecturas robustas y soluciones éticas de IA.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Web© by PabloDeCristo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;