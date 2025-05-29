import { Home, About, Contact, ProjectsSkills, NotFound } from '@pages/pages';
import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRouter = () => (

	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/contact" element={<Contact />} />
		<Route path="/projects-skills" element={<ProjectsSkills />} />
		<Route path="/not-found" element={<NotFound />} />

		{/* Catch-all route redirects to /not-found */}
		<Route path="*" element={<Navigate to="/not-found" replace />} />
	</Routes>

);