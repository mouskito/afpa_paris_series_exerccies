var questions = [
    {
        question: 'Est-ce que tu aime le JavaScript ?',
        reponse : 'Oui'
    },
    {
        question: 'Le JavaScript est une évolution du Java ?',
        reponse : 'Non'
    },
    {
        question: 'Le JavaScript est proche du Java ?',
        reponse : 'Non'
    },
    {
        question: 'Le JavaScript est un langage d\'objet par prototypage ?',
        reponse : 'Oui'
    },
    {
        question: 'Le JavaScript est souvent utilisé coté client ?',
        reponse : 'Oui'
    },
    {
        question: 'Le JavaScript peut être utilisé coté client et serveur ?',
        reponse : 'Oui'
    }
];

var bonne_reponse = 0;
for(var index = 0; index < questions.length; index++){
    if (prompt(questions[index].question).toLowerCase() == questions[index].reponse.toLowerCase()) {
        console.log("Bonne reponse à la question" +questions[index].question);

        bonne_reponse++;

    }else{
        console.log("Faux! La reponse à la question" +questions[index].question +
            " etait" +questions[index].reponse);
    }
}

console.log(bonne_reponse+" sur "+ questions.length);
document.write("<div>"+bonne_reponse+" sur "+ questions.length+"</div>")
