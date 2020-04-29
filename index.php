<?php
echo'
<!DOCTYPE html>
<html class="no-js" lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Jacob Biederman</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
        <link rel="stylesheet" href="libs/font-awesome/css/font-awesome.min.css">
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/styles.css" rel="stylesheet">
    </head>
    <body id="plain">
    <div id="mobile-menu-open" class="shadow-large">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <!-- End #mobile-menu-toggle -->
    <header class="sticky">
            <div id="mobile-menu-close">
                <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <ul id="menu" class="shadow">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#eruntexperience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#" class="no-scroll" id="startGame">Play!</a>
                </li>
                <li><a href="https://www.jacobb.me/blog" class="no-scroll">Blog</a></li>
            </ul>
        </header>
        <!-- End header -->
';
echo'
        <div id="score" class="modal modal-score">
            <div class="content score-content">
            </div> 
        </div>
        <!-- End modal-score -->
        <div class="modal play-modal" id="play-modal">
            <div class="content">
                <button id="play-single">Play Single Player</button>
            </br>
                <p id="connection-id">12345</p>
                <p id="title">Enter Opponents Code:</p>
                <input name="ID" id="ID"></input>
                <button id="connect">Connect</button>
                <button id="start-game">Start Game</button>
            </div>
        </div>
        <!-- End play-modal -->
        <div id="lead">
            <div id="lead-content">
                <h1>Jacob Biederman</h1>
                <h2>Game Programmer and Software Engineer</h2>
                <a href="JacobBiedermanResume.pdf" class="btn-rounded-white">Download Resume</a>
            </div>
            <!-- End #lead-content -->

            <div id="lead-overlay"></div>

            <div id="lead-down">
                <span>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
            </div>
            <!-- End #lead-down -->
        </div>
        <!-- End #lead -->

        <div id="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h2 class="heading">About Me</h2>
                    </div>
                    <div class="col-md-8">
                        <p>
                            I’m a coder majoring in Game Programming with experience working in frontend
                            development from two internships at
                            Fidelity Investments. I love clean, readable code. In my free time I like bicycling and (big
                            surprise here) video games.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End #about -->

        <div id="experience" class="background-alt">
            <h2 class="heading">Experience</h2>
            <div id="experience-timeline">
                <div data-date="June 2019 – August 2019">
                    <h3>Fidelity Investments</h3>
                    <h4>Technical Intern</h4>
                    <ul>
                        <li>Created an app to check API dependencies to help troubleshoot problems.</li>
                        <li>Onboarded onto a scrum team of full-time developers.</li>
                        <li>Learned test driven development, end to end testing, and jQuery.</li>
                        <li>Led a winning hackathon team developing a financial literacy game.</li>
                    </ul>
                </div>

                <div data-date="June 2018 – August 2018">
                    <h3>Fidelity Investments</h3>
                    <h4>Technical Intern</h4>
                    <ul>
                        <li>Created a machine learning app to analyze customer feedback.</li>
                        <li>Experienced large-scale Agile practices.</li>
                        <li>Learned HTML, CSS, Angular, and Python.</li>
                        <li>Learned from industry professionals.</li>
                    </ul>
                </div>

                <div data-date="June 2017 – August 2017">
                    <h3>United Dairy Farmers</h3>
                    <h4>Store Clerk</h4>
                    <ul>
                        <li>Interacted with and remembered customers names and drink preferences.</li>
                        <li>Made milkshakes and served ice cream.</li>
                        <li>Handled gas spills.</li>
                        <li>Cleaned and maintained the store.</li>
                    </ul>
                </div>
                <div data-date="June 2017 – August 2017">
                    <h3>Krogers</h3>
                    <h4>Fuel Station Attendant</h4>
                    <ul>
                        <li>Resolved gas spills and other problems.</li>
                        <li>Cleaned and maintained the pumps and kiosk.</li>
                        <li>Closed at night including counting the till, checking and managing the change stockpile, and
                            locking up for the night.</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- End #experience -->

        <div id="education">
            <h2 class="heading">Education</h2>
            <div class="education-block">
                <h3>Champlain College, Burlington, VT</h3>
                <span class="education-date">August 2016 - May 2020</span>
                <h4>In Progress: Bachelor of Science in Game Programming</h4>
                <ul>
                    <li>Dean’s list every semester.</li>
                    <li>Individual mentor to three Game Programming students.</li>
                    <li>Mentor to a group of Game History and Development programmers.</li>
                    <li>Created multiple video games with teams ranging from four to ten students.</li>
                    <li>Learned from current industry professionals in Montreal, QC</li>
                </ul>
            </div>
            <!-- End .education-block -->
        </div>
        <!-- End #education -->

        <div id="projects" class="background-alt">
            <h2 class="heading">Projects</h2>
            <div class="container">
                <div class="row">
                    <div class="project shadow-large no-image">
                        <div class="project-info">
                            <h3>Machine Learning</h3>
                            <p>
                                I co-designed and created an app to classify customer feedback using machine learning.
                                This was an awesome project because I learned a bit more about machine learning, and got
                                a crash course in full stack development including Angular, CSS, Python, and Django REST
                                framework
                            </p>
                            <!-- <a href="#">View Project</a> -->
                        </div>
                        <!-- End .project-info -->
                    </div>
                    <!-- End .project -->

                    <div class="project shadow-large no-image">
                        <!-- <div class="project-image">
                            <img src="images/project.jpg" />
                        </div> -->
                        <!-- End .project-image -->
                        <div class="project-info">
                            <h3>Lunch Rush</h3>
                            <p>
                                Created an education game for 1st through 3rd graders targeting food allergy awareness.
                                This project is important because it gave me a chance to build architecture for the game
                                designers rather than create the whole game.
                            </p>
                            <!-- <a href="#">View Project</a> -->
                        </div>
                        <!-- End .project-info -->
                    </div>
                    <!-- End .project -->
                    <div class="project shadow-large no-image">
                        <!-- <div class="project-image">
                            <img src="images/project.jpg" />
                        </div> -->
                        <!-- End .project-image -->
                        <div class="project-info">
                            <h3>Bullet Squid</h3>
                            <p>
                                Created a very simple top down shooter with a five person team. This was especially
                                exciting because it required
                                learning Unity3D on the fly and working with another programmer.
                            </p>
                            <!-- <a href="#">View Project</a> -->
                        </div>
                        <!-- End .project-info -->
                    </div>
                    <!-- End .project -->
                </div>
            </div>
        </div>
        <!-- End #projects -->

        <div id="skills">
            <h2 class="heading">Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Python</li>
                <li>Angular</li>
                <li>C#</li>
                <li>C++</li>
                <li>OpenGL</li>
            </ul>
        </div>
        <!-- End #skills -->

        <div id="contact">
            <h2>Get in Touch</h2>
            <div id="contact-form">
                <form method="POST" action="https://formspree.io/jnbiederman@gmail.com">
                    <input type="hidden" name="_subject" value="Contact request from personal website" />
                    <input type="email" name="_replyto" placeholder="Your email" required>
                    <textarea name="message" placeholder="Your message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            <!-- End #contact-form -->
        </div>
        <!-- End #contact -->

        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-5 copyright">
                        <p>
                            Copyright &copy; 2019 Jacob Biederman, Forked from Ryan Fitzgerald
                        </p>
                    </div>
                    <div class="col-sm-2 top">
                        <span id="to-top">
                            <i class="fa fa-chevron-up" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="col-sm-5 social">
                        <ul>
                            <li>
                                <a href="https://github.com/jacobnb" target="_blank"><i class="fa fa-github"
                                        aria-hidden="true"></i></a>
                            </li>
                            <!-- <li>
                                <a href="https://stackoverflow.com/" target="_blank"><i class="fa fa-stack-overflow"
                                        aria-hidden="true"></i></a>
                            </li> -->
                            <li>
                                <a href="https://linkedin.com/in/jacob-b" target="_blank"><i class="fa fa-linkedin"
                                        aria-hidden="true"></i></a>
                            </li>
                            <!-- <li>
                                <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"
                                        aria-hidden="true"></i></a>
                            </li> -->
                            <!-- <li>
                                <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"
                                        aria-hidden="true"></i></a>
                            </li> -->
                            <!-- <li>
                                <a href="https://plus.google.com/" target="_blank"><i class="fa fa-google-plus"
                                        aria-hidden="true"></i></a>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <!-- End footer -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <!-- <script src="https://unpkg.com/peerjs@1.0.0/dist/peerjs.min.js"></script> -->
        <!-- <script src="scripts/jquery-3.4.1.min.js"></script> -->
        <!-- <script src="js/scripts.js"></script>
        <script src="js/game.js"></script>
        <script src="js/textManagement.js"></script> -->
        <script src="scripts/scripts.min.js"></script>
        <script src="scripts/snakeManager.min.js"></script>
        <script src="scripts/score.min.js"></script>
        <script src="scripts/game.min.js"></script>
        <script src="scripts/textManagement.min.js"></script>
        <script src="scripts/startModal.min.js"></script>
        <script src="scripts/network.min.js"></script>
        <script src="scripts/game_multiplayer.min.js"></script>
        <script src="scripts/peer.min.js"></script>
        <script src="scripts/ajax.min.js"></script>
    </body>

</html>';
?>