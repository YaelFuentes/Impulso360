/* const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/api/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Configura el transporter para enviar correos electrónicos
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Cambia a tu proveedor de correo electrónico
    auth: {
      user: 'yaelfuentes32@gmail.com', // Cambia a tu dirección de correo electrónico
      pass: 'jaoqwdtgleyotthi', // Cambia a tu contraseña
    },
  });

  const mailOptions = {
    from: 'yaelfuentes32@gmail.com', // Cambia a tu dirección de correo electrónico
    to: 'n.juanignacio99@gmail.com', // Cambia al destinatario del correo
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true });
    }
  });
});

// Inicia el servidor en el puerto 3001 o cualquier otro de tu elección
app.listen(8081, () => {
  console.log('Server running on http://localhost:3001');
}); */