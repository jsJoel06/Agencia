import {
  FaPlaneDeparture,
  FaSuitcaseRolling,
  FaWallet,
  FaHotel,
  FaPassport,
  FaShieldAlt,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

function GuiaViajes() {
  const consejos = [
    {
      icon: <FaPlaneDeparture />,
      numero: "01",
      titulo: "Planifica tu viaje",
      descripcion:
        "Define tu destino, fechas y prioridades con anticipación para conseguir mejores opciones.",
      categoria: "Planificación",
    },
    {
      icon: <FaSuitcaseRolling />,
      numero: "02",
      titulo: "Prepara tu equipaje",
      descripcion:
        "Organiza tu maleta de forma inteligente y lleva todo lo necesario sin cargar de más.",
      categoria: "Equipaje",
    },
    {
      icon: <FaWallet />,
      numero: "03",
      titulo: "Controla tu presupuesto",
      descripcion:
        "Establece un presupuesto y distribuye tus gastos entre vuelos, alojamiento, comida y actividades.",
      categoria: "Ahorro",
    },
    {
      icon: <FaHotel />,
      numero: "04",
      titulo: "Elige el alojamiento ideal",
      descripcion:
        "Compara ubicación, servicios, opiniones y precio antes de elegir dónde hospedarte.",
      categoria: "Alojamiento",
    },
    {
      icon: <FaPassport />,
      numero: "05",
      titulo: "Revisa tus documentos",
      descripcion:
        "Comprueba que tu pasaporte, visas y demás documentos estén vigentes antes de viajar.",
      categoria: "Documentación",
    },
    {
      icon: <FaShieldAlt />,
      numero: "06",
      titulo: "Viaja con tranquilidad",
      descripcion:
        "Mantén tus documentos seguros y considera un seguro de viaje para estar preparado.",
      categoria: "Seguridad",
    },
    {
      icon: <FaMobileAlt />,
      numero: "07",
      titulo: "Usa la tecnología",
      descripcion:
        "Descubre aplicaciones que pueden ayudarte con mapas, traducción, transporte y reservas.",
      categoria: "Tecnología",
    },
    {
      icon: <FaMapMarkedAlt />,
      numero: "08",
      titulo: "Conoce tu destino",
      descripcion:
        "Investiga el clima, moneda, transporte, cultura y lugares que quieres visitar.",
      categoria: "Destino",
    },
  ];

  return (
    <section
      id="guia-de-viajes"
      className="relative overflow-hidden bg-[#fafafa] py-24 px-4"
    >
      {/* DECORACIÓN */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-60" />

      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto">

        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">

          <div>

            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaStar />
              GUÍA GRATUITA PARA VIAJEROS
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Viaja mejor.
              <br />

              <span className="text-rose-400">
                Disfruta más.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-gray-500 text-lg leading-relaxed max-w-xl lg:ml-auto">
              Antes de emprender tu próxima aventura, descubre nuestros
              consejos para organizar tu viaje de manera sencilla,
              segura y sin complicaciones.
            </p>

          </div>

        </div>

        {/* ========================================= */}
        {/* MINI ESTADÍSTICAS */}
        {/* ========================================= */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-3xl font-bold text-gray-900">
              08
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Consejos esenciales
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-3xl font-bold text-gray-900">
              100%
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Guía gratuita
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-3xl font-bold text-gray-900">
              ✈️
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Pensada para viajeros
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-3xl font-bold text-gray-900">
              💗
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Consejos de Sofiel
            </p>
          </div>

        </div>

        {/* ========================================= */}
        {/* TÍTULO CONSEJOS */}
        {/* ========================================= */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">

          <div>

            <p className="text-sm font-semibold text-rose-400 uppercase tracking-widest mb-2">
              Antes de despegar
            </p>

            <h3 className="text-3xl font-bold text-gray-900">
              Todo lo que necesitas saber
            </h3>

          </div>

          <p className="text-gray-400 text-sm">
            Guarda esta guía para tu próximo viaje ✈️
          </p>

        </div>

        {/* ========================================= */}
        {/* CONSEJOS */}
        {/* ========================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {consejos.map((consejo) => (

            <article
              key={consejo.numero}
              className="group relative bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* NÚMERO */}

              <span className="absolute top-6 right-6 text-xs font-bold text-gray-200 group-hover:text-rose-200 transition">
                {consejo.numero}
              </span>

              {/* ICONO */}

              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-400 flex items-center justify-center text-xl mb-6 group-hover:bg-rose-400 group-hover:text-white transition-all duration-300">
                {consejo.icon}
              </div>

              {/* CATEGORÍA */}

              <span className="text-xs font-semibold text-rose-400 uppercase tracking-wide">
                {consejo.categoria}
              </span>

              {/* TÍTULO */}

              <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                {consejo.titulo}
              </h4>

              {/* DESCRIPCIÓN */}

              <p className="text-gray-500 text-sm leading-relaxed">
                {consejo.descripcion}
              </p>

              {/* LINK VISUAL */}

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-rose-400 transition">

                <span>
                  Ver consejo
                </span>

                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />

              </div>

            </article>

          ))}

        </div>

        {/* ========================================= */}
        {/* TIP DESTACADO */}
        {/* ========================================= */}

        <div className="mt-16 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* IZQUIERDA */}

            <div className="bg-gradient-to-br from-rose-400 to-rose-500 p-8 md:p-12 text-white">

              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl mb-7">
                💡
              </div>

              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">
                Consejo de Sofiel
              </p>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Un buen viaje comienza mucho antes de subir al avión.
              </h3>

              <p className="mt-5 text-white/85 leading-relaxed">
                Dedica unos minutos a organizar tus documentos,
                presupuesto y reservas. Una buena planificación
                puede hacer que disfrutes mucho más de tu experiencia.
              </p>

            </div>

            {/* DERECHA */}

            <div className="p-8 md:p-12">

              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Checklist antes de viajar
              </h4>

              <div className="space-y-4">

                {[
                  "Pasaporte y documentos vigentes",
                  "Vuelos y alojamiento confirmados",
                  "Equipaje preparado",
                  "Presupuesto organizado",
                  "Seguro de viaje revisado",
                  "Información del destino guardada",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >

                    <FaCheckCircle className="text-rose-400 flex-shrink-0" />

                    <span className="text-gray-600 text-sm">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* ========================================= */}
        {/* CTA */}
        {/* ========================================= */}

        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-12">

          <div className="absolute top-0 right-0 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">

            <div className="text-center lg:text-left">

              <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-3">
                ¿Listo para viajar?
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Ahora hagamos realidad tu viaje. ✈️
              </h3>

              <p className="text-gray-400 mt-3 max-w-xl">
                Cuéntanos qué tienes en mente y Sofiel Travel
                te ayudará a encontrar una opción pensada para ti.
              </p>

            </div>

            <a
              href="/AddForm"
              className="flex-shrink-0 inline-flex items-center gap-3 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-7 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Planificar mi viaje

              <FaArrowRight />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GuiaViajes;