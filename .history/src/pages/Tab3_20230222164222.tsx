import React, { useState, useRef } from 'react';
import { IonList, IonItem, IonLabel, IonButton,IonInput, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonModal, IonButtons } from '@ionic/react';

interface Match {
  homeTeam: string;
  awayTeam: string;
  score: string;
}

const MatchForm: React.FC<{ onSaveMatch: (match: Match) => void }> = ({ onSaveMatch }) => {
  const [homeTeam, setHomeTeam] = useState<string>('');
  const [awayTeam, setAwayTeam] = useState<string>('');
  const [score, setScore] = useState<string>('');

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [message, setMessage] = useState(
    'Créer un match !!!'
  );
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    modal.current?.dismiss(input.current?.value, 'confirm');
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Tournois</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Créer Match
        </IonButton>
        <p>{message}</p>
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton color="danger" onClick={() => modal.current?.dismiss()}>Fermer</IonButton>
              </IonButtons>
              <IonTitle>Créer un Match</IonTitle>
              <IonButtons slot="end">
                <IonButton color="success" strong={true} onClick={() => handleSubmit()}>Confirmer</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">

            <form onSubmit={(e) => e.preventDefault()}>
            <IonItem>
              <IonLabel position="stacked">Equipe 1:</IonLabel>
              <IonInput type="text" value={homeTeam} onIonChange={(event) => setHomeTeam(event.detail.value!)} />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Equipe 2:</IonLabel>
              <IonInput type="text" value={awayTeam} onIonChange={(event) => setAwayTeam(event.detail.value!)} />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Score:</IonLabel>
              <IonInput type="text" value={score} onIonChange={(event) => setScore(event.detail.value!)} />

            </IonItem>

              {/* <IonButton onClick={handleSaveMatch}>Enregistrer le match</IonButton> */}
            </form>

          </IonContent>
          
        </IonModal>
      </IonContent>


    </IonPage>
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