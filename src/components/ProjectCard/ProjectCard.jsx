import PropTypes from 'prop-types';
import style from './ProjectCard.module.css';
import { CMTitle, CMSubtitle, IconedLabel } from '../components';
import { IoIosPulse } from 'react-icons/io';

function ProjectCard({ project }) {
	const techList = project['techs'];
	const linkList = project['links'];

	const showDialog = () => {
		console.log(`This will show a dialog about the ${project['title']} project`);
	}

	return (
		<>
			<div className={style.ProjectCard} onClick={showDialog}>
				<div className={style.ProjectImg}>
					<img src={project['imgSrc']} />
				</div>
				<div className={style.ProjectContent}>
					{project.developing && (
						<div className={style.ProjectStatus}>
							<span>Developing</span>
							<IoIosPulse className={style.PulseIcon} />
						</div>
					)}
					<CMTitle>{project['title']}</CMTitle>
					<div className={`${style.ProjectLabelsRow} ${style.ProjectTechs}`}>
						{techList.map((tech, index) =>
							<IconedLabel
								key={index}
								icon={tech['icon']}
								name={tech['name']}
								bgColor={tech['color']}
								borderRadius='1em'
							/>
						)}
					</div>
					<CMSubtitle bold={false} fontSize={16}>{project['shortDescr']}</CMSubtitle>
					<div className={`${style.ProjectLabelsRow} ${style.ProjectLinks}`}>
						{linkList.map((link, index) => <IconedLabel key={index} icon={link['type']['icon']} name={link['type']['name']} href={link['url']} />)}
					</div>
				</div>
			</div>
		</>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.shape({
		title: PropTypes.string.isRequired,
		developing: PropTypes.bool.isRequired,
		techs: PropTypes.arrayOf( // TechSkill
			PropTypes.shape({
				icon: PropTypes.elementType.isRequired,
				name: PropTypes.string.isRequired,
				expertise: PropTypes.number.isRequired,
				description: PropTypes.string.isRequired,
				color: PropTypes.string.isRequired,
			}).isRequired,
		).isRequired,
		shortDescr: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		links: PropTypes.arrayOf(
			PropTypes.shape({
				type: PropTypes.shape({
					icon: PropTypes.elementType.isRequired,
					name: PropTypes.string.isRequired,
				}).isRequired,
				url: PropTypes.string.isRequired,
			}).isRequired
		).isRequired,
		imgSrc: PropTypes.string.isRequired,
	}).isRequired,
}

export default ProjectCard;