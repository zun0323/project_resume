var work = {
  "jobs": [
    {
      "employer": "Alticast",
      "title": "UI Designer",
      "location": "KangNam, Seoul, South Korea",
      "dates": "2003 - 2004",
      "description": "Settlelite brodcasting company. Design romote control based user experience guide."
    },
    {
      "employer": "Samsung Electronics",
      "title": "Product Designer",
      "location": "Seocho, Seoul, South Korea",
      "dates":"2005 - ",
      "description": "Grobal manufacturing company. Design mobile phone for 5years, design conceptual product since 2012."
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "JM phone",
      "dates": "2006",
      "description": "coraboration work with JM.",
      "images": ["./images/Crop_billboard.jpg", "./images/Crop_edm.jpg"]
    },
    {
      "title": "Wearable project",
      "dates": "2012",
      "description": "coraboration work with fation part",
      "images": ["./images/Crop_miles.jpg"]
    }
  ]
}

var bio = {
  "name": "ryan kwon",
  "role": "Interative Developer",
  "welcomeMessage": "Hellow World!",
  "biopic": "./images/fry.jpg",
  "contacts": {
    "mobile": "010-4229-7858",
    "email": "zun0323@gmail.com",
    "github": "zun0323",
    "location": "Seoul, SouthKorea"
  },
  "skills": ["HTML", "CSS", "JavaScript", "Python"]
}

var education = {
  "schools": [
    {
      "name": "SNUT",
      "location": "Seoul, SouthKorea",
      "degreeDates": "2005",
      "url": "http://www.snut.or.kr",
      "majors": ["Inderstrial Designer"]
    },
    {
      "name": "DesignMembership",
      "location": "Seoul, SouthKorea",
      "degreeDates": "2005",
      "url": "http://www.designmembership.com",
      "majors": ["Product Designer"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Basic course",
      "school": "Code School",
      "dates": "2016",
      "url": "http://www.codeschool.org"
    },
    {
      "title": "Front-end Developer",
      "school": "Udacity",
      "dates": "2017",
      "url": "http://www.ucacity.com"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

$.each(bio.contacts, function(contact, data){
  var formattedContacts = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", data);
  $("#topContacts").append(formattedContacts);
});

$("#topContacts").insertAfter("#header > hr");

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(item) {
    var formattedSkill = HTMLskills.replace("%data%", item);
    $("#skills").append(formattedSkill);
  });
}

work.jobs.forEach(function(item) {
  $("#workExperience").append(HTMLworkStart);

  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", item.employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%", item.title);
  var formattedWorkDates = HTMLworkDates.replace("%data%", item.dates);
  var formattedWorkDescription = HTMLworkDescription.replace("%data%", item.description);

  var formattedAllWorkData = formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkDescription;

  $(".work-entry:last").append(formattedAllWorkData);
});

//---------------------------------------------------------------------------------------------
function inName(name) {
  name.trim().split(" ");
  name[1] = name[1].toUpperCase;
  name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase;
  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
  for(var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    var formattedAllProjectData = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;

    for(var j = 0; j < projects.projects[i].images.length; j++) {
      var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
      formattedAllProjectData += formattedProjectImage;
    }

    $(".project-entry:last").append(formattedAllProjectData);
  }
}

projects.display();
