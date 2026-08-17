import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    destino: "",
    fechaSalida: "",
    fechaRegreso: "",
    personas: "1",
    presupuesto: "",
    tipoViaje: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEnviando(true);
    setEnviado(false);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:3000/api/solicitud-viaje",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "No se pudo enviar la solicitud."
        );
      }

      setEnviado(true);

      // Limpiar formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        destino: "",
        fechaSalida: "",
        fechaRegreso: "",
        personas: "1",
        presupuesto: "",
        tipoViaje: "",
        mensaje: "",
      });

    } catch (err) {
      console.error(err);

      setError(
        err.message ||
          "Ocurrió un error al enviar la solicitud."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="formulario"
      className="w-full min-h-screen py-16 px-4 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center mb-10">

          <span className="inline-block bg-rose-100 text-rose-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✈️ Planifica tu próximo viaje
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Cuéntame tu viaje ideal
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Completa el formulario con los detalles de tu viaje
            y me pondré en contacto contigo para ayudarte a
            encontrar la mejor opción.
          </p>

        </div>

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-10"
        >

          {/* INFORMACIÓN DE CONTACTO */}
          <div className="mb-8">

            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Información de contacto
            </h3>

            <p className="text-sm text-gray-400 mb-5">
              Necesito estos datos para poder contactarte.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo *
                </label>

                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej. Sofía Rodríguez"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono / WhatsApp *
                </label>

                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+34 640 30 22 54"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destino *
                </label>

                <input
                  type="text"
                  name="destino"
                  value={formData.destino}
                  onChange={handleChange}
                  placeholder="Ej. París, Punta Cana, Nueva York..."
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

            </div>
          </div>

          {/* DETALLES DEL VIAJE */}
          <div className="mb-8">

            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Detalles del viaje
            </h3>

            <p className="text-sm text-gray-400 mb-5">
              Cuéntame cómo quieres que sea tu experiencia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de salida
                </label>

                <input
                  type="date"
                  name="fechaSalida"
                  value={formData.fechaSalida}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de regreso
                </label>

                <input
                  type="date"
                  name="fechaRegreso"
                  value={formData.fechaRegreso}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de viajeros
                </label>

                <select
                  name="personas"
                  value={formData.personas}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300"
                >
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5">5 personas</option>
                  <option value="6">6 personas</option>
                  <option value="7">7 personas</option>
                  <option value="8">8+ personas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Presupuesto aproximado
                </label>

                <select
                  name="presupuesto"
                  value={formData.presupuesto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300"
                >
                  <option value="">
                    Selecciona una opción
                  </option>

                  <option value="US$500 - US$1,000">
                    US$500 - US$1,000
                  </option>

                  <option value="US$1,000 - US$2,000">
                    US$1,000 - US$2,000
                  </option>

                  <option value="US$2,000 - US$3,000">
                    US$2,000 - US$3,000
                  </option>

                  <option value="US$3,000 - US$5,000">
                    US$3,000 - US$5,000
                  </option>

                  <option value="Más de US$5,000">
                    Más de US$5,000
                  </option>
                </select>
              </div>

            </div>
          </div>

          {/* TIPO DE VIAJE */}
          <div className="mb-8">

            <label className="block text-sm font-medium text-gray-700 mb-2">
              ¿Qué tipo de viaje buscas?
            </label>

            <select
              name="tipoViaje"
              value={formData.tipoViaje}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option value="">
                Selecciona una opción
              </option>

              <option value="Vacaciones">
                Vacaciones
              </option>

              <option value="Luna de miel">
                Luna de miel
              </option>

              <option value="Viaje familiar">
                Viaje familiar
              </option>

              <option value="Viaje en pareja">
                Viaje en pareja
              </option>

              <option value="Aventura">
                Aventura
              </option>

              <option value="Viaje de negocios">
                Viaje de negocios
              </option>

              <option value="Crucero">
                Crucero
              </option>

              <option value="Otro">
                Otro
              </option>
            </select>

          </div>

          {/* MENSAJE */}
          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cuéntame más sobre tu viaje
            </label>

            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="5"
              placeholder="Cuéntame qué te gustaría hacer, qué hotel buscas, qué actividades te interesan..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-rose-300 resize-none"
            />

          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            disabled={enviando}
            className={`w-full mt-8 text-white font-semibold py-4 rounded-xl transition duration-300 shadow-md ${
              enviando
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-rose-400 hover:bg-rose-500"
            }`}
          >
            {enviando
              ? "⏳ Enviando solicitud..."
              : "✈️ Enviar solicitud de viaje"}
          </button>

          {/* ÉXITO */}
          {enviado && (
            <div className="mt-5 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-center">

              <p className="font-semibold">
                ¡Solicitud enviada correctamente! ✈️
              </p>

              <p className="text-sm mt-1">
                Hemos recibido tu solicitud y nos pondremos
                en contacto contigo pronto.
              </p>

            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="mt-5 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-center">

              <p className="font-semibold">
                No se pudo enviar la solicitud
              </p>

              <p className="text-sm mt-1">
                {error}
              </p>

            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-4">
            Tus datos serán utilizados únicamente para contactarte
            sobre tu solicitud de viaje.
          </p>

        </form>
      </div>
    </section>
  );
}

export default Form;