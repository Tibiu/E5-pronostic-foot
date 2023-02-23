import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useCallback } from 'react';
import { pencilOutline, trashOutline, addOutline } from 'ionicons/icons';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
}

interface Prediction {
  id: number;
  matchId: number;
  user: string;
  score: string;
}


const preMatchs = [
  { id: 1, homeTeam: 'Barcelona', awayTeam: 'Real Madrid', score: '2-2' },
  { id: 2, homeTeam: 'Manchester United', awayTeam: 'Manchester City', score: '1-0' },
  { id: 3, homeTeam: 'Liverpool', awayTeam: 'Chelsea', score: '3-2' },
  { id: 4, homeTeam: 'Bayern Munich', awayTeam: 'Borussia Dortmund', score: '4-1' },
  { id: 5, homeTeam: 'Paris Saint-Germain', awayTeam: 'Marseille', score: '2-1' }
];

const Tab2: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>(preMatchs);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentMatch, setCurrentMatch] = useState<Match | undefined>(undefined);
  const [homeTeam, setHomeTeam] = useState<string>('');
  const [awayTeam, setAwayTeam] = useState<string>('');
  const [score, setScore] = useState<string>('');
  const [predictions, setPredictions] = useState<Prediction[]>([]);


  const initialMatchState = {
    id: 0,
    homeTeam: '',
    awayTeam: '',
    score: ''
  };

  const handleSaveMatch = useCallback(() => {
    if (currentMatch) {
      const updatedMatches = matches.map(match =>
        match.id === currentMatch.id ? { ...match, homeTeam, awayTeam, score } : match
      );
      setMatches(updatedMatches);
    } else {
      const newMatch = { ...initialMatchState, id: matches.length + 1, homeTeam, awayTeam, score };
      setMatches(matches => [...matches, newMatch]);
    }
    setShowModal(false);
    setHomeTeam(initialMatchState.homeTeam);
    setAwayTeam(initialMatchState.awayTeam);
    setScore(initialMatchState.score);
    setCurrentMatch(undefined);
  }, [currentMatch, homeTeam, awayTeam, score, matches, initialMatchState]);

  const handleDeleteMatch = useCallback((id: number) => {
    setMatches(matches => matches.filter(match => match.id !== id));
  }, []);

  const handleEditMatch = useCallback((match: Match) => {
    setCurrentMatch(match);
    setHomeTeam(match.homeTeam);
    setAwayTeam(match.awayTeam);
    setScore(match.score);
    setShowModal(true);
  }, []);

  const handleAddPrediction = useCallback((match: Match) => {
    setCurrentMatch(match);
    setShowModal(true);
  }, []);
  const handleSavePrediction = useCallback(() => {
    if (currentMatch) {
      const newPrediction = { id: predictions.length + 1,matchId: currentMatch.id, user: 'user1', score };
      setPredictions(predictions => [...predictions, newPrediction]);
    
    }
    setShowModal(false);
    setScore(initialMatchState.score);
    setCurrentMatch(undefined);
  }, [currentMatch, score, initialMatchState]);
  
  const handleDeletePrediction = useCallback((id: number) => {
    setPredictions(predictions => predictions.filter(prediction => prediction.id !== id));
  }, []);

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Matchs</IonTitle>
          {/* <IonButton slot="end" onClick={() => setShowModal(true)}>Ajouter un match</IonButton> */}
          <IonButton onClick={() =>setShowModal(true)} fill="clear" slot="end" icon-only>
          <IonIcon icon={addOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonList>
        {matches.map(match => (
          <IonItem key={match.id}>
            <IonLabel>

              <IonText>
                {match.homeTeam} vs {match.awayTeam} - Score : {match.score} - {predictions.filter(prediction => prediction.matchId === match.id).length} pronostics
              </IonText>
            </IonLabel>

            <IonButton color="warning" onClick={() => handleEditMatch(match)} fill="clear" slot="end" icon-only>
              <IonIcon icon={pencilOutline} />
            </IonButton>

            <IonButton color="danger" onClick={() => handleDeleteMatch(match.id)} fill="clear" slot="end" icon-only>
              <IonIcon icon={trashOutline} />
            </IonButton>

            <IonButton onClick={() => handleAddPrediction(match)} fill="clear" slot="end" icon-only>
              <IonIcon icon={addOutline} />
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
        <IonButton color="danger"onClick={() => setShowModal(false)}>Annuler</IonButton>

      </IonModal>

      <IonModal isOpen={showModal}>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Faire un pronostic</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonItem>
    <IonLabel position="floating">Score</IonLabel>
    <IonInput value={score} onIonChange={e => setScore(e.detail.value!)} />
  </IonItem>
  <IonButton color="success" onClick={handleSavePrediction}>Enregistrer</IonButton>
  <IonButton color="danger" onClick={() => setShowModal(false)}>Annuler</IonButton>
</IonModal>

    </IonContent>
  );
};

export default Tab2;
