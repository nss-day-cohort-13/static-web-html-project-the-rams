console.log("Begin Program");

var productsArray = [];

var oldie1 = {
  name: "Mags Bennett",
  pic: "<img src= \"http://static.boredpanda.com/blog/wp-content/uploads/2014/11/old-people-funny-t-shirts-19__605.jpg\">",
  about: "Mags is from Harlan, Kentucky and is a connoisseur of booger sugar and unfertilized fish eggs. She's a real pistol. Can you provide her a forever home?",
  fee: "$5000 to cover shots, presciption meds, and bail money",
};

productsArray.push(oldie1);

var oldie2 = {
  name: "Abe Simpson",
  pic: "<img src= \"https://bestepisodeever.files.wordpress.com/2015/03/1f21a.png\">",
  about: "Abe currently resides in Springfield but is willing to relocate. He enjoys Matlock, naps and telling long stories about the war. Take Abe home with you today!",
  fee: "$100 (+ moving cost)",
};

productsArray.push(oldie2);

var oldie3 = {
  name: "Gertrude Kraakman",
  pic: "<img src= \"http://i.dailymail.co.uk/i/pix/2010/11/10/article-0-0BFD933C000005DC-405_468x313.jpg\">",
  about: "Gertie always has a pocket full of used napkins and hard candies; both of which she's willing to share. Her favorite pasttime is yelling at young whipper-snappers.",
  fee: "$200",
};

productsArray.push(oldie3);

var oldie4 = {
  name: "Carl Fredricksen",
  pic: "<img src= \"http://czechmatediary.com/wp-content/uploads/2012/01/Sad-Up.jpg\">",
  about: "Carl is big into travel. He enjoys spending time in South America. He can be cranky and isn't much of a talker but that doesn't mean he doesn't want your love.",
  fee: "$500 (to defray travel costs",
};

productsArray.push(oldie4);

var oldie5 = {
  name: "Arthur Bateman",
  pic: "<img src= \"http://www.allgirlsallowed.org/sites/default/files/imagecache/screen/shrinking%20ageing.jpg\">",
  about: "Arthur is lonely.",
  fee: "Free to a good home",
};

productsArray.push(oldie5);

var oldie6 = {
  name: "Popcorn Sutton",
  pic: "<img src= \"https://westernrifleshooters.files.wordpress.com/2015/01/popcorn-gives-the-finger.jpg\">",
  about: "Popcorn is a real son of a bitch. He enjoys making shine and telling you to piss off. But beneath that tough exterior is an even tougher interior.",
  fee: "$100, a bag of corn and some copper tubes",
};

productsArray.push(oldie6);

var oldie7 = {
  name: "Bernard Sanders",
  pic: "<img src= \"http://cdn.theatlantic.com/assets/media/img/mt/2015/09/RTX1SXT6/lead_960.jpg?1443650308\">",
  about: "Bernard is an ambitious potential grandparent. A real go getter. If you live an active, socialist-leaning lifestyle, Bernard is the (really old) man for you!",
  fee: "Varies based on current income",
};

productsArray.push(oldie7);

var oldie8 = {
  name: "Victor Keckilpenny",
  pic: "<img src= \"https://c1.staticflickr.com/5/4104/4952586576_3e0c73dc44.jpg\">",
  about: "Victor enjoys riding buses and pensively looking out windows. That is all.",
  fee: "Bus fare",
};

productsArray.push(oldie8);

var oldie9 = {
  name: "Joe Shepherd",
  pic: "<img src= \"http://nashvillesoftwareschool.com/images/instructors/joe.jpg\">",
  about: "Joe's alright",
  fee: "meh, best offer"
};

productsArray.push(oldie9);

console.log("oldies", productsArray);

var productElements = document.getElementById("oldPeople")
console.log("product elements", productElements);

var nextOldie = productElements;
console.log("nextOldie");

for ( var i = 0; i < productsArray.length; i++ ) {
  var currentOldie = productsArray[i];
  var name = "<h2>" + currentOldie.name + "</h2>";
  var pic = "<h5>" + currentOldie.pic + "</h5>";
  var about = "<h5>" + "About: " + currentOldie.about + "</h5>";
  var fee = "<h5>" + "Adoption Fee: " + currentOldie.fee + "</h5>";

  nextOldie.innerHTML += name + pic + about + fee;
};

console.log("End Program");








