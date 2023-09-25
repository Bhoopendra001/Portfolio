$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });


    
    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("y3uVObpo0LxLWpA2u");

        // Capture form data before sending the form
        var userName = this.user_name.value;
        var userEmail = this.user_email.value;
        var userContact = this.contact_number.value;
        var userMessage = this.message.value;

        emailjs.send('service_z6ovmnu', 'template_9otfujy', {
            from_name: userName,
            email_id: userEmail,
            contact : userContact,
            message: userMessage
        })
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Ayush Bhardwaj";
            $("#favicon").attr("href", "assets/images/favicon2.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Software Engineer", "Full Stack Engineer", "Data Engineer", "Data Scientist", "Front-End Engineer", "Back-End Engineer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = [
            {
                "name": "Python",
                "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
            },{
                "name" : "C",
                "icon" : "https://img.icons8.com/color/48/c-programming.png"
            },{
                "name" : "JavaScript",
                "icon" : "https://img.icons8.com/color/48/javascript--v1.png"
            },
            {
                "name": "R",
                "icon": "https://img.icons8.com/fluency/48/rstudio.png"
            }, 
            {
                "name": "MySQL",
                "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
            },{
                "name" : "Java",
                "icon" : "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
            },{
                "name" : "Spring",
                "icon" : "https://img.icons8.com/color/48/spring-logo.png"
            },{
                "name" : "jQuery",
                "icon" : "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-filled-tal-revivo.png"
            },{
                "name" : "Pandas",
                "icon" : "https://img.icons8.com/color/48/pandas.png"
            },{
                "name" : "HTML",
                "icon" : "https://img.icons8.com/color/48/html-5--v1.png"
            },{
                "name" : "CSS",
                "icon" : "https://img.icons8.com/color/48/css.png"
            },{
                "name" : "React",
                "icon" : "https://img.icons8.com/color/48/react-native.png"
            },{
                "name" : "Node",
                "icon" : "https://img.icons8.com/color/48/nodejs.png"
            },{
                "name" : "Flask",
                "icon" : "https://img.icons8.com/color/48/flask.png"
            },{
                "name" : "REST",
                "icon" : "https://img.icons8.com/color/48/api-settings.png"
            },{
                "name" : "AWS",
                "icon" : "https://img.icons8.com/color/48/amazon-web-services.png"
            },{
                "name" : "MongoDB",
                "icon" : "https://img.icons8.com/color/48/mongodb.png"
            },{
                "name" : "Firebase",
                "icon" : "https://img.icons8.com/color/48/google-firebase-console.png"
            },{
                "name" : "Git",
                "icon" : "https://img.icons8.com/color/48/git.png"
            },{
                "name" : "BitBucket",
                "icon" : "https://img.icons8.com/color/48/bitbucket.png"
            },{
                "name" : "Postman",
                "icon" : "https://img.icons8.com/pulsar-color/48/postman-api.png"
            },{
                "name" : "FFMpeg",
                "icon" : "https://img.icons8.com/color/48/ffmpeg.png"
            },{
                "name" : "Docker",
                "icon" : "https://img.icons8.com/color/48/docker.png"
            },{
                "name" : "Terraform",
                "icon" : "https://img.icons8.com/color/48/terraform.png"
            },{
                "name" : "Kubernetes",
                "icon" : "https://img.icons8.com/color/48/kubernetes.png"
            },{
                "name" : "Apache Kafka",
                "icon" : "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-color-tal-revivo.png"
            },{
                "name" : "NumPy",
                "icon" : "https://img.icons8.com/color/48/numpy.png"
            },{
                "name" : "Confluence",
                "icon" : "https://img.icons8.com/color/48/confluence--v2.png"
            },
            {
                "name": "Tableau",
                "icon": "https://img.icons8.com/color/48/tableau-software.png"
            }, 
            {
                "name": "PowerBI",
                "icon": "https://img.icons8.com/color/48/power-bi.png"
            }, 
            {
                "name": "Modeling",
                "icon": "https://img.icons8.com/color/48/ms-excel.png"
            },
            {
                "name": "SPSS",
                "icon": "https://img.icons8.com/fluency/48/bar-chart.png"
            }, 
            {
                "name": "Stata",
                "icon": "https://img.icons8.com/fluency/48/heat-map.png"
            },
            {
                "name": "Visio",
                "icon": "https://img.icons8.com/color/48/microsoft-visio.png"
            },
            {
                "name": "VS Code",
                "icon": " https://img.icons8.com/fluency/48/visual-studio.png"
            },
            {
                "name": "WordPress",
                "icon": "https://img.icons8.com/color/48/000000/wordpress.png"
            },  
            {
                "name": "Salesforce",
                "icon": "https://img.icons8.com/color/48/salesforce.png"
            },
            {
                "name": "Architecture",
                "icon": "https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/48/external-structure-science-and-technology-icongeek26-outline-gradient-icongeek26.png"
            },
            {
                "name": "Video Edit",
                "icon": "https://img.icons8.com/fluency/48/video.png"
            },
            {
                "name": "Solutions",
                "icon": "https://img.icons8.com/color/48/solve-problem.png"
            },
            {
                "name": "Insights",
                "icon": "https://img.icons8.com/color/48/light.png"
            },
            {
                "name": "Research",
                "icon": "https://img.icons8.com/color/48/fine-print.png"
            },
            {
                "name": "Leadership",
                "icon": "https://img.icons8.com/color/48/meeting-room.png" 
            }
        ]
        :
        response =[
            {
              "name": "BuddyUp",
              "desc": "BuddyUp: Connecting People with Shared Interests through Social Events",
              "image": "buddyUp",
              "category": "visual",
              "links": {
                "view": "https://github.com/Ayush-corp/BuddyUp",
                "code": "https://github.com/Ayush-corp/BuddyUp"
              }
            },{
                "name": "Stock Data Visualization",
                "desc": "Extracted and Visualized Tesla and GameStop Stock Data for Informed Decision-Making with Emphasis on Revenue.",
                "image": "Stock-data-visualization-1",
                "category": "visual",
                "links": {
                  "view": "https://github.com/Ayush-corp/Tesla-and-GameStop-Stock-Analysis",
                  "code": "https://github.com/Ayush-corp/Tesla-and-GameStop-Stock-Analysis"
                }
              },{
                "name": "Handwritten Digit OCR",
                "desc": "This project aims to solve handwritten character recognition using convolutional neural networks (CNNs) for accurate classification of handwritten characters.",
                "image": "ORH-1",
                "category": "visual",
                "links": {
                  "view": "https://github.com/Ayush-corp/Optical-Recognition-of-Handwritten-Digits",
                  "code": "https://github.com/Ayush-corp/Optical-Recognition-of-Handwritten-Digits"
                },
              },{
                "name": "EMNIST & Binary Alphadigits",
                "desc": "This project focuses on solving a challenging character recognition problem using deep learning and transfer learning with high-resolution grayscale handwritten letter images.",
                "image": "emnist",
                "category": "visual",
                "links": {
                  "view": "https://github.com/Ayush-corp/FusedDatasets-EMNIST-Letters-Binary-Alphadigits",
                  "code": "https://github.com/Ayush-corp/FusedDatasets-EMNIST-Letters-Binary-Alphadigits"
                },
              },{
                "name": "Wordle",
                "desc": " A word puzzle game where players guess a hidden five-letter word in six attempts, aiming to improve word-guessing skills.",
                "image": "Wordle",
                "category": "visual",
                "links": {
                  "view": "https://github.com/Ayush-corp/CPSC449_Wordle_Project_4",
                  "code": "https://github.com/Ayush-corp/CPSC449_Wordle_Project_4"
                },
              },{
                "name": "The Friendly Couch",
                "desc": "A support App for users to seek assistance from their network or professionals, promoting help-seeking and a safe environment.",
                "image": "friendly-couch",
                "category": "visual",
                "links": {
                  "view": "https://github.com/Ayush-corp/the_friendly_couch",
                  "code": "https://github.com/Ayush-corp/the_friendly_couch"
                },
              }]
    const data = await response;
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

// ../images/projects/${project.image}.png

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="./assets/images/projects/${project.image}.png" alt="projecthello" />
      
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View/Code</a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}




/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 700 });
srtop.reveal('.home .envelope', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

const mediaQuery = window.matchMedia('(min-width: 300px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  
    srtop.reveal('.education .box', { interval: 100 });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 100 });

    /* SCROLL EXPERIENCE */
    srtop.reveal('.experience .timeline', { delay: 200 });
    srtop.reveal('.experience .timeline .container', { interval: 200 });

    /* SCROLL CONTACT */
    srtop.reveal('.contact .container', { delay: 200 });
    srtop.reveal('.contact .container .form-group', { delay: 200 });
}