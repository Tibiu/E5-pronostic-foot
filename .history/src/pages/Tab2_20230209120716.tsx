import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList } from '@ionic/react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
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
            <IonCardTitle>Auxerre - Reims</IonCardTitle>
            <IonCardSubtitle>Ligue 1</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            
          </IonCardContent>

          <IonButton fill="clear">Voir les Matchs</IonButton>
        </IonCard>
        
        
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
