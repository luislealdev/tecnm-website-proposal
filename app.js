const express = require('express');
const fs = require('fs');
const app = express();

//Visualizacion de la pagina
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Variables globales
let career = {
    nameCarrer : null,
    nameProfessional: null,
    professionalProfile: null,
    admissionProfile: null,
    habilities: [],
    profesionalResidences: null,
    objetives: [],
    graduateInformation: null,
    graduateAttributes: [],
    infraestructure: [
        {description: null},
        {laboratories: []}
    ],
    planStudies: []

}
//Pagina principal
app.get("/", (req, res)=>{
    res.render('index',{});
})

//Informacion carreras
app.get("/ingenieria-sistemas-computacionales", (req, res)=>{
    const informationCareer = fs.readFileSync('jsons/careers/sistemas.json');
    const dataCareer = JSON.parse(informationCareer);

    console.log(dataCareer);
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running on port 3000")
})