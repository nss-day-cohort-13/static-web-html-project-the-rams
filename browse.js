console.log("Begin Program");

var productsArray = [];

var oldie1 = {
  name: "Mags Bennett",
  pic: "<img src= \"http://static.boredpanda.com/blog/wp-content/uploads/2014/11/old-people-funny-t-shirts-19__605.jpg\">",
  about: "Text",
  fee: "$5000 to cover shots, presciption meds, and bail money",
};

productsArray.push(oldie1);

console.log("oldies", productsArray);

var productElements = document.getElementById("oldPeople")
console.log("product elements", productElements);

var nextOldie = productElements;
console.log("nextOldie");

for ( var i = 0; i < productsArray.length; i++ ) {
  var currentOldie = productsArray[i];
  var name = "<h5>" + currentOldie.name + "</h5>";
  var pic = "<h5>" + currentOldie.pic + "</h5>";
  var about = "<h5>" + currentOldie.about + "</h5>";
  var fee = "<h5>" + currentOldie.fee + "</h5>";

  nextOldie.innerHTML += name + pic + about + fee;
};

console.log("End Program");








