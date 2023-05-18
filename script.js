let alphabet = document.querySelectorAll('.leter');

let alphabetInfo = document.getElementById('alphabet');



for(let i = 0 ; i < alphabet.length;i++){
    alphabetInfo.innerHTML += `<p style="color: blue;>${alphabet[i].outerHTML}</p>`
}
console.log(alphabet);

let section = document.getElementById('section');
function Electionparagraph(){

    let sectionP = section.getElementsByTagName("p");
    for(let i = 0 ; i < sectionP.length;i ++){
        sectionP[i].style.color = 'white'
        sectionP[i].style.border = '7px solid black'
        sectionP[i].style.width = '183px'
        sectionP[i].style.backgroundColor = 'blue';
        sectionP[i].style.fontFamily = 'cursive';
        sectionP[i].style.fontSize = '30px';
    }
  
}