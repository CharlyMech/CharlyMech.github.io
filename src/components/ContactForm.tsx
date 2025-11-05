import { useState } from 'react';
import { PaperPlaneIcon } from '@phosphor-icons/react';

interface FormData {
	subject: string;
	category: string;
	email: string;
	description: string;
}

const categories = [
	'Desarrollo Móvil',
	'Desarrollo Web',
	'Consultoría',
	'Data & IA',
	'Otro'
];

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		subject: '',
		category: '',
		email: '',
		description: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({ subject: '', category: '', email: '', description: '' });
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
			<div>
				<label
					htmlFor="subject"
					className="block text-sm font-medium text-shade-700 dark:text-shade-300 mb-2"
				>
					Asunto *
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					required
					value={formData.subject}
					onChange={handleChange}
					className="w-full px-4 py-3 bg-shade-100 dark:bg-shade-800 border border-shade-300 dark:border-shade-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all text-shade-900 dark:text-shade-50"
					placeholder="¿En qué puedo ayudarte?"
				/>
			</div>

			<div>
				<label
					htmlFor="category"
					className="block text-sm font-medium text-shade-700 dark:text-shade-300 mb-2"
				>
					Categoría *
				</label>
				<select
					id="category"
					name="category"
					required
					value={formData.category}
					onChange={handleChange}
					className="w-full px-4 py-3 bg-shade-100 dark:bg-shade-800 border border-shade-300 dark:border-shade-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all text-shade-900 dark:text-shade-50"
				>
					<option value="">Selecciona una categoría</option>
					{categories.map(cat => (
						<option key={cat} value={cat}>{cat}</option>
					))}
				</select>
			</div>

			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-shade-700 dark:text-shade-300 mb-2"
				>
					Email *
				</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					value={formData.email}
					onChange={handleChange}
					className="w-full px-4 py-3 bg-shade-100 dark:bg-shade-800 border border-shade-300 dark:border-shade-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all text-shade-900 dark:text-shade-50"
					placeholder="tu@email.com"
				/>
			</div>

			<div>
				<label
					htmlFor="description"
					className="block text-sm font-medium text-shade-700 dark:text-shade-300 mb-2"
				>
					Descripción *
				</label>
				<textarea
					id="description"
					name="description"
					required
					value={formData.description}
					onChange={handleChange}
					rows={6}
					className="w-full px-4 py-3 bg-shade-100 dark:bg-shade-800 border border-shade-300 dark:border-shade-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all resize-none text-shade-900 dark:text-shade-50"
					placeholder="Cuéntame más sobre tu proyecto..."
				/>
			</div>

			{submitStatus === 'success' && (
				<div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 rounded-lg text-green-800 dark:text-green-200">
					¡Mensaje enviado correctamente! Te responderé lo antes posible.
				</div>
			)}

			{submitStatus === 'error' && (
				<div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 rounded-lg text-red-800 dark:text-red-200">
					Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
				</div>
			)}

			<button
				type="submit"
				disabled={isSubmitting}
				className="w-full px-6 py-4 bg-primary-400 hover:bg-primary-300 disabled:bg-shade-400 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
			>
				{isSubmitting ? (
					<>
						<span className="animate-spin">⏳</span>
						Enviando...
					</>
				) : (
					<>
						<PaperPlaneIcon size={20} weight="bold" />
						Enviar mensaje
					</>
				)}
			</button>
		</form>
	);
}