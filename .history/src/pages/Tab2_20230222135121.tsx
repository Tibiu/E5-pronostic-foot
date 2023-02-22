import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const MatchForm = () => {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [score, setScore] = useState('');

  const handleSaveMatch = () => {
    // Enregistrer les informations du match ici
    console.log('Match enregistré:', { homeTeam, awayTeam, score });

    // Réinitialiser les champs du formulaire
    setHomeTeam('');
    setAwayTeam('');
    setScore('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Enregistrer un match</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Equipe à domicile</IonLabel>
            <IonInput type="text" value={homeTeam} onIonChange={(e) => setHomeTeam(e.target.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Equipe à l'extérieur</IonLabel>
            <IonInput type="text" value={awayTeam} onIonChange={(e) => setAwayTeam(e.target.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Score</IonLabel>
            <IonInput type="text" value={score} onIonChange={(e) => setScore(e.target.value)} />
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={handleSaveMatch}>
          Enregistrer le match
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default MatchForm;