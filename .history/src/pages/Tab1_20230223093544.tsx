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

const Tournaments: React.FC = () => {
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
