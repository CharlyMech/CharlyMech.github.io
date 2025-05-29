import { Home, About, Contact, ProjectsSkills } from '@pages/pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/projects-skills" element={<ProjectsSkills />} />
		</Routes>
	</BrowserRouter>
);