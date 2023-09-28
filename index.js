// perevodcik
const inputUzb = document.querySelector(".input__uzb");
const inputEng = document.querySelector(".input__eng");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const uzbWord = inputUzb.value.trim();
  translateFunc(uzbWord);
});

const translateFunc = (word) => {
  switch (word.toLowerCase()) {
    case " ":
      inputEng.value = "No word";
      break;

    // Words
    case "olma":
      inputEng.value = "Apple";
      break;

    case "banan":
      inputEng.value = "Banana";
      break;

    case "apelsin":
      inputEng.value = "Orange";
      break;

    case "uzum":
      inputEng.value = "Grape";
      break;

    case "limon":
      inputEng.value = "Lemon";
      break;

    case "qulupnay":
      inputEng.value = "Strawberry";
      break;
    case "golubika":
      inputEng.value = "Blueberry";
      break;
    case "":
      inputEng.value = "";
      break;
    case "malina":
      inputEng.value = "Raspberry";
      break;
    case "qoraqat":
      inputEng.value = "Blackberry";
      break;
    case "olcha":
      inputEng.value = "Cherry";
      break;
    case "shaftoli":
      inputEng.value = "Peach";
      break;

    case "olxo'ri":
      inputEng.value = "Plum";
      break;
    case "o'rik":
      inputEng.value = "Apricot";
      break;
    case "tarvuz":
      inputEng.value = "Watermelon";
      break;
    case "mushkli qovun":
      inputEng.value = "Cantaloupe";
      break;
    case "ananas":
      inputEng.value = "Pineapple";
      break;
    case "mango":
      inputEng.value = "Mango";
      break;
    case "papaya":
      inputEng.value = "Papaya";
      break;
    case "kakos":
      inputEng.value = "Coconut";
      break;
    case "Avokado":
      inputEng.value = "Avocado";
      break;
    case "kivi":
      inputEng.value = "Kiwi";
      break;
    case "anor":
      inputEng.value = "Pomegranate";
      break;
    case "xurmo":
      inputEng.value = "Persimmon";
      break;
    case "guava":
      inputEng.value = "Guava";
      break;
    case "Ehtiros mevasi":
      inputEng.value = "Passion fruit";
      break;
    case "klyukva":
      inputEng.value = "Cranberry";
      break;
    case "buzina mevasi":
      inputEng.value = "Elderberry";
      break;
    case "krijovnik":
      inputEng.value = "Gooseberry";
      break;
    case "mandarin":
      inputEng.value = "Tangerine";
      break;
    case "greyfrut":
      inputEng.value = "Grapefruit";
      break;
    case "lychee":
      inputEng.value = "Lychee";
      break;

    case "Ajdarho mevasi":
      inputEng.value = "Dragon fruit";
      break;
    case "garmdori":
      inputEng.value = "Paprika";
      break;
    case "bodring":
      inputEng.value = "Cucumber";
      break;
    case "baqlajon":
      inputEng.value = "Eggplant";
      break;
    case "qovoqcha":
      inputEng.value = "Zuchchini";
      break;
    case "qovoq":
      inputEng.value = "Pumpkin";
      break;
    case "zaytun":
      inputEng.value = "Olive";
      break;
    case "kartoshka":
      inputEng.value = "Potato";
      break;
    case "piyoz":
      inputEng.value = "Onion";
      break;
    case "sarimsoqpiyoz":
      inputEng.value = "Garlic";
      break;
    case "sabzi":
      inputEng.value = "Carrot";
      break;
    case "bolgar qalampiri":
      inputEng.value = "Bell Pepper";
      break;
    case "ismaloq":
      inputEng.value = "Spinach";
      break;
    case "salat bargi":
      inputEng.value = "Lettuce";
      break;
    case "brokoli":
      inputEng.value = "Broccoli";
      break;
    case "gulkaram":
      inputEng.value = "Cauliflower";
      break;
    case "karam":
      inputEng.value = "Cabbage";
      break;
    case "yashil loviya":
      inputEng.value = "Green Beans";
      break;
    case "no'xat":
      inputEng.value = "Peas";
      break;
    case "kukuruz":
      inputEng.value = "Corn";
      break;
    case "turp":
      inputEng.value = "Radish";
      break;
    case "lavlagi":
      inputEng.value = "Beet";
      break;
    case "sholg'om":
      inputEng.value = "Turnip";
      break;
    case "shirin kartoshka":
      inputEng.value = "Sweet potato";
      break;
    case "seldr":
      inputEng.value = "Celery";
      break;
    case "sarsabil":
      inputEng.value = "Asparagus";
      break;
    case "ko'k piyoz":
      inputEng.value = "Leek";
      break;
    case "petrushka":
      inputEng.value = "Parsley";
      break;
    case "arpabodiyon":
      inputEng.value = "Dill";
      break;
    case "zanjabil":
      inputEng.value = "Ginger";
      break;
    case "qo'ziqorin":
      inputEng.value = "Mushroom";
      break;
    case "qayla":
      inputEng.value = "Kale";
      break;

    // Words
    default:
      inputEng.value = "Not exist in database";
      break;
  }
};

// perevodcik
