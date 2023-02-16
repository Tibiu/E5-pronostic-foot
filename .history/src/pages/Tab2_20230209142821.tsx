import './Tab1.css';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList } from '@ionic/react';
import { trash, add } from 'ionicons/icons';
import React, { useState } from 'react';

interface MatchProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  location: string;
  onCreate?: () => void;
  onDelete?: (index: number) => void;
  index?: number;
}

const Tab2: React.FC<MatchProps> = ({ homeTeam, awayTeam, date, location, onCreate, onDelete, index }) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    setShowButtons(!showButtons);
  };
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Liste des Matchs</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonList>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Matchs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonCard onClick={handleClick}>
      <IonCardHeader>
        <IonCardTitle>{homeTeam} vs {awayTeam}</IonCardTitle>
        <IonCardSubtitle>{date}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Lieu : {location}</p>
        {showButtons && (
          <div>
            {onCreate && (
              <IonButton onClick={onCreate} fill="clear">
                <IonIcon slot="start" icon={add} />
                Ajouter
              </IonButton>
            )}
            {onDelete && (
              <IonButton onClick={() => onDelete(index!)} fill="clear">
                <IonIcon slot="start" icon={trash} />
                Supprimer
              </IonButton>
            )}
          </div>
        )}
      </IonCardContent>
    </IonCard>

      </IonList>
    </IonContent>


  </IonPage>
   
  );
};

export default Tab2;