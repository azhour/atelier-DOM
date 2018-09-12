      // var myButton = document.getElementById("myButton");
      // function test() {
      //   alert("test");
      // }
      //
      // myButton.onclick = test;  //1ere possibilité
      // //
      // // //2e possiblité
      // myButton.onclick = function(){
      //   alert("test");
      // };
      //
      // // 3e possibilité
      // myButton.addEventListener("click", test);
      //
      // console.log(myButton);
      // console.log();
      //
      //
      // myParagraphsBis = document.getElementsByTagName("p");
      // console.log(myParagraphsBis[0]);
      // console.log(typeof(myParagraphsBis));
      //
      //
      // // pour afficher un élement
      //
      // function test(element) {
      //   alert(element.id);  // pour recupere l'id de l'élement (button en html)
      // }
      //
      //
      // myButton.onclick = function(){   // pr recupere l'élément on déclare une fonction
      // test(this);
      // };
      //
      // myButton.addEventListener("click", function(){
      //   test(this);
      // });
      //
      //
      // // modifier le contenu d'un élément
      //
      // myDiv = document.getElementById("blue");
      // myDiv.addEventListener("mouseover", function(){
      //   myDiv.innerHTML = "contenu ajouté";
      //   myDiv.style.color = "white";
      //   myDiv.style.fontSize = "30px";
      //   myDiv.style.fontWeight = "bold";
      //   myDiv.style.backgroundColor = "lightgrey";
      // });
      //
      //
      // // créer des éléments
      //
      // var img = document.createElement("img");
      // img.src = "VRP.jpg";
      // img.alt = "Ceci est une image";
      // img.id = "monId";
      // img.classList.add("toto");
      // img.classList.add("blabla");
      //
      // console.log(img);
      // var divImg = document.getElementById("divImg");
      // divImg.appendChild(img);
      //
      // myParagraphs = document.getElementsByClassName("red");
      // console.log(myParagraphs);
      //
      // for (let i = 0; i < myParagraphs.length; i++) {
      //   myParagraphs[i].addEventListener("mouseover", function(){    // au survol les p devienne rouge
      //     myParagraphs[i].style.backgroundColor = "red";
      //   });
      // }
      //
      // myParagraphs = document.getElementsByClassName("red");
      //
      //
      // for ( i = 0; i < myParagraphs.length; i++) { // pour eviter les répétitions
      //
      //   if (i%2 === 0) {
      //     myParagraphs[i].style.backgroundColor = "blue";
      //   }else {
      //     myParagraphs[i].style.backgroundColor = "red";
      //   }
      // }
      //
      //
      //
      //
      // for (let i = 0; i < myParagraphs.length; i++) {
      //   myParagraphs[i].addEventListener("click",function() {
      //     addColor(i)   // appeler la fonction
      //   }
      // }
      //
      // fonction callback
      // function addColor (index) {
      //   myParagraphs[index].style.backgroundColor ="red";
      // }
      //
      // stocker des informations
      //
      // var myArray = [];
      // for (var i = 0; i < myParagraphs.length; i++) {
      //   myParagraphs[i].addEventListener("click", function(){
      //     myArray.push(this.id);
      //     console.log(myArray);
      //   });
      // }
      //
      //
      // //
      // // //PFC
      // var divs = document.getElementsByTagName("div");
      // // console.log(divs);
      //
      // var result = document.getElementById("result");
      //
      // function myFunction(element) {
      // result.innerHTML = element.id;
      // }
      //
      // for (var i = 0; i < divs.length; i++) {   // choix de l'user
      //   divs[i].onclick = function () {
      //     myFunction(this);
      //   };
      // }
      //
      //
      //
      //
      // for (var i = 0; i < divs.length; i++) {   // pour lancer le jeu
      //   divs[i].onclick = function () {
      //     game(this);
      //   };
      // }
      //
      // function game(element) {     // fonction avec le choix de l'ordi
      //   var userChoice = element.id;
      //   var myArray = ["pierre", "feuille", "ciseaux"];
      //   var pcChoice = myArray[Math.floor[Math.random() * myArray.length]];
      // }



      function newDoc() {
          window.location.assign("https://www.google.com")
      }
