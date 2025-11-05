import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json();
		const { subject, category, email, description } = data;

		// Configura tu transportador de email
		// Aquí uso Gmail como ejemplo, pero puedes usar cualquier servicio
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: import.meta.env.EMAIL_USER, // Tu email
				pass: import.meta.env.EMAIL_PASS, // Tu contraseña de aplicación
			},
		});

		// Configuración del email
		const mailOptions = {
			from: import.meta.env.EMAIL_USER,
			to: import.meta.env.EMAIL_USER, // Tu email donde recibirás los mensajes
			subject: `Nuevo contacto: ${subject}`,
			html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Categoría:</strong> ${category}</p>
        <p><strong>Email del remitente:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Descripción:</strong></p>
        <p>${description.replace(/\n/g, "<br>")}</p>
      `,
			replyTo: email,
		};

		await transporter.sendMail(mailOptions);

		return new Response(
			JSON.stringify({ message: "Email enviado correctamente" }),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	} catch (error) {
		console.error("Error al enviar email:", error);
		return new Response(
			JSON.stringify({ message: "Error al enviar el email" }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
};
