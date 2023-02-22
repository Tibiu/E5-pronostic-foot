import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

//Information des matchs
type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
};

const Home: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentMatch, setCurrentMatch] = useState<Match | undefined>(undefined);
  const [homeTeam, setHomeTeam] = useState<string>('');
  const [awayTeam, setAwayTeam] = useState<string>('');
  const [score, setScore] = useState<string>('');

  const handleSaveMatch = () => {
    if (currentMatch) {
      // On met à jour un match existant
      const updatedMatches = matches.map(match =>
        match.id === currentMatch.id ? { ...match, homeTeam, awayTeam, score } : match
      );
      setMatches(updatedMatches);
      setCurrentMatch(undefined);
    } else {
      // On ajoute un nouveau match
      const newMatch = { id: matches.length + 1, homeTeam, awayTeam, score };
      setMatches([...matches, newMatch]);
    }
    setShowModal(false);
    setHomeTeam('');
    setAwayTeam('');
    setScore('');
  };

  const handleDeleteMatch = (id: number) => {
    const updatedMatches = matches.filter(match => match.id !== id);
    setMatches(updatedMatches);
  };

  const handleEditMatch = (match: Match) => {
    setCurrentMatch(match);
    setHomeTeam(match.homeTeam);
    setAwayTeam(match.awayTeam);
    setScore(match.score);
    setShowModal(true);
  };

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Matchs</IonTitle>
          <IonButton slot="end" onClick={() => setShowModal(true)}>Ajouter un match</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonList>
        {matches.map(match => (
          <IonItem key={match.id}>
            <IonLabel>

              <IonText>
                {match.homeTeam} vs {match.awayTeam} - Score : {match.score}
              </IonText>
            </IonLabel>

            <IonButton color="warning" onClick={() => handleEditMatch(match)}>
              Modifier
            </IonButton>

            <IonButton color="danger" onClick={() => handleDeleteMatch(match.id)}>
              Supprimer
            </IonButton>

          </IonItem>
        ))}
      </IonList>
      <IonModal isOpen={showModal}>
      <IonHeader>
            <IonToolbar>
              <IonTitle>Créer un Match</IonTitle>
            </IonToolbar>
          </IonHeader>

        <IonItem>
          <IonLabel position="floating">Equipe 1</IonLabel>
          <IonInput value={homeTeam} onIonChange={e => setHomeTeam(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Equipe 2</IonLabel>
          <IonInput value={awayTeam} onIonChange={e => setAwayTeam(e.detail.value!)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Score</IonLabel>
          <IonInput value={score} onIonChange={e => setScore(e.detail.value!)} />
        </IonItem>

        <IonButton color="success" onClick={handleSaveMatch}>Enregistrer</IonButton>
        <IonButton onClick={() => setShowModal(false)}>Annuler</IonButton>

      </IonModal>
    </IonContent>
  );
};

export default Home;

