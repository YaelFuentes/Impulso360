import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Configura el transporter para enviar correos electrónicos
    const transporter = nodemailer.createTransport({
      
      host: process.env.HOST_SERVICE, // Cambia a tu proveedor de correo electrónico
      port: process.env.PORT,
      secure: true,
      /* secureConnection: false, */
      auth: {
        user: process.env.USER_MAIL, // Cambia a tu dirección de correo electrónico
        pass: process.env.PASS_MAIL, // Cambia a tu contraseña de aplicación
      },
      
    });

    const mailOptions = {
      from: 'contacto@agenciaimpulso360.com', // Cambia a tu dirección de correo electrónico
      to: 'contacto@agenciaimpulso360.com', // Cambia al destinatario del correo
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nCorreo electrónico: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Correo enviado:', info.response);
      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
