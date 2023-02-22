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
    modal.current?.dismiss(input.current?.value, 'confirm');
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
    'Créer un match !!!'
  );

  // function confirm() {
  //   modal.current?.dismiss(input.current?.value, 'confirm');
  // }

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
                <IonButton color="danger" onClick={() => modal.current?.dismiss()}>Fermer</IonButton>
              </IonButtons>
              <IonTitle>Créer un Match</IonTitle>
              <IonButtons slot="end">
                <IonButton color="success" strong={true} onClick={() => handleSaveMatch()}>Confirmer</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">

            <form onSubmit={(e) => e.preventDefault()}>
            <IonItem>
              <IonLabel position="stacked">Equipe 1:</IonLabel>
              <IonInput name="homeTeam" placeholder="Equipe à domicile" value={match.homeTeam} onIonChange={handleInputChange} />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Equipe 2:</IonLabel>
              <IonInput name="awayTeam" placeholder="Equipe à l'extérieur" value={match.awayTeam} onIonChange={handleInputChange} />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Score:</IonLabel>
              <IonInput name="score" placeholder="Example 2-1"value={match.score} onIonChange={handleInputChange} />
            </IonItem>

              {/* <IonButton onClick={handleSaveMatch}>Enregistrer le match</IonButton> */}
            </form>

          </IonContent>
          
        </IonModal>
      </IonContent>


    </IonPage>
  );
};

export default MatchForm;
