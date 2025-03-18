import { Loader } from "lucide-react";
import dumbell from "@/assets/dumbell.png";

const Loading = () => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gradient-to-b from-primary/90 to-primary animate-gradient">
      <div className="flex flex-col sm:flex-row w-full max-w-md sm:max-w-3xl items-center justify-center gap-48 sm:gap-8">
        {/* Logo con animación de rebote */}
        <div className="flex items-center justify-center w-full sm:w-1/2 mb-0 animate-bounce-slow">
          <img
            src={dumbell}
            alt="Logo"
            className="w-40 sm:w-48 transform transition-all hover:scale-110"
          />
        </div>

        {/* Separador visible solo en pantallas pequeñas */}
        <div className="block sm:hidden w-32 h-px bg-white/50 my-4" />
        <div className="hidden sm:block h-32 w-px bg-white/50 mx-4" />

        {/* Loader */}
        <div className="flex items-center justify-center w-full sm:w-1/2 flex-1">
          <Loader className="w-16 h-16 spin-pulse text-white" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
