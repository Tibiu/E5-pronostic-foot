import React, { useState } from 'react';
import { IonInput, IonButton, IonLabel } from '@ionic/react';

interface Match {
  homeTeam: string;
  awayTeam: string;
  score: string;
}

const MatchForm: React.FC = () => {
  const [match, setMatch] = useState<Match>({ homeTeam: '', awayTeam: '', score: '' });

  const handleSaveMatch = () => {
    // Enregistrer les informations du match ici
    console.log('Match enregistré:', match);

    // Réinitialiser les champs du formulaire
    setMatch({ homeTeam: '', awayTeam: '', score: '' });
  };

  const handleInputChange = (event: CustomEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setMatch({ ...match, [name]: value });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <IonLabel>Equipe 1:</IonLabel>
      <IonInput name="homeTeam" value={match.homeTeam} onIonChange={handleInputChange} />

      <IonLabel>Equipe 2:</IonLabel>
      <IonInput name="awayTeam" value={match.awayTeam} onIonChange={handleInputChange} />

      <IonLabel>Score:</IonLabel>
      <IonInput name="score" value={match.score} onIonChange={handleInputChange} />

      <IonButton onClick={handleSaveMatch}>Enregistrer le match</IonButton>
    </form>
  );
};

export default MatchForm;
