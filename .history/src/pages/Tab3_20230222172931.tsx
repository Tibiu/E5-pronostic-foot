import React, { useState } from 'react';
import { IonList, IonItem, IonLabel, IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonInput } from '@ionic/react';
import { trash, create } from 'ionicons/icons';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
}

const MatchForm: React.FC<{ match?: Match, onSaveMatch: (match: Match) => void, onCloseModal: () => void }> = ({ match, onSaveMatch, onCloseModal }) => {
  const [homeTeam, setHomeTeam] = useState<string>(match ? match.homeTeam : '');
  const [awayTeam, setAwayTeam] = useState<string>(match ? match.awayTeam : '');
  const [score, setScore] = useState<string>(match ? match.score : '');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMatch: Match = {
      id: match ? match.id : Date.now(),
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      score: score
    };

    onSaveMatch(newMatch);

    setHomeTeam('');
    setAwayTeam('');
    setScore('');
  };

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{match ? 'Edit Match' : 'Add a new match'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel position="floating">Home Team</IonLabel>
          <IonInput type="text" value={homeTeam} onIonChange={(event) => setHomeTeam(event.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Away Team</IonLabel>
          <IonInput type="text" value={awayTeam} onIonChange={(event) => setAwayTeam(event.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Score</IonLabel>
          <IonInput type="text" value={score} onIonChange={(event) => setScore(event.detail.value!)} />
        </IonItem>
        <IonButton type="submit" expand="block">{match ? 'Save' : 'Add'} Match</IonButton>
        <IonButton onClick={onCloseModal} expand="block">Close Modal</IonButton>
      </form>
    </IonContent>
  );
};

const MatchList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const handleSaveMatch = (match: Match) => {
    // Si un match a été sélectionné, c'est une mise à jour
    if (selectedMatch) {
      setMatches(matches.map(m => m.id === selectedMatch.id ? match : m));
      setSelectedMatch(null);
    } else {
      // Ajouter le match à la liste des matches
      setMatches([...matches, match]);
    }

    // Fermer le modal
    setShowModal(false);
  };

  const handleDeleteMatch = (match: Match) => {
    setMatches(matches.filter(m => m.id !== match.id));
  };

  const handleEditMatch = (match: Match) => {
    setSelectedMatch(match);
    setShowModal(true);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Match List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {matches.map(match => (
            <IonItem key={match.id}>
              <IonLabel>
                <h2>{match.homeTeam} vs {match.awayTeam}</h2>
                <h3>Score: {match.score}</h3>
              </IonLabel>
              <IonButton onClick={() => handleEditMatch(match)} slot="end">
                <IonIcon icon={create} />
              </IonButton>
              <IonButton onClick={() => handleDeleteMatch(match)} slot="end">
                <IonIcon icon={trash} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
        <IonButton onClick={() => setShowModal(true)} expand="block">Add Match</IonButton>
      </IonContent>
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <MatchForm match={selectedMatch} onSaveMatch={handleSaveMatch} onCloseModal={() => setShowModal(false)} />
      </IonModal>
    </>
  );
};

export default MatchList;

