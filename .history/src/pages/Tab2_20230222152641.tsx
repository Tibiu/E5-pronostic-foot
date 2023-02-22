import React, { useState, useRef  } from 'react';
import { IonInput, IonButton, IonLabel, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonItem, IonButtons, IonModal } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
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
                <IonButton onClick={() => modal.current?.dismiss()}>Fermer</IonButton>
              </IonButtons>
              <IonTitle>Match</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>Confirmer</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Enter your name</IonLabel>
              <IonInput ref={input} type="text" placeholder="Your name" />
            </IonItem>
            <form onSubmit={(e) => e.preventDefault()}>
            <IonItem>
              <IonLabel position="stacked">Equipe à domicile:</IonLabel>
              <IonInput name="homeTeam" value={match.homeTeam} onIonChange={handleInputChange} />
            </IonItem>
            <IonItem>
              <IonLabel>Equipe à l'extérieur:</IonLabel>
              <IonInput name="awayTeam" value={match.awayTeam} onIonChange={handleInputChange} />
            </IonItem>
            <IonItem>
              <IonLabel>Score:</IonLabel>
              <IonInput name="score" value={match.score} onIonChange={handleInputChange} />
            </IonItem>
              <IonButton onClick={handleSaveMatch}>Enregistrer le match</IonButton>
            </form>
          </IonContent>
          
        </IonModal>
      </IonContent>


    </IonPage>
  );
};

export default MatchForm;
