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
                    <p className="mb-3 text-xl text-gray-300">(COMPLETAR AFUTURO ESTO MUCHO MAS) esto esta en app/routes/services </p>
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