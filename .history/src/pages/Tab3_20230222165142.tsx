import React, { useState, useRef } from 'react';
import { IonList, IonItem, IonLabel, IonButton,IonInput, IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonModal, IonButtons } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
interface Match {
  homeTeam: string;
  awayTeam: string;
  score: string;
}

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inline Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open
        </IonButton>
        <p>{message}</p>
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Welcome</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">

          <form onSubmit={handleSubmit}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Liste des Matchs</IonTitle>
              </IonToolbar>
            </IonHeader>

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
