import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { BrevoClient } from "@getbrevo/brevo";

dotenv.config();

const app = express();

const PORT = 3000;

// =====================================================
// CONFIGURACIÓN
// =====================================================

const CORREO_SOFIEL = "Sofieltravel@outlook.es";

// =====================================================
// BREVO
// =====================================================

if (!process.env.BREVO_API_KEY) {
  console.error("❌ BREVO_API_KEY NO ESTÁ CONFIGURADA");
}

if (!process.env.BREVO_SENDER_EMAIL) {
  console.error("❌ BREVO_SENDER_EMAIL NO ESTÁ CONFIGURADO");
}

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

// =====================================================
// MIDDLEWARE
// =====================================================

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.use(express.json());

// =====================================================
// ESCAPAR HTML
// =====================================================

function escaparHTML(valor) {
  if (valor === null || valor === undefined) {
    return "";
  }

  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// =====================================================
// RUTA PRINCIPAL
// =====================================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend de Sofiel Travel funcionando ✈️",
  });
});

// =====================================================
// SOLICITUD DE VIAJE
// =====================================================

app.post("/api/solicitud-viaje", async (req, res) => {
  try {
    const {
      nombre,
      email,
      telefono,
      destino,
      fechaSalida,
      fechaRegreso,
      personas,
      presupuesto,
      tipoViaje,
      mensaje,
    } = req.body;

    // =================================================
    // VALIDACIONES
    // =================================================

    if (!nombre || !email || !telefono || !destino) {
      return res.status(400).json({
        success: false,
        message:
          "Nombre, correo, teléfono y destino son obligatorios.",
      });
    }

    // =================================================
    // VALIDAR EMAIL
    // =================================================

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "El correo electrónico no es válido.",
      });
    }

    // =================================================
    // LIMPIAR DATOS
    // =================================================

    const nombreSeguro = escaparHTML(nombre);
    const emailSeguro = escaparHTML(email);
    const telefonoSeguro = escaparHTML(telefono);
    const destinoSeguro = escaparHTML(destino);

    const fechaSalidaSeguro = escaparHTML(
      fechaSalida || "No especificada"
    );

    const fechaRegresoSeguro = escaparHTML(
      fechaRegreso || "No especificada"
    );

    const personasSeguro = escaparHTML(
      personas || "No especificado"
    );

    const presupuestoSeguro = escaparHTML(
      presupuesto || "No especificado"
    );

    const tipoViajeSeguro = escaparHTML(
      tipoViaje || "No especificado"
    );

    const mensajeSeguro = escaparHTML(
      mensaje || "Sin mensaje adicional"
    );

    // =================================================
    // HTML PARA LA AGENCIA
    // =================================================

    const htmlSolicitud = `
      <!DOCTYPE html>

      <html lang="es">

      <head>
        <meta charset="UTF-8">
        <title>Nueva solicitud de viaje</title>
      </head>

      <body style="
        margin:0;
        padding:20px;
        background:#f5f5f5;
        font-family:Arial,sans-serif;
      ">

        <div style="
          max-width:700px;
          margin:auto;
          background:#ffffff;
          border-radius:15px;
          overflow:hidden;
          box-shadow:0 5px 20px rgba(0,0,0,0.08);
        ">

          <!-- HEADER -->

          <div style="
            background:#fb7185;
            color:white;
            padding:30px;
          ">

            <h1 style="
              margin:0;
              font-size:28px;
            ">
              ✈️ Nueva solicitud de viaje
            </h1>

            <p style="
              margin:8px 0 0;
              font-size:16px;
            ">
              Sofiel Travel
            </p>

          </div>

          <!-- CONTENIDO -->

          <div style="padding:30px;">

            <h2 style="
              color:#315b54;
              margin-top:0;
            ">
              👤 Información del cliente
            </h2>

            <p>
              <strong>Nombre:</strong>
              ${nombreSeguro}
            </p>

            <p>
              <strong>Correo:</strong>
              ${emailSeguro}
            </p>

            <p>
              <strong>Teléfono / WhatsApp:</strong>
              ${telefonoSeguro}
            </p>

            <hr style="
              border:none;
              border-top:1px solid #eeeeee;
              margin:25px 0;
            ">

            <h2 style="color:#315b54;">
              🌎 Detalles del viaje
            </h2>

            <p>
              <strong>Destino:</strong>
              ${destinoSeguro}
            </p>

            <p>
              <strong>Fecha de salida:</strong>
              ${fechaSalidaSeguro}
            </p>

            <p>
              <strong>Fecha de regreso:</strong>
              ${fechaRegresoSeguro}
            </p>

            <p>
              <strong>Número de viajeros:</strong>
              ${personasSeguro}
            </p>

            <p>
              <strong>Presupuesto:</strong>
              ${presupuestoSeguro}
            </p>

            <p>
              <strong>Tipo de viaje:</strong>
              ${tipoViajeSeguro}
            </p>

            <hr style="
              border:none;
              border-top:1px solid #eeeeee;
              margin:25px 0;
            ">

            <h2 style="color:#315b54;">
              📝 Mensaje del cliente
            </h2>

            <div style="
              background:#f9fafb;
              padding:20px;
              border-radius:10px;
              color:#444444;
              white-space:pre-line;
            ">
              ${mensajeSeguro}
            </div>

          </div>

          <!-- FOOTER -->

          <div style="
            background:#f9fafb;
            padding:20px;
            text-align:center;
            color:#888888;
          ">

            <strong>Sofiel Travel ✈️</strong>

            <br>

            <span>
              Nueva solicitud recibida desde el formulario web.
            </span>

          </div>

        </div>

      </body>

      </html>
    `;

    // =================================================
    // 1. CORREO PARA LA AGENCIA
    // =================================================

    let correoSolicitudEnviado = false;
    let messageIdSolicitud = null;

    try {
      console.log("");
      console.log("📨 Enviando solicitud a la agencia...");
      console.log("Destino:", CORREO_SOFIEL);
      console.log("Cliente:", nombre);
      console.log("Email cliente:", email);

      const resultadoSolicitud =
        await brevo.transactionalEmails.sendTransacEmail({

          // ASUNTO
          subject:
            `✈️ Nueva solicitud de viaje - ${nombre}`,

          // =================================================
          // REMITENTE
          // =================================================
          // Este correo DEBE estar verificado en Brevo.

          sender: {
            name: "Sofiel Travel",
            email: process.env.BREVO_SENDER_EMAIL,
          },

          // =================================================
          // DESTINATARIO
          // =================================================
          // AQUÍ RECIBE LA AGENCIA.

          to: [
            {
              email: CORREO_SOFIEL,
              name: "Sofiel Travel",
            },
          ],

          // =================================================
          // REPLY-TO
          // =================================================
          // Si Sofía pulsa RESPONDER,
          // la respuesta irá al cliente.

          replyTo: {
            email: email,
            name: nombre,
          },

          htmlContent: htmlSolicitud,
        });

      correoSolicitudEnviado = true;

      messageIdSolicitud =
        resultadoSolicitud?.messageId || null;

      console.log("");
      console.log("====================================");
      console.log("✅ SOLICITUD AGENCIA ENVIADA");
      console.log("====================================");
      console.log("PARA:", CORREO_SOFIEL);
      console.log("CLIENTE:", nombre);
      console.log("CLIENTE EMAIL:", email);
      console.log("REPLY-TO:", email);
      console.log("MESSAGE ID:", messageIdSolicitud);
      console.log("====================================");
      console.log("");

    } catch (error) {

      console.error("");
      console.error("====================================");
      console.error("❌ ERROR ENVIANDO CORREO A AGENCIA");
      console.error("====================================");
      console.error(error);
      console.error("====================================");
      console.error("");
    }

    // =================================================
    // 2. CONFIRMACIÓN PARA EL CLIENTE
    // =================================================

    let confirmacionEnviada = false;
    let messageIdConfirmacion = null;

    try {

      const htmlConfirmacion = `
        <!DOCTYPE html>

        <html lang="es">

        <head>
          <meta charset="UTF-8">
          <title>Solicitud recibida</title>
        </head>

        <body style="
          margin:0;
          padding:20px;
          background:#f5f5f5;
          font-family:Arial,sans-serif;
        ">

          <div style="
            max-width:650px;
            margin:auto;
            background:white;
            border-radius:15px;
            overflow:hidden;
          ">

            <div style="
              background:#fb7185;
              color:white;
              padding:35px;
              text-align:center;
            ">

              <h1 style="
                margin:0;
                font-size:30px;
              ">
                ✈️ Sofiel Travel
              </h1>

              <p style="
                margin-bottom:0;
                font-size:16px;
              ">
                Hemos recibido tu solicitud
              </p>

            </div>

            <div style="padding:35px;">

              <h2 style="color:#315b54;">
                Hola ${nombreSeguro} 💗
              </h2>

              <p style="
                color:#444;
                font-size:16px;
                line-height:1.6;
              ">
                Muchas gracias por contactar con
                <strong>Sofiel Travel</strong>.
              </p>

              <p style="
                color:#444;
                font-size:16px;
                line-height:1.6;
              ">
                Hemos recibido correctamente tu solicitud
                de viaje. Revisaremos la información y nos
                pondremos en contacto contigo.
              </p>

              <div style="
                background:#f9fafb;
                padding:20px;
                border-radius:12px;
                margin-top:25px;
              ">

                <h3 style="
                  color:#315b54;
                  margin-top:0;
                ">
                  🌎 Resumen de tu solicitud
                </h3>

                <p>
                  <strong>Destino:</strong>
                  ${destinoSeguro}
                </p>

                <p>
                  <strong>Salida:</strong>
                  ${fechaSalidaSeguro}
                </p>

                <p>
                  <strong>Regreso:</strong>
                  ${fechaRegresoSeguro}
                </p>

                <p>
                  <strong>Viajeros:</strong>
                  ${personasSeguro}
                </p>

                <p>
                  <strong>Presupuesto:</strong>
                  ${presupuestoSeguro}
                </p>

                <p>
                  <strong>Tipo de viaje:</strong>
                  ${tipoViajeSeguro}
                </p>

              </div>

              <p style="
                margin-top:30px;
                color:#555;
                line-height:1.6;
              ">
                Si necesitas agregar alguna información,
                puedes responder directamente a este correo.
              </p>

              <div style="
                text-align:center;
                margin-top:35px;
              ">

                <p style="
                  font-size:24px;
                  color:#315b54;
                  font-weight:bold;
                  margin-bottom:5px;
                ">
                  Sofiel Travel
                </p>

                <p style="
                  color:#96735b;
                  letter-spacing:2px;
                ">
                  VIAJA · EXPLORA · VIVE
                </p>

              </div>

            </div>

          </div>

        </body>

        </html>
      `;

      const resultadoConfirmacion =
        await brevo.transactionalEmails.sendTransacEmail({

          subject:
            "✈️ Hemos recibido tu solicitud - Sofiel Travel",

          sender: {
            name: "Sofiel Travel",
            email: process.env.BREVO_SENDER_EMAIL,
          },

          // CLIENTE
          to: [
            {
              email: email,
              name: nombre,
            },
          ],

          // Si el cliente responde,
          // la respuesta va a la agencia.

          replyTo: {
            email: CORREO_SOFIEL,
            name: "Sofiel Travel",
          },

          htmlContent: htmlConfirmacion,
        });

      confirmacionEnviada = true;

      messageIdConfirmacion =
        resultadoConfirmacion?.messageId || null;

      console.log("");
      console.log("====================================");
      console.log("✅ CONFIRMACIÓN ENVIADA AL CLIENTE");
      console.log("====================================");
      console.log("PARA:", email);
      console.log("CLIENTE:", nombre);
      console.log(
        "MESSAGE ID:",
        messageIdConfirmacion
      );
      console.log("====================================");
      console.log("");

    } catch (error) {

      console.error("");
      console.error("====================================");
      console.error("⚠️ ERROR EN CONFIRMACIÓN");
      console.error("====================================");
      console.error(error);
      console.error("====================================");
      console.error("");
    }

    // =================================================
    // RESULTADO FINAL
    // =================================================

    if (!correoSolicitudEnviado) {

      return res.status(500).json({
        success: false,
        message:
          "No se pudo enviar la solicitud a Sofiel Travel.",
        correo: false,
        confirmacion: confirmacionEnviada,
      });

    }

    return res.status(200).json({

      success: true,

      message:
        "Solicitud enviada correctamente a Sofiel Travel.",

      correo: true,

      confirmacion: confirmacionEnviada,

      messageIdSolicitud,

      messageIdConfirmacion,
    });

  } catch (error) {

    console.error("");
    console.error("====================================");
    console.error("❌ ERROR GENERAL DEL SERVIDOR");
    console.error("====================================");
    console.error(error);
    console.error("====================================");
    console.error("");

    return res.status(500).json({

      success: false,

      message:
        "Error interno del servidor.",

      error:
        error?.message ||
        "Error desconocido.",
    });
  }
});

// =====================================================
// INICIAR SERVIDOR
// =====================================================

app.listen(PORT, () => {

  console.log("");

  console.log("====================================");
  console.log("✈️ SOFIEL TRAVEL BACKEND");
  console.log("====================================");

  console.log(
    `Servidor: http://localhost:${PORT}`
  );

  console.log(
    "Estado: FUNCIONANDO ✅"
  );

  console.log(
    process.env.BREVO_API_KEY
      ? "Brevo API Key: CARGADA ✅"
      : "Brevo API Key: NO CARGADA ❌"
  );

  console.log(
    process.env.BREVO_SENDER_EMAIL
      ? "Brevo Sender Email: CARGADO ✅"
      : "Brevo Sender Email: NO CARGADO ❌"
  );

  console.log(
    `Correo receptor: ${CORREO_SOFIEL}`
  );

  console.log(
    "WhatsApp: MODO NORMAL 📱"
  );

  console.log("====================================");

  console.log("");
});