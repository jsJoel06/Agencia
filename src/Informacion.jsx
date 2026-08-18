import {
  FaPlaneDeparture,
  FaHotel,
  FaMapMarkedAlt,
  FaWallet,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function Informacion() {
  const servicios = [
    {
      icon: <FaPlaneDeparture />,
      titulo: "Vuelos",
      descripcion:
        "Te ayudamos a encontrar opciones de vuelos que se adapten a tu destino y fechas.",
    },
    {
      icon: <FaHotel />,
      titulo: "Alojamiento",
      descripcion:
        "Encuentra hoteles y alojamientos seleccionados según tus necesidades.",
    },
    {
      icon: <FaMapMarkedAlt />,
      titulo: "Destinos",
      descripcion:
        "Descubre destinos ideales para vacaciones, parejas, familias o aventuras.",
    },
    {
      icon: <FaWallet />,
      titulo: "Según tu presupuesto",
      descripcion:
        "Buscamos alternativas que se ajusten al presupuesto que tienes disponible.",
    },
  ];

  const beneficios = [
    "Atención personalizada",
    "Opciones adaptadas a tus necesidades",
    "Asesoría durante la planificación",
    "Información clara y sin complicaciones",
  ];

  const irAlFormulario = () => {
    document
      .getElementById("formulario")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="informacion"
      className="relative w-full overflow-hidden bg-white py-20 px-4 md:py-28"
    >
      {/* DECORACIÓN */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-60" />

      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="inline-flex items-center gap-2 bg-rose-100 text-rose-500 px-5 py-2 rounded-full text-sm font-semibold">
            <FaPlaneDeparture />
            Sofiel Travel
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            ¿Quieres más información
            <span className="text-rose-400">?</span>
          </h2>

          <p className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed">
            Estamos aquí para ayudarte a convertir tu próximo viaje
            en una experiencia sencilla, organizada y especial.
          </p>

        </div>

        {/* BLOQUE PRINCIPAL */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* IZQUIERDA */}
          <div className="bg-gradient-to-br from-rose-400 via-rose-400 to-pink-500 rounded-[2rem] p-8 md:p-10 text-white shadow-xl">

            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-7">
              ✈️
            </div>

            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Cuéntanos qué viaje
              <br />
              tienes en mente
            </h3>

            <p className="mt-5 text-white/90 leading-relaxed">
              Dinos el destino que deseas visitar, tus fechas,
              presupuesto y el tipo de experiencia que buscas.
              Nosotros nos encargamos de ayudarte a encontrar
              las mejores opciones.
            </p>

            {/* BENEFICIOS */}
            <div className="mt-7 space-y-3">

              {beneficios.map((beneficio, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-white shrink-0" />

                  <span className="text-sm md:text-base">
                    {beneficio}
                  </span>
                </div>
              ))}

            </div>

            {/* BOTONES */}
            <div className="flex flex-col sm:flex-row gap-3 mt-9">

              <button
                onClick={irAlFormulario}
                className="flex items-center justify-center gap-2 bg-white text-rose-500 font-bold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-md"
              >
                Solicitar información
                <FaArrowRight />
              </button>

              <a
                href="https://wa.me/34640302254"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-green-600 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>

            </div>

          </div>

          {/* DERECHA */}
          <div>

            <div className="mb-7">

              <p className="text-rose-400 font-semibold text-sm uppercase tracking-wider">
                Todo lo que necesitas
              </p>

              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-800">
                Te ayudamos a planificar cada detalle
              </h3>

              <p className="mt-4 text-gray-500 leading-relaxed">
                Desde la elección del destino hasta el alojamiento,
                queremos que tengas toda la información necesaria
                para tomar la mejor decisión.
              </p>

            </div>

            {/* SERVICIOS */}
            <div className="grid sm:grid-cols-2 gap-5">

              {servicios.map((servicio, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-400 flex items-center justify-center text-xl mb-5 group-hover:bg-rose-400 group-hover:text-white transition-all duration-300">
                    {servicio.icon}
                  </div>

                  <h4 className="font-bold text-gray-800 text-lg">
                    {servicio.titulo}
                  </h4>

                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {servicio.descripcion}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* PARTE INFERIOR */}
        <div className="mt-14 bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="text-center md:text-left">

            <h3 className="font-bold text-gray-800 text-lg">
              ¿Tienes alguna pregunta?
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Escríbenos y estaremos encantados de ayudarte.
            </p>

          </div>

          <a
            href="https://wa.me/34640302254"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            <FaWhatsapp className="text-green-400 text-xl" />
            Contactar ahora
          </a>

        </div>

      </div>
    </section>
  );
}

export default Informacion;