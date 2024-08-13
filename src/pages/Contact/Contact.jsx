import { CMSubtitle, CMTitle } from '../../components/components.js';
import style from './Contact.module.css'
import links from '/src/models/SocialMedia.js'

export default function Contact() {

	const downloadByLocale = () => {
		const locale = (navigator.language || navigator.userLanguage).substring(0, 2);
		let cvPath;
		if (locale == 'es' || locale == 'ca') {
			cvPath = '/assets/cv/2024_carlos_cv_es.pdf';
		} else {
			cvPath = '/assets/cv/2024_carlos_cv_en.pdf';
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
			<section className={`${style.Section} ${style.Contact}`}>
				<CMTitle fontSize={38}>You can see all about what I do and contact me via:</CMTitle>
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
			</section>
			<section className={`${style.Section} ${style.Cv}`}>
				<div className={style.CVDownloadButton} onClick={downloadByLocale}>
					<CMTitle fontSize={28}>Download my CV</CMTitle>
				</div>
			</section>
		</>
	);
}