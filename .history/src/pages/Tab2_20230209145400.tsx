import './Tab1.css';
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonModal, IonInput, IonLabel } from '@ionic/react';
import { add } from 'ionicons/icons';

interface MatchProps {
  onCreate?: (homeTeam: string, awayTeam: string, date: string, location: string) => void;
}

const Tab2: React.FC<MatchProps> = ({ onCreate }) => {
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

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Nouveau match</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton onClick={() => setShowModal(true)} fill="clear">
            <IonIcon slot="start" icon={add} />
            Créer
          </IonButton>
        </IonCardContent>
      </IonCard>
      <IonModal isOpen={showModal}>
        <IonInput
          value={formData.homeTeam}
          placeholder="Equipe à domicile"
          onIonChange={e => setFormData({ ...formData, homeTeam: e.detail.value! })}
        />
        <IonInput
          value={formData.awayTeam}
          placeholder="Equipe à l'extérieur"
          onIonChange={e => setFormData({ ...formData, awayTeam: e.detail.value! })}
        />
        <IonInput
          value={formData.date}
          type="date"
          placeholder="Date"
          onIonChange={e => setFormData({ ...formData, date: e.detail.value! })}
        />
        <IonInput
          value={formData.location}
          placeholder="Lieu"
          onIonChange={e => setFormData({ ...formData, location: e.detail.value! })}
        />
        <IonButton onClick={handleCreate}>Créer</IonButton>
      </IonModal>
      </IonList>
    </IonContent>


  </IonPage>
   
  );
};

export default Tab2;