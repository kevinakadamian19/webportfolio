function createHome() {
	let home = `
	<header><a href="" id="home-button">Kevin Damian Ta</a></header>
  	<div role="main" class="main">
  		<section id="headline">
  			<h1>Welcome!</h1>
  			<p>An aspiring Full Stack Engineer by day, and Leage of Legends enthusiast by night.</p>
  			<p>Take a look some of my work here!</p>
  		</section>
  		<section id="projects">
  			<h1>Projects</h1>
  			<input type="image" src="projects.jpg" name="project-button" id="project-button">
  		</section>
  		<section id="bio">
  			<h1>About Me</h1>
  			<input type="image" src="bio.jpg" name="bio-button" id="bio-button">
  		</section>
  	</div>
  	<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
  </body>`;

  return home;
}

function clickHome() {
	$('body').on('click', '#home-button', function(event) {
		
	});
}

function  createProject() {
	let create = `
  	<div role="main" class="main">
  		<section id="project-one">
  			<h1>Pokemon Quiz App</h1>
  			<a href="https://kevinakadamian19.github.io/pokemon-master-quiz-app/"><img src="quizproject.jpg"></a>
  			<p>
  				I made a 6 question quiz that asks questions Pokemon trivia questions.
  				I used HTML, CSS, and Javascript implmenting jQuery for DOM manipulation.
  			</p>
  		</section>
  		<section id="tbd">
  			<h1>New Projects Coming Soon!</h1>
  		</section>
  	</div>`;

  return create;
};

function clickProject() {

 $('.main').on('click', '#project-button', function(event) {
 	$('.main').remove();
 	$('body').append(createProject());
 });
}

function createBio() {
	let bio = `
<div role="main" class="main">
  		<section id="headshot-photo">
  		<img src="fullheadline.jpg" alt="Headshot photo of me; Kevin Damian Ta">
  		</section>
  		<section id="bio-description">
  			<p> 
  				I am a web developer that is currently attending the Full Stack Flex program offered by Thinkful. 
  				On my downtime I enjoy playing Magic The Gathering, watching the Golden State Warriors, and compete in powerlifting. 
  				I love seafood, chicken wings, and all things Anime related.
  			</p>
  		</section>
  		<section id="social-media">
  			<ul class="social-media-links">
				<li><a href="https://github.com/kevinakadamian19"><img src="github.jpg"></a></li>
				<li><a href="https://www.linkedin.com/in/kevindamianta/"><img src="linkedin.jpg"></a></li>
			</ul>
  		</section>
  	</div>`;

  	return bio;
}

function clickBio() {

$('.main').on('click', '#bio-button', function(event) {
 	$('.main').remove();
 	$('body').append(createBio());

 });
}

function renderPage() {
	clickBio();
	clickProject();
	clickHome();
}

renderPage();



function viewHome() {
	$('.main').on('click', '#home-button', function(event) {
		$('.main').remove();
	});

}

function viewProjects() {

}

function viewAboutMe() {

}

function renderPortfolio() {

}

renderPortfolio();