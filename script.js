function showRule(rule) {

    const rules = {

        comma:
            "Үтір бірыңғай мүшелердің, қаратпа сөздердің, қыстырма сөздердің және құрмалас сөйлем бөліктерінің арасына қойылады.",

        dot:
            "Нүкте аяқталған ойды білдіретін хабарлы сөйлемнің соңына қойылады.",

        exclamation:
            "Леп белгісі адамның көңіл күйін, қуанышын, таңдануын немесе бұйрығын білдіретін сөйлемдердің соңына қойылады.",

        question:
            "Сұрау белгісі сұраулы сөйлемдердің соңына қойылады."
    };

    alert(rules[rule]);
}


function checkAnswer(answer, button) {

    const result = document.getElementById("result");

    if (answer === "?") {

        result.textContent = "✓ Дұрыс! Бұл — сұраулы сөйлем.";

    } else {

        result.textContent = "✗ Қате. Тағы бір рет ойланып көр!";
    }
}