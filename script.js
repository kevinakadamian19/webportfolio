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
          <a href="https://github.com/kevinakadamian19/pokemon-master-quiz-app" id="project-one-repo" target="_blank"><img src="github.jpg" alt="Link to github repository for the Pokemon Master Quiz project."></a>
        </section>
        <section id="tbd">
          <h1>New Projects Coming Soon!</h1>
        </section>
      </div>
      
      <div role="main" class="main">
        <section id="project-one">
          <h1>MTG Card Generator</h1>
          <a href="https://kevinakadamian19.github.io/MTG-Card-Generator/"><img src="mtgmain.jpg"></a>
          <p>
            I made a web application that returns Magic the Gathering cards based on user input.
            I used HTML, CSS, and Javascript implmenting jQuery for DOM manipulation.
          </p>
          <a href="https://github.com/kevinakadamian19/MTG-Card-Generator" id="project-one-repo" target="_blank"><img src="github.jpg" alt="Link to github repository for the MTG Card generator web application."></a>
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
        <section id="bio-pic">
        <img src="power.jpg" alt="Headshot photo of me; Kevin Damian Ta">
        </section>
        <section id="bio-description">
          <p>
            I am a web developer that is currently attending the Full Stack Flex program offered by Thinkful.
            I am also working full time for FutureAdvisor which is a FinTech startup that is a subsidiary under BlackRock.
          </p>
          <p>
            I have experienced the growth pains of a successful company, and hope to bring the knowledge I have to my next team.
            My current goal is to gain enough experience to work for Riot Games as I have been an avid League of Legends player for the past 7 years.
          </p>
          <p>
            On my downtime I enjoy playing Magic The Gathering, watching the Golden State Warriors, and compete in powerlifting. 
            I am a Year Up alumni, and enjoy spending time closing the opportunity divide by promoting the program's mission to inform the masses.
            If granted the opportunity, I love to present as I was a member of BlackRock's Toastmaster's club and am also a regular attendee of The Moth Live Sessions.
          </p>
        </section>
        <section id="social-media">
          <a href="mailto:kevindamianta@gmail.com">Want to get in touch? Shoot me an email!</a>
          <ul class="social-media-links">
          <li><a href="https://github.com/kevinakadamian19" target="_blank"><img src="github.jpg" alt="Github logo that will take you to my Github profile when selected."></a></li>
          <li><a href="https://www.linkedin.com/in/kevindamianta/" target="_blank"><img src="linkedin.jpg" alt="LinkedIn logo that will take you to my LinkedIn profile when selected"></a></li>
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