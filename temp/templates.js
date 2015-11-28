angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/app.html","<template><div class=site-container><div class=row><header class=\"column column-12\"><h1>Kenrick Wu</h1></header></div><router-view></router-view><footer>&copy; Yeoman Generated Footer</footer></div></template>");
$templateCache.put("app/core/navMenu.html","<template><ul><li repeat.for=\"nav of router.navigation\"><a href.bind=nav.href>${nav.title}</a></li></ul></template>");
$templateCache.put("app/home/home.html","<template><div class=details><strong>M:</strong> 0433 685 936 <strong>Address:</strong> Perth, Western Australia <strong>E:</strong> kenrick.wu@gmail.com</div><div class=row><div class=\"column column-12\"><h2>Professional Summary</h2><p>\"Dedicated and reliable web developer with over 5 years of experience in the IT Application and Maintenance space, working in the industry spanning across multiple sections from on demand call centre environment such as Westnet (now part of iinet), to large coporate consultant companies Fujitsu Australia Limited and Ajilon, to an enterprise Oil and Gas corporation like Woodside Energy Limited. My aim as a professional in the field is to utilise my skillset to build web application that adds values and productivity to the customers business as this gives me great joy and satisfaction, knowing that the product I have built is being used to benefit a company employees and customers.\"</p><p></p></div></div><div class=employment><h2>Employment History</h2><div class=row><div class=\"column column-2\"><img src=/images/woodside.png alt=\"Woodside Energy Limited Logo\"></div><div class=\"column column-4\"><h4>Woodside Energy</h4><h5><em>Application Support and Maintenance Analyst</em></h5><h5>January 2010 - December 2011</h5></div><div class=\"column column-6\"><h4>Responsibilities:</h4><p>I was part of a team of 12 Application Support and Maintenance Specialist supporting over 100 applications for Woodside Energy. My main responsibilities were supporting the enteprise SharePoint 2007 and 2010 environment ensuring the intranet is operational</p></div></div><div class=row><div class=\"column column-2\"><img src=/images/fujitsu.png alt=\"Fujitsu Australia Limited Logo\"></div><div class=\"column column-4\"><h4>Fujitsu Australia Limited</h4><h5><em>IT Consultant</em></h5><h5>Sep 2009 - December 2011</h5></div><div class=\"column column-6\"></div></div></div><div class=education><h2>Education and Certification</h2><div class=row><div class=\"column column-2\"><img src=/images/murdoch.png alt=\"Murdoch University Logo\"></div><div class=\"column column-4\"><h4>Bachelor of Science</h4><h5><em>Computer Science and Games Technology</em></h5><h5>2005 - 2008</h5></div><div class=\"column column-2\"><img src=/images/warwick.png alt=\"Warwick Senior High School Logo\"></div><div class=\"column column-4\"><h4>Warwick Senior High School</h4><h5><em>Secondary Education</em></h5><h5>2000 - 2004</h5></div></div><div class=row><div class=\"column column-2\"><img src=/images/microsoft.png alt=\"Microsoft Logo\"></div><div class=\"column column-4\"><h4>Microsoft Certified Technology Associate (MTA)</h4><h5>Microsoft, License Numer: F194-0352</h5><h5><em>Networking Fundamentals</em></h5><h5>Starting February 2015</h5></div><div class=\"column column-2\"><img src=/images/newhorizons.png alt=\"New Horizons Training Centre Logo\"></div><div class=\"column column-4\"><h4>Certificate IV in Information Technology</h4><h5><em>Networking</em></h5><h5>Year 2008</h5></div></div></div><div class=\"row technologies\"><h2>Technical Skills</h2><div class=\"column column-2\"><img src=/images/git.png alt></div><div class=\"column column-2\"><img src=/images/mongodb.png alt></div><div class=\"column column-1\"><img src=/images/git.png alt></div></div></template>");}]);