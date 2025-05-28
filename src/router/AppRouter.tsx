import App from '../App';
import { About, Contact, ProjectsSkills } from '@pages/pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/about" element={<About />} />
			<Route path="/" element={<App />} />
			<Route path="/" element={<App />} />
			{/* <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} /> */}
		</Routes>
	</BrowserRouter>
);