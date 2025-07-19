import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Estudiante de Ingenieria Civil en Computacion, Mencion informatica <br />
                        <TypeAnimation
                            sequence={[
                                'Habilidades en Software Engineer con enfoque en IA',
                                1000,
                                'Habilidades en Machine Learning',
                                1000,
                                'Habilidades en Data Engineering con enfoque en IA',
                                1000,
                                'Habilidad en idiomas (Español, Aleman, Ingles)',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Como Ingeniero de Software con enfoque en IA, me especializo en diseñar y desplegar soluciones inteligentes que integran modelos de Machine Learning en aplicaciones escalables. Combino habilidades en Data Engineering para construir pipelines robustos y dominio multilingüe (español, alemán, inglés) para colaborar en entornos globales. Mi pasión es transformar datos en productos funcionales que optimicen procesos y generen impacto real.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="https://github.com/PabloDeCristoC" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Proyectos
                        </a>
                        <a href="https://drive.google.com/file/d/1EE1bss-PrM4Ot7sJ987yexKKNxgQtgDD/view?usp=sharing"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            CV + CONTACTO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;