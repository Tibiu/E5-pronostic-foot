import React, { useState } from 'react';
import { IonInput, IonButton, IonLabel, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonItem } from '@ionic/react';

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Tournois</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tournois</IonTitle>
          </IonToolbar>
        </IonHeader>
     
        <form onSubmit={(e) => e.preventDefault()}>
          <IonCardContent>Equipe à domicile:</IonCardContent>
          <IonInput name="homeTeam" value={match.homeTeam} onIonChange={handleInputChange} />

          <IonCardContent>Equipe à l'extérieur:</IonCardContent>
          <IonInput name="awayTeam" value={match.awayTeam} onIonChange={handleInputChange} />

          <IonItem fill="outline">
            <IonLabel position="floating">Score:</IonLabel>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>

          <IonCardContent>Score:</IonCardContent>
          <IonInput name="score" value={match.score} onIonChange={handleInputChange} />

        <IonButton onClick={handleSaveMatch}>Enregistrer le match</IonButton>
        </form>
      

        <IonList>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Ligue 1</IonCardTitle>
            <IonCardSubtitle>Compétition de football</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Le Championnat de France de football, de plus haut niveau de la FFF. Il regroupe les meilleurs clubs de France métropolitaine et de Monaco.
          </IonCardContent>

          <IonButton fill="clear">Voir les Matchs</IonButton>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>FA Cup</IonCardTitle>
            <IonCardSubtitle>Compétition de football</IonCardSubtitle>
          </IonCardHeader>

          <IonButton fill="clear">Voir les Matchs</IonButton>
        </IonCard>
        
        </IonList>
      </IonContent>


    </IonPage>
  );
};

export default MatchForm;
