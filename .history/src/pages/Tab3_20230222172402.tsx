import React, { useState } from 'react';
import { IonList, IonItem, IonLabel, IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/react';

interface Match {
  homeTeam: string;
  awayTeam: string;
  score: string;
}

const MatchForm: React.FC<{ onSaveMatch: (match: Match) => void, onCloseModal: () => void }> = ({ onSaveMatch, onCloseModal }) => {
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
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add a new match</IonTitle>
        </IonToolbar>
      </IonHeader>
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
        <IonButton onClick={onCloseModal} expand="block">Close Modal</IonButton>
      </form>
    </IonContent>
  );
};

const MatchList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSaveMatch = (match: Match) => {
    // Ajouter le match à la liste des matches
    setMatches([...matches, match]);

    // Fermer le modal
    setShowModal(false);
  };

  return (
    <>
      <IonButton onClick={() => setShowModal(true)}>Add Match</IonButton>

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <MatchForm onSaveMatch={handleSaveMatch} onCloseModal={() => setShowModal(false)} />
      </IonModal>

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
