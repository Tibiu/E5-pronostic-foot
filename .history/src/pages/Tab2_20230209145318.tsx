import './Tab1.css';
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonModal, IonInput, IonLabel } from '@ionic/react';
import { add } from 'ionicons/icons';

interface MatchProps {
  onCreate?: (homeTeam: string, awayTeam: string, date: string, location: string) => void;
}

const MatchCard: React.FC<MatchProps> = ({ onCreate }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    homeTeam: '',
    awayTeam: '',
    date: '',
    location: ''
  });

  const handleCreate = () => {
    onCreate!(formData.homeTeam, formData.awayTeam, formData.date, formData.location);
    setShowModal(false);
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