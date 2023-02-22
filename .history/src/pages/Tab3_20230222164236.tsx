import React, { useState } from 'react';
import { IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

interface Match {
  homeTeam: string;
  awayTeam: string;
  score: string;
}

const MatchForm: React.FC<{ onSaveMatch: (match: Match) => void }> = ({ onSaveMatch }) => {
  const [homeTeam, setHomeTeam] = useState<string>('');
  const [awayTeam, setAwayTeam] = useState<string>('');
  const [score, setScore] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMatch: Match = {
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      score: score
    };

    onSaveMatch(newMatch);

    setHomeTeam('');
    setAwayTeam('');
    setScore('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <IonItem>
        <IonLabel position="floating">Home Team</IonLabel>
        <IonInput type="text" value={homeTeam} onIonChange={(event) => setHomeTeam(event.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Away Team</IonLabel>
        <IonInput type="text" value={awayTeam} onIonChange={(event) => setAwayTeam(event.detail.value!)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Score</IonLabel>
        <IonInput type="text" value={score} onIonChange={(event) => setScore(event.detail.value!)} />
      </IonItem>
      <IonButton type="submit" expand="block">Add Match</IonButton>
    </form>
  );
};

const MatchList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);

  const handleSaveMatch = (match: Match) => {
    // Ajouter le match à la liste des matches
    setMatches([...matches, match]);
  };

  return (
    <>
      <MatchForm onSaveMatch={handleSaveMatch} />

      <IonList>
        {matches.map((match, index) => (
          <IonItem key={index}>
            <IonLabel>
              <h2>{match.homeTeam}</h2>
              <h3>{match.score}</h3>
              <h2>{match.awayTeam}</h2>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </>
  );
};

export default MatchList;
