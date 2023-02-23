import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonText,
  IonTitle,
} from '@ionic/react';
import { add, trash } from 'ionicons/icons';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
}

interface Pronostic {
  id: number;
  matchId: number;
  scoreHome: number;
  scoreAway: number;
}

interface Props {
  matches: Match[];
  pronostics: Pronostic[];
  onSavePronostic: (pronostic: Pronostic) => void;
  onDeletePronostic: (id: number) => void;
}

const GestionPronostics: React.FC<Props> = ({
  matches,
  pronostics,
  onSavePronostic,
  onDeletePronostic,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [scoreHome, setScoreHome] = useState<number | null>(null);
  const [scoreAway, setScoreAway] = useState<number | null>(null);

  const handleOpenModal = (match: Match) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMatch(null);
    setScoreHome(null);
    setScoreAway(null);
    setIsModalOpen(false);
  };

  const handleSavePronostic = () => {
    if (!selectedMatch || scoreHome === null || scoreAway === null) {
      return;
    }

    const newPronostic: Pronostic = {
      id: pronostics.length + 1,
      matchId: selectedMatch.id,
      scoreHome,
      scoreAway,
    };

    onSavePronostic(newPronostic);
    handleCloseModal();
  };

  const handleDeletePronostic = (id: number) => {
    onDeletePronostic(id);
  };

  return (
    <>
      <IonTitle>Gestion des pronostics</IonTitle>
      <IonContent>
        <IonList>
          {matches.map((match) => {
            const pronostic = pronostics.find(
              (p) => p.matchId === match.id
            );
            const label =
              pronostic && pronostic.scoreHome !== null && pronostic.scoreAway !== null
                ? `${pronostic.scoreHome}-${pronostic.scoreAway}`
                : 'Aucun pronostic';

            return (
              <IonItem key={match.id}>
                <IonLabel>
                  <h2>{match.homeTeam} - {match.awayTeam}</h2>
                  <p>{match.date}</p>
                  <IonText color="medium">{label}</IonText>
                </IonLabel>
                <IonButton
                  fill="outline"
                  slot="end"
                  onClick={() => handleOpenModal(match)}
                >
                  <IonIcon icon={add} />
                </IonButton>
                {pronostic && (
                  <IonButton
                    fill="outline"
                    slot="end"
                    color="danger"
                    onClick={() => handleDeletePronostic(pronostic.id)}
                  >
                    <IonIcon icon={trash}
