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
  matchId: number;
  homeTeamPrediction: number;
  awayTeamPrediction: number;
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

  const handleSavePrediction = useCallback((matchId: number, home
    const awayTeamPrediction: number) => {
      const existingPrediction = predictions.find(prediction => prediction.matchId === matchId);
      if (existingPrediction) {
      const updatedPredictions = predictions.map(prediction =>
      prediction.matchId === matchId ? { ...prediction, homeTeamPrediction, awayTeamPrediction } : prediction
      );
      setPredictions(updatedPredictions);
      } else {
      const newPrediction = { matchId, homeTeamPrediction, awayTeamPrediction };
      setPredictions(predictions => [...predictions, newPrediction]);
      }
      }, [predictions]);
      
      return (
      <IonContent>
      <IonHeader>
      <IonToolbar>
      <IonTitle>Predictions</IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonList>
      {matches.map(match => (
      <IonItem key={match.id}>
      <IonLabel>
      <h2>{match.homeTeam}</h2>
      <h3>{match.score}</h3>
      <h2>{match.awayTeam}</h2>
      </IonLabel>
      <IonButton slot="end" onClick={() => handleEditMatch(match)}>
      <IonIcon icon={pencilOutline} />
      </IonButton>
      <IonButton slot="end" onClick={() => handleDeleteMatch(match.id)}>
      <IonIcon icon={trashOutline} />
      </IonButton>
      </IonItem>
      ))}
      <IonItem>
      <IonButton expand="block" onClick={() => setShowModal(true)}>
      <IonIcon icon={addOutline} slot="start" />
      Add Match
      </IonButton>
      </IonItem>
      </IonList>
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
      <IonHeader>
      <IonToolbar>
      <IonTitle>{currentMatch ? 'Edit Match' : 'Add Match'}</IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
      <IonItem>
      <IonLabel position="stacked">Home Team</IonLabel>
      <IonInput value={homeTeam} onIonChange={e => setHomeTeam(e.detail.value!)} />
      </IonItem>
      <IonItem>
      <IonLabel position="stacked">Away Team</IonLabel>
      <IonInput value={awayTeam} onIonChange={e => setAwayTeam(e.detail.value!)} />
      </IonItem>
      <IonItem>
      <IonLabel position="stacked">Score</IonLabel>
      <IonInput value={score} onIonChange={e => setScore(e.detail.value!)} />
      </IonItem>
      <IonButton expand="block" onClick={handleSaveMatch}>
      Save
      </IonButton>
      </IonList>
      </IonContent>
      </IonModal>
      </IonContent>
      );
      };
      
      export default Tab2;