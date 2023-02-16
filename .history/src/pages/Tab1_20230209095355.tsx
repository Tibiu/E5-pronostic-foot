import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
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
      </IonContent>

      <IonCard>
      <IonCardHeader>
        <IonCardTitle>Ligue 1</IonCardTitle>
        <IonCardSubtitle>Compétition de football</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      Le Championnat de France de football, de plus haut niveau de la FFF. Il regroupe les meilleurs clubs de France métropolitaine et de Monaco.
      </IonCardContent>

      <IonButton fill="clear">Action 1</IonButton>
      <IonButton fill="clear">Action 2</IonButton>
    </IonCard>

      <IonCard>
      <IonCardHeader>
        <IonCardTitle>FA Cup</IonCardTitle>
        <IonCardSubtitle>Compétition de football</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      La Coupe d'Angleterre de football, c'est une compétition de football à élimination directe. La FA Cup est la doyenne des compétitions de football dans le monde.
      </IonCardContent>

      <IonButton fill="clear">Action 1</IonButton>
      <IonButton fill="clear">Action 2</IonButton>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle>FA Cup</IonCardTitle>
        <IonCardSubtitle>Compétition de football</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      La Coupe d'Angleterre de football, c'est une compétition de football à élimination directe. La FA Cup est la doyenne des compétitions de football dans le monde.
      </IonCardContent>

      <IonButton fill="clear">Action 1</IonButton>
      <IonButton fill="clear">Action 2</IonButton>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle>FA Cup</IonCardTitle>
        <IonCardSubtitle>Compétition de football</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      La Coupe d'Angleterre de football, c'est une compétition de football à élimination directe. La FA Cup est la doyenne des compétitions de football dans le monde.
      </IonCardContent>

      <IonButton fill="clear">Action 1</IonButton>
      <IonButton fill="clear">Action 2</IonButton>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle>FA Cup</IonCardTitle>
        <IonCardSubtitle>Compétition de football</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      La Coupe d'Angleterre de football, c'est une compétition de football à élimination directe. La FA Cup est la doyenne des compétitions de football dans le monde.
      </IonCardContent>

      <IonButton fill="clear">Action 1</IonButton>
      <IonButton fill="clear">Action 2</IonButton>
    </IonCard>
    
    </IonPage>
  );
};

export default Tab1;
