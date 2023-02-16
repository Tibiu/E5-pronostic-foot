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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Matchs</IonTitle>
          </IonToolbar>
        </IonHeader>
       
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

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>LaLiga</IonCardTitle>
            <IonCardSubtitle>Compétition de football</IonCardSubtitle>
          </IonCardHeader>

          <IonButton fill="clear">Voir les Matchs</IonButton>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Serie A</IonCardTitle>
            <IonCardSubtitle>Compétition de football</IonCardSubtitle>
          </IonCardHeader>

          <IonButton fill="clear">Voir les Matchs</IonButton>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Super League</IonCardTitle>
            <IonCardSubtitle>Compétition de football</IonCardSubtitle>
          </IonCardHeader>

          <IonButton fill="clear">Voir les Matchs</IonButton>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
