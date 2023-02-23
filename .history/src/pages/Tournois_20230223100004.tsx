import React, { useState, useCallback } from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { pencilOutline, trashOutline } from 'ionicons/icons';

interface Tournament {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
}

const initialTournamentState = {
  id: 0,
  name: '',
  startDate: '',
  endDate: '',
  location: ''
};

const Tab1: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentTournament, setCurrentTournament] = useState<Tournament | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleSaveTournament = useCallback(() => {
    if (currentTournament) {
      const updatedTournaments = tournaments.map(tournament =>
        tournament.id === currentTournament.id ? { ...tournament, name, startDate, endDate, location } : tournament
      );
      setTournaments(updatedTournaments);
      setCurrentTournament(undefined);
    } else {
      const newTournament = { ...initialTournamentState, id: tournaments.length + 1, name, startDate, endDate, location };
      setTournaments([...tournaments, newTournament]);
    }
    setShowModal(false);
    setName(initialTournamentState.name);
    setStartDate(initialTournamentState.startDate);
    setEndDate(initialTournamentState.endDate);
    setLocation(initialTournamentState.location);
  }, [currentTournament, name, startDate, endDate, location, tournaments]);

  const handleDeleteTournament = useCallback((id: number) => {
    const updatedTournaments = tournaments.filter(tournament => tournament.id !== id);
    setTournaments(updatedTournaments);
  }, [tournaments]);

  const handleEditTournament = useCallback((tournament: Tournament) => {
    setCurrentTournament(tournament);
    setName(tournament.name);
    setStartDate(tournament.startDate);
    setEndDate(tournament.endDate);
    setLocation(tournament.location);
    setShowModal(true);
  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Tournois</IonTitle>
          <IonButton slot="end" onClick={() => setShowModal(true)}>Ajouter un Tournoi</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {tournaments.map(tournament => (
            <IonItem key={tournament.id}>
              <IonLabel>
                <IonText>
                  {tournament.name} ({tournament.startDate} - {tournament.endDate}) - {tournament.location}
                </IonText>
              </IonLabel>
              <IonButton color="warning" onClick={() => handleEditTournament(tournament)} fill="clear" slot="end" icon-only>
                <IonIcon icon={pencilOutline} />
              </IonButton>
              <IonButton color="danger" onClick={() => handleDeleteTournament(tournament.id)} fill="clear" slot="end" icon-only>
              <IonIcon icon={trashOutline} />
          </IonButton>
        </IonItem>
      ))}
    </IonList>
  </IonContent>
  <IonModal isOpen={showModal}>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{currentTournament ? 'Modifier le tournoi' : 'Ajouter un tournoi'}</IonTitle>
        {/* <IonButton slot="end" onClick={() => setShowModal(false)}>Fermer</IonButton> */}
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel position="floating">Nom</IonLabel>
          <IonInput value={name} onIonChange={e => setName(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Date de début</IonLabel>
          <IonInput value={startDate} onIonChange={e => setStartDate(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Date de fin</IonLabel>
          <IonInput value={endDate} onIonChange={e => setEndDate(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Lieu</IonLabel>
          <IonInput value={location} onIonChange={e => setLocation(e.detail.value!)}></IonInput>
        </IonItem>
      </IonList>
    </IonContent>
    <IonButton color="success" onClick={handleSaveTournament}>{currentTournament ? 'Enregistrer les modifications' : 'Créer le tournoi'}</IonButton>
        <IonButton color="danger"onClick={() => setShowModal(false)}>Annuler</IonButton>
  </IonModal>
</>
  );
};

export default Tab1;
