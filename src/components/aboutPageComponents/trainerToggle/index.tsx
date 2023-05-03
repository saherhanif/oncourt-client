import React, { useState } from "react";
import "./trainersToggle.scss";
import trainer1Image from "./trainer1.png";

type Trainer = {
  name: string;
  firstParagraph: string;
  secondParagraph: string;
  trainerImage: string;
};

export default function TrainersToggle() {
  const trainers: Trainer[] = [
    {
      name: "בדיע",
      firstParagraph:
        "נעים מאוד, יליד חיפה , אני בדיע כרכבי בן 32 ,התחלתי את דרכי בטניס בגיל 12 כשניתנה לי ההזדמנות . על ידי הוריי זה התחיל במסגרת בית הספר ולאחר מכן עברתי למסגרת מקצועית והפך לשגרת חיים. בשנת 2007 התחלתי השתתפות במסגרות תחרותיות לאומיות . ואף הגעתי להישגים יוצאי דופן. ועברתי לאמן יחידים וקבוצות בכמה מוסדות מיוחדים לטניס.",
      secondParagraph:
        "הטניס בנה לי נתיב חיים מיוחד. , ועד בשנת 2019 התחלתי כעצמאי היום אימנתי כ-110 מתאמנים באימונים פרטיים לטווח ארוך בעיקר מעל גיל 25. בשנת 2021 החלטתי לתת במה לגילאים צעירים יותר במסגרות בתי הספר, ועד היום אימנתי כ-300 ילדים במסגרות חינוכיות. אותו צעד משנת 2021 הראה לי את חשיבות המהלך כשמורים ציינו בפניי שזה העלה את הביטחון העצמי של כמה משתתפים אשר היו באחד מבתי הספר.",
      trainerImage: trainer1Image,
    },
    {
      name: "בדיע",
      firstParagraph:
        "נעים מאוד, יליד חיפה , אני בדיע כרכבי בן 32 ,התחלתי את דרכי בטניס בגיל 12 כשניתנה לי ההזדמנות . על ידי הוריי זה התחיל במסגרת בית הספר ולאחר מכן עברתי למסגרת מקצועית והפך לשגרת חיים. בשנת 2007 התחלתי השתתפות במסגרות תחרותיות לאומיות . ואף הגעתי להישגים יוצאי דופן. ועברתי לאמן יחידים וקבוצות בכמה מוסדות מיוחדים לטניס.",
      secondParagraph:
        "הטניס בנה לי נתיב חיים מיוחד. , ועד בשנת 2019 התחלתי כעצמאי היום אימנתי כ-110 מתאמנים באימונים פרטיים לטווח ארוך בעיקר מעל גיל 25. בשנת 2021 החלטתי לתת במה לגילאים צעירים יותר במסגרות בתי הספר, ועד היום אימנתי כ-300 ילדים במסגרות חינוכיות. אותו צעד משנת 2021 הראה לי את חשיבות המהלך כשמורים ציינו בפניי שזה העלה את הביטחון העצמי של כמה משתתפים אשר היו באחד מבתי הספר.",
      trainerImage: trainer1Image,
    },
  ];

  const [activeTrainer, setActiveTrainer] = useState<Trainer | null>(
    trainers[0]
  );

  const handleTrainerClick = (trainer: Trainer) => {
    setActiveTrainer((prevTrainer) =>
      prevTrainer === trainer ? null : trainer
    );
  };

  return (
    <div className="trainersToggleContainer">
      <div className="nameButtonsContainer">
        <div>
          {trainers.map((trainer) => (
            <button
              key={trainer.name}
              className={activeTrainer === trainer ? "active" : ""}
              onClick={() => handleTrainerClick(trainer)}
            >
              {trainer.name}
            </button>
          ))}
        </div>
        <hr />
      </div>
      {activeTrainer && (
        <div className="trainerInfoCard">
          <div className="trainerInfoAndDetails">
            <h1>
              <span>על </span>
              {activeTrainer.name}
            </h1>
            <p> {activeTrainer.firstParagraph}</p>
            <p> {activeTrainer.secondParagraph}</p>
            <a href="/contact">
              <button>צור קשר עכשיו</button>
            </a>
          </div>
          <div className="trainersImageCntainer">
            <img src={activeTrainer.trainerImage} alt="trainer" />
          </div>
        </div>
      )}
    </div>
  );
}
