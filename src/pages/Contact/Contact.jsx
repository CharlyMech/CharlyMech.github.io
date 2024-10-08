import { CMSubtitle, CMTitle } from '../../components/components.js';
import style from './Contact.module.css'
import links from '/src/models/SocialMedia.js'

export default function Contact() {

	const downloadByLocale = () => {
		const locale = (navigator.language || navigator.userLanguage).substring(0, 2);
		let cvPath;
		if (locale == 'es' || locale == 'ca') {
			cvPath = '/assets/cv/carlos_cv_ES.pdf';
		} else {
			cvPath = '/assets/cv/carlos_cv_EN.pdf';
		}

		const a = document.createElement('a');
		a.href = cvPath;
		a.download = cvPath.split('/').pop();
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);

		console.log("Thank you for downloading my CV! I hope you like the way I execute my programming skills :)");
	}
	return (
		<>
			<section className={style.Section}>
				<CMTitle>Contact me via:</CMTitle>
				<div>
					<ul className={style.ContactList}>
						{
							links.map((link, index) => (
								<a href={link.link} target={link.target} key={index} className={style.ContactItem}><li>
									<CMSubtitle fontSize={30} bold={false}>
										<span className={style.ItemContent}>
											<link.icon /> {link.name}
										</span>
									</CMSubtitle>
								</li></a>
							))
						}
					</ul>
				</div>
				<div className={style.CVDownloadButton} onClick={downloadByLocale}>
					<CMTitle fontSize={28}>Download my CV</CMTitle>
				</div>
			</section>
		</>
	);
}