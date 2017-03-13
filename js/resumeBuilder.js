var formattedName = HTMLheaderName.replace("%data%", "Ryan");


var formattedRole = HTMLheaderRole.replace("%data%", "Frontend-Designer");

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);
