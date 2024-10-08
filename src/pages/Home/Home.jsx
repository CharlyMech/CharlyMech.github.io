import { RivePhone, CMTitle, CMSubtitle, TypeWriter } from '/src/components/components';
import style from './Home.module.css';

function Home() {

	return (
		<>
			<section className={style.Section}>
				<div className={style.HomeContent}>
					<div className={style.HomeRivePhone}><RivePhone /></div>
					<div className={style.HomeWelcomeContent}>
						<div className={style.HomeWelcomeTitles}>
							<div className={style.Titles}>
								<CMTitle fontSize={112}>Hello</CMTitle>
								<CMTitle fontSize={72}><TypeWriter height={72} color='#FAFAFA' /></CMTitle>
							</div>
							<img className={style.HomeWelcomeHand} src="/assets/img/wave_hand.png" alt="Wave hand" />
						</div>
						<CMSubtitle>My name is Carlos, I am a mobile app software developer based in Spain with expertise in back-end development.</CMSubtitle>
						<br />
						<CMSubtitle>Enjoy exploring my skills, projects and experience!</CMSubtitle>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home