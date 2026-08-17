// Archivo: SofiaTravelCard.jsx

import {
  FaWhatsapp,
  FaEnvelope,
  FaClipboardList,
  FaInfoCircle,
  FaGlobe,
  FaGift,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import { MdFlightTakeoff } from "react-icons/md";

import Perfil from "../src/img/perfil.jpeg";
import Ws from "../src/img/ws.jpeg";
import Ms from "../src/img/ms.jpeg";
import Wd from "../src/img/word.jpeg";

// =====================================================
// FOTOS DEL COLLAGE
// =====================================================

const collageImages = [
  {
    image: Ws,
    className:
      "absolute left-[-35px] top-[-20px] w-[190px] h-[230px] rotate-[-8deg]",
  },
  {
    image: Ms,
    className:
      "absolute left-[145px] top-[-55px] w-[180px] h-[210px] rotate-[7deg]",
  },
  {
    image: Wd,
    className:
      "absolute right-[-30px] top-[-25px] w-[190px] h-[230px] rotate-[8deg]",
  },
  {
    image: Ws,
    className:
      "absolute left-[-20px] bottom-[-20px] w-[180px] h-[210px] rotate-[5deg]",
  },
  {
    image: Ms,
    className:
      "absolute right-[0px] bottom-[-30px] w-[190px] h-[220px] rotate-[-7deg]",
  },
];

// =====================================================
// MENÚ
// =====================================================

const menuItems = [
  {
    icon: <FaWhatsapp />,
    iconColor: "bg-green-500",
    title: "Escríbeme por WhatsApp",
    subtitle: "Hablemos sobre tu próximo viaje",
    image: Ws,

    // WhatsApp funciona directamente, sin necesidad
    // de conectar la API de WhatsApp al backend.
    link:
      "https://wa.me/34640302254?text=Hola%20Sof%C3%ADa%20%F0%9F%98%8A%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20para%20organizar%20mi%20viaje%20%E2%9C%88%EF%B8%8F",
  },

  {
    icon: <FaEnvelope />,
    iconColor: "bg-blue-500",
    title: "Mándame un correo",
    subtitle: "Estoy aquí para ayudarte",
    image: Ms,
    link: "mailto:Sofieltravel@outlook.es",
  },

  {
    icon: <FaClipboardList />,
    iconColor: "bg-rose-400",
    title: "Rellena el formulario",
    subtitle: "Cuéntame tu viaje ideal",
    image: Wd,
    link: "/AddForm",
  },

  {
    icon: <FaInfoCircle />,
    iconColor: "bg-cyan-600",
    title: "¿Quieres más información?",
    subtitle: "Descubre destinos, paquetes y más",
    image: Ws,
    link: "#informacion",
  },

  {
    icon: <FaGlobe />,
    iconColor: "bg-purple-500",
    title: "Mi web de viajes",
    subtitle: "Todos los viajes, ofertas y servicios",
    image: Ms,
    link: "https://www.evotravelagent.com/sofieltravel",
  },

  {
    icon: <FaGift />,
    iconColor: "bg-rose-400",
    title: "Guía de Tips de Viajes GRATIS",
    subtitle: "Consejos y recomendaciones según mi experiencia 💗",
    image: Wd,
    link: "#guia",
  },
];

// =====================================================
// COMPONENTE
// =====================================================

const SofiaTravelCard = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden text-slate-800">

      {/* =================================================
          FONDO
      ================================================= */}

      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage: `url(${Ms})`,
        }}
      />

      {/* Capa blanca */}

      <div className="fixed inset-0 bg-white/75 backdrop-blur-[1px] -z-10" />

      {/* =================================================
          CONTENEDOR PRINCIPAL
      ================================================= */}

      <main className="relative w-full max-w-[760px] mx-auto px-5 py-8 md:px-8">

        {/* =================================================
            COLLAGE SUPERIOR
        ================================================= */}

        <section className="relative h-[390px] md:h-[430px] flex justify-center items-center">

          {collageImages.map((photo, index) => (
            <div
              key={index}
              className={`
                ${photo.className}
                overflow-hidden
                rounded-xl
                bg-white
                p-2
                shadow-xl
                transition-transform
                duration-500
                hover:scale-105
              `}
            >
              <img
                src={photo.image}
                alt="Destino turístico"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}

          {/* =================================================
              FOTO CENTRAL
          ================================================= */}

          <div className="relative z-20 mt-8">

            <div className="
              w-[205px]
              h-[205px]
              md:w-[225px]
              md:h-[225px]
              rounded-full
              bg-white
              p-[7px]
              shadow-2xl
            ">

              <img
                src={Perfil}
                alt="Sofía Travel"
                className="w-full h-full object-cover rounded-full"
              />

            </div>

          </div>

        </section>

        {/* =================================================
            NOMBRE
        ================================================= */}

        <section className="text-center mt-[-15px] relative z-30">

          <h1
            className="
              text-[48px]
              md:text-[60px]
              leading-none
              font-normal
              text-[#315b54]
              tracking-wide
            "
            style={{
              fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            Sofía Travel
          </h1>

          {/* Línea decorativa */}

          <div className="flex justify-center items-center gap-2 mt-2">

            <span className="w-12 h-[1px] bg-[#315b54]/60" />

            <span className="text-[#315b54] text-lg">
              ♡
            </span>

            <span className="w-12 h-[1px] bg-[#315b54]/60" />

          </div>

          {/* Slogan */}

          <p className="
            mt-4
            text-[13px]
            md:text-[15px]
            tracking-[4px]
            text-[#96735b]
            font-medium
          ">
            VIAJA · EXPLORA · VIVE
          </p>

          {/* =================================================
              DESCRIPCIÓN
          ================================================= */}

          <div className="mt-7">

            <p className="
              text-[20px]
              md:text-[22px]
              text-slate-700
              leading-relaxed
            ">
              Te ayudo a planear
            </p>

            <p className="
              text-[20px]
              md:text-[22px]
              text-slate-700
              leading-relaxed
              flex
              items-center
              justify-center
              gap-2
            ">
              tu próximo viaje

              <MdFlightTakeoff className="
                text-sky-500
                text-2xl
              " />

            </p>

          </div>

        </section>

        {/* =================================================
            BOTONES
        ================================================= */}

        <section className="mt-8 space-y-4">

          {menuItems.map((item, index) => {

            const esExterno =
              item.link.startsWith("http");

            return (
              <a
                key={index}
                href={item.link}

                target={
                  esExterno
                    ? "_blank"
                    : undefined
                }

                rel={
                  esExterno
                    ? "noopener noreferrer"
                    : undefined
                }

                className="
                  group
                  relative
                  flex
                  items-center
                  w-full
                  min-h-[105px]
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                  border
                  border-white/80
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                "
              >

                {/* =================================================
                    ICONO
                ================================================= */}

                <div className="
                  relative
                  z-20
                  flex-shrink-0
                  ml-4
                  md:ml-5
                ">

                  <div
                    className={`
                      ${item.iconColor}
                      w-[58px]
                      h-[58px]
                      md:w-[64px]
                      md:h-[64px]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-white
                      text-[27px]
                      shadow-md
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    `}
                  >
                    {item.icon}
                  </div>

                </div>

                {/* =================================================
                    TEXTO
                ================================================= */}

                <div className="
                  relative
                  z-20
                  flex-1
                  min-w-0
                  ml-4
                  md:ml-5
                  pr-2
                ">

                  <h2 className="
                    text-[16px]
                    md:text-[18px]
                    font-bold
                    text-slate-800
                    leading-tight
                  ">
                    {item.title}
                  </h2>

                  <p className="
                    text-[13px]
                    md:text-[15px]
                    text-slate-600
                    mt-1
                    leading-tight
                  ">
                    {item.subtitle}
                  </p>

                </div>

                {/* =================================================
                    IMAGEN DERECHA
                ================================================= */}

                <div className="
                  absolute
                  right-0
                  top-0
                  h-full
                  w-[45%]
                  md:w-[42%]
                  overflow-hidden
                ">

                  <img
                    src={item.image}
                    alt=""
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  {/* Degradado */}

                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-white
                    via-white/50
                    to-transparent
                  " />

                </div>

                {/* =================================================
                    FLECHA
                ================================================= */}

                <div className="
                  relative
                  z-30
                  mr-4
                  md:mr-5
                  flex-shrink-0
                ">

                  <svg
                    className="
                      w-6
                      h-6
                      text-white
                      drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />

                  </svg>

                </div>

              </a>
            );
          })}

        </section>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="
          text-center
          mt-12
          pb-8
        ">

          <p
            className="
              text-[27px]
              md:text-[32px]
              text-[#315b54]
            "
            style={{
              fontFamily:
                "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            Viaja. Vive. Recuerda.
          </p>

          <div className="
            text-[#315b54]
            text-3xl
            mt-2
          ">
            ♡
          </div>

          {/* =================================================
              REDES SOCIALES
          ================================================= */}

          <div className="
            flex
            justify-center
            items-center
            gap-8
            mt-5
          ">

            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                text-[#315b54]
                text-[27px]
                transition-all
                hover:scale-125
                hover:text-pink-500
              "
            >
              <FaInstagram />
            </a>

            {/* TIKTOK */}

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="
                text-[#315b54]
                text-[27px]
                transition-all
                hover:scale-125
                hover:text-black
              "
            >
              <FaTiktok />
            </a>

          </div>

          {/* =================================================
              INFORMACIÓN
          ================================================= */}

          <p className="
            text-xs
            text-gray-400
            mt-6
          ">
            © {new Date().getFullYear()} Sofía Travel
          </p>

        </footer>

      </main>

    </div>
  );
};

export default SofiaTravelCard;