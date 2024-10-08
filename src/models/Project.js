import { ProjectLink, ProjectLinkType } from './ProjectLink';
import { languages, frameworks } from './TechSkill.js';

class Project {
	constructor(title, developing, techs, shortDescr, description, links, imgSrc) {
		this.title = title;
		this.developing = developing;
		this.techs = techs;
		this.shortDescr = shortDescr;
		this.description = description;
		this.links = links;
		this.imgSrc = imgSrc;
	}
}

const projects = [
	new Project('Flutter Kitchen',
		true,
		[languages['dart'], frameworks['flutter']],
		"Flutter packages test field to list my most liked packages or test new ones.",
		"TODO",
		[new ProjectLink(ProjectLinkType.GITHUB, "")],
		"/assets/img/projects/flutter_kitchen_project_box.png"),
	new Project('FlutterDex',
		true,
		[languages['dart'], frameworks['flutter']],
		"Pokemon themed cross-platform app to display several pokemon data like items, region information, etc.",
		"TODO",
		[new ProjectLink(ProjectLinkType.GITHUB, "https://github.com/CharlyMech/FlutterDex")],
		"/assets/img/projects/flutterdex_project_box.png"),
	new Project(
		'GengarAPI',
		true,
		[languages['typescript'], frameworks['nestjs']],
		'API designed to provide data for FlutterDex app. PokeAPI as data source, this API acts as a data formatter.',
		"TODO",
		[new ProjectLink(ProjectLinkType.GITHUB, 'https://github.com/CharlyMech/gengar-api')],
		'/assets/img/projects/gengarapi_project_box.png'),
	new Project(
		'ToBook App',
		false,
		[languages['java']],
		'Swing UI app to mark favourite and read books from a catalog. First "full" Java program.',
		'TODO',
		[new ProjectLink(ProjectLinkType.GITHUB, 'https://github.com/CharlyMech/ToBook-App')],
		'/assets/img/projects/tobook_app.png'),
]

export { projects };