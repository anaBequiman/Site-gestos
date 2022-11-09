//https://teachablemachine.withgoogle.com/models/Ap-jzxehd/
Webcam.set({
    width : 350,
    height : 300,
    imageFormat : 'png',
    pngQuality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function tirarFoto(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src = '+data_uri+'>'
    });
}
console.log("Carregado :)", ml5.version)
classificador = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ap-jzxehd/model.json', modeloCarregado);
function modeloCarregado(){
    console.log("Modelo Carregado :)");
}