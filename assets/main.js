let chiwalCounter = document.getElementById('number');
console.log(chiwalCounter);
let chiwalMaker = document.getElementById('chiwalMaker');
let course = document.getElementById('course');

chiwalMaker.addEventListener('click', () => {
    if (chiwalCounter.value != '' && chiwalCounter.value != 0) {
        document.getElementById('runbutton').style.display = 'block';

        for (i = 0; i < chiwalCounter.value; i++) {
            console.log(i)
            course.insertAdjacentHTML("beforeend",
                `<img src='assets/images/chiwal.png' id="chiwal${i}">`);

        }
        chiwalCounter.setAttribute('disabled', 'disabled');
        chiwalMaker.setAttribute('disabled', 'disabled');
        document.body.insertAdjacentHTML('afterbegin', `<input type='button' id="annuler" value="Annuler cette course."><br>`);
        let annuler = document.getElementById('annuler');
        annuler.addEventListener('click', () => {
            location.reload();
        })
    }

})
let allChiwals = document.getElementsByTagName('img');
let runbutton = document.getElementById('runbutton');

runbutton.onclick= () => {
    for (let oneChiwal of allChiwals) {

        //console.log(oneChiwal.style.left);
        //if (oneChiwal.style.left < '1000px') {
            //console.log(oneChiwal.style.left);
            //let positionChiwal = oneChiwal.style.left.;
            //console.log(positionChiwal);
           // oneChiwal.style.left = 100+'px';//Math.random()*10 +'px';
           // console.log(oneChiwal.style.left);
        //}


        for(i=0;i<20;i++) {
        //     console.log(oneChiwal.style.left);
            oneChiwal.style.left = Math.random((Math.floor))*10 +'px';
            // console.log(oneChiwal.style.left);
        }
    }
}
