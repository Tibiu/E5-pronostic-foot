import './Tab1.css';
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList,IonRow,IonCol,IonGrid,IonImg } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,IonFabButton,IonFab, IonCardContent, IonButton, IonIcon, IonModal, IonInput, IonLabel } from '@ionic/react';
import { add } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { usePhotoGallery } from '../hooks/competition';

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

  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Photo Gallery</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name="Tab 2 page" />
    </IonContent>
    <IonContent>
<IonGrid>
  <IonRow>
    {photos.map((photo, index) => (
      <IonCol size="6" key={index}>
        <IonImg src={photo.webviewPath} />
      </IonCol>
    ))}
  </IonRow>
</IonGrid>
</IonContent>
    <IonContent>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => takePhoto()}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonContent>
</IonPage>
   
  );
};


export default Tab2;