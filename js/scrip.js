const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');
const sunIcon = document.querySelector('.toggle .bxs-sun');
const moonIcon = document.querySelector('.toggle .bx-moon');

toggle.addEventListener("change", () => {
	body.classList.toggle("dark");
	sunIcon.className = sunIcon.className == 'bx bxs-sun' ? 'bx bx-sun' : 'bx bxs-sun';
	moonIcon.className = moonIcon.className == 'bx bxs-moon' ? 'bx bx-moon' : 'bx bxs-moon';
})

function showContent(section) {
	switch (section) {
		case ('intro'):
			// INTRO 
			document.getElementById('section-content').innerHTML = `
			<h1 style="text-align: center; margin-bottom: 5%">
						Hello World <span id="moving-hand">&#128075;</span>!
					</h1>
					<p>
						I'm a programming student from Spain. Currently studing
						Multiplatform Applications Development (DAM) at CESUR in
						Mallorca.
					</p>
					<br />
					<div
						style="text-align: center; font-size: larger"
						class="container-fluid w-50"
					>
						When I start a project I like to do it all from scratch and
						trying to solve real life problems.
					</div>
			`;
			break;
		case ('exp'):
			// EXPERIENCE
			document.getElementById('section-content').innerHTML = `
			<ul>
						<li>Frutas Javier</li>
						<div class="row w-75 my-2">
							<div class="col-1"></div>
							<div class="col-3">
								<i class="fa-solid fa-truck"></i> Deliveryman
							</div>
							<div class="col-2">
								<i class="fa-solid fa-location-dot"></i> Ibiza
							</div>
							<div class="col-4">
								<i class="fa-solid fa-calendar"></i> 2022 (summer
								season)
							</div>
							<div class="col-2"></div>
						</div>
						<li>Exclusivas miró</li>
						<div class="row w-75 my-2">
							<div class="col-1"></div>
							<div class="col-3">
								<i class="fa-solid fa-truck"></i> Deliveryman
							</div>
							<div class="col-2">
								<i class="fa-solid fa-location-dot"></i> Ibiza
							</div>
							<div class="col-4">
								<i class="fa-solid fa-calendar"></i> 2016-2021 (summer
								seasons)
							</div>
							<div class="col-2"></div>
						</div>
					</ul>
			`;
			break;
		case ('deg'):
			// EXPERIENCE
			document.getElementById('section-content').innerHTML = `<ul><li>DAM (Higher Education Certificate) - <b>Currently Studying</b></li><div class='row w-75 my-2'><div class='col-1'></div><div class='col-3'><i class='fa-solid fa-bookmark'></i> CESUR</div><div class='col-2'><i class='fa-solid fa-location-dot'></i> Mallorca</div><div class='col-4'><i class='fa-solid fa-calendar'></i> 2022 - 2024 (expected)</div><div class='col-2'></div> </div> <li>ASIR (Higher Education Certificate)</li> <div class='row w-75 my-2'> <div class='col-1'></div> <div class='col-3'> <i class='fa-solid fa-bookmark'></i> IES Sa Colomina </div> <div class='col-2'> <i class='fa-solid fa-location-dot'></i> Ibiza </div> <div class='col-4'> <i class='fa-solid fa-calendar'></i> 2020 - 2022
				</div>
				<div class='col-2'></div>
			</div>
			<li>Bachillerato (General Certificate of Education)</li>
			<div class='row w-75 my-2'>
				<div class='col-1'></div>
				<div class='col-3'>
					<i class='fa-solid fa-bookmark'></i> IES Algarb
				</div>
				<div class='col-2'>
					<i class='fa-solid fa-location-dot'></i> Ibiza
				</div>
				<div class='col-4'>
					<i class='fa-solid fa-calendar'></i> 2015 - 2017
				</div>
				<div class='col-2'></div>
			</div>
		</ul>`;
			break;
		case ('skill'):
			document.getElementById('section-content').innerHTML = `
			<h3 style="text-decoration: underline">Languages</h3>
					<ul class="w-75">
						<div class="row">
							<div class="col-6"></div>
							<div class="col-1 text-end" style="font-size: small">
								Bad
							</div>
							<div class="col-2" style="font-size: small"></div>
							<div class="col-1 text-start" style="font-size: small">
								Native
							</div>
							<div class="col-2"></div>
						</div>
						<li>
							<div class="row">
								<div class="col-6">Spanish</div>
								<div class="col-4 text-center">
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
								</div>
								<div class="col-2"></div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-6">Catalan</div>
								<div class="col-4 text-center">
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
								</div>
								<div class="col-2 text-start">B2</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-6">English</div>
								<div class="col-4 text-center">
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
								</div>
								<div class="col-2"></div>
							</div>
						</li>
					</ul>

					<h3 style="text-decoration: underline">Technical Skills</h3>
					<ul class="w-75">
						<div class="row">
							<div class="col-6"></div>
							<div class="col-1 text-end" style="font-size: small">
								Bad
							</div>
							<div class="col-2" style="font-size: small"></div>
							<div class="col-1 text-start" style="font-size: small">
								Expert
							</div>
							<div class="col-2"></div>
						</div>
						<li>
							<div class="row">
								<div class="col-6">HTML/CSS/JS</div>
								<div class="col-4 text-center">
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
								</div>
								<div class="col-2"></div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-6">PHP</div>
								<div class="col-4 text-center">
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
								</div>
								<div class="col-2"></div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-6">Python</div>
								<div class="col-4 text-center">
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
								</div>
								<div class="col-2"></div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-6">Java</div>
								<div class="col-4 text-center">
									<i class="fa-regular fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
								</div>
								<div class="col-2" style="font-size: small">
									(<b>Currently Studying</b>)
								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-6">
									Operating Systems Administration
								</div>
								<div class="col-4 text-center">
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-solid fa-circle"></i>
									<i class="fa-regular fa-circle"></i>
								</div>
								<div class="col-2"></div>
							</div>
						</li>
					</ul>
					<h3 style="text-decoration: underline">Non Technical Skills</h3>
					<ul class="w-75">
						<li>Receptiveness</li>
						<li>Respectful</li>
						<li>Problem Solving Skills</li>
						<li>Learning Capacity</li>
						<li>Good Attitude</li>
					</ul>
			`;
			break;
		case ('about'):
			// ABOUT ME
			document.getElementById('section-content').innerHTML = `
			<h3 style="text-decoration: underline">My Coding Journey</h3>
			<p>My coding journey started by taking computers classes in high school ( <a href='http://iesalgarb.es/'>IES Algarb</a> ) and learning electronic circuits and logic gates alongside some TurboPascal and JavaScript. Ever since I knew I like computers.</p> 
			<p>I took 3 years of Physics in Balearic Islands\' University ( <a href='https://estudis.uib.es/es/estudis-de-grau/grau/fisica/GFIS-P/'>Physics degree UIB</a> ) but I realized that wasn\'t for me, so I came back to my early hobby and started to study computers. More specifically, networking and Operating Systems administration ( <a href='https://legacy.iessacolomina.es/images/departaments/informatica/triptic_ASIX.pdf'>ASIR</a> ). While I was studying it, the subjects that I liked the most were related with coding, then so I decided to specialized myself in this specific field from technology.</p>
			<p>Nowadays I am studing Multiplatform Applications Development ( <a href='https://www.cesurformacion.com/fp/desarrollo-de-aplicaciones-multiplataforma'>DAM</a> ) in CESUR Mallorca.</p> 
			<p>Throughout this academic path, I have been learning on my own programming basics and other technologies such as Operating Systems, how networks work, etc.</p>

			<details style='margin-top:8%'>
				<summary  style="text-decoration: underline; font-size: x-large;">
					More About me!
				</summary>
					<ul>
					   <li><b>What inspires me to code?</b></li> I love to make things by myself and as I like them to be. A default software can be good but I always want to make them more personal. Also, the abbility to share my code with the community and see more flavours or realize about errors I didn't count on gets me more excited.
						<li><b>Why did I decided to study programming?</b></li> As I said, I want to create my own things, however small is the idea I get super excited for the possibility of creating things and sharing them. 
						<li><b>A phrase that defines me?</b></li> It's difficult to reduce a whole person to a single phrase. I would say that 'respectful' and 'knowledge hungry' are two expressions that define me quite well. However there is a phrase from the United States SEAL, that I find very motivational that I always keep in mind: 'The only easy day was Yesterday'.
					</ul>
			</details>
			`;
			break;
	}
}