import React, { useState, useRef } from 'react';
import { IonList, IonItem, IonLabel, IonButton, IonInput, IonModal, IonHeader, IonButtons, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
interface Match {
  homeTeam: string;
  awayTeam: string;
  score: string;
}



// Form
const MatchForm: React.FC<{ onSaveMatch: (match: Match) => void }> = ({ onSaveMatch }) => {
  const [homeTeam, setHomeTeam] = useState<string>('');
  const [awayTeam, setAwayTeam] = useState<string>('');
  const [score, setScore] = useState<string>('');

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      
    }
  }
  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

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
          <IonTitle>Liste des Matchs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">Créer un Match</IonButton>
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton color="danger" onClick={() => modal.current?.dismiss()}>Fermer</IonButton>
              </IonButtons>
              <IonTitle>Créer un Match</IonTitle>
              <IonButtons slot="end">
                <IonButton color="success" strong={true} onClick={() => confirm()}>Confirmer</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">

          <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Equipe 1</IonLabel>
            <IonInput type="text" value={homeTeam} onIonChange={(event) => setHomeTeam(event.detail.value!)} />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Equipe 2</IonLabel>
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


//List
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
