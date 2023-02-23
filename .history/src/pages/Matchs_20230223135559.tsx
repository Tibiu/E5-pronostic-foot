import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useCallback } from 'react';
import { pencilOutline, trashOutline, addOutline } from 'ionicons/icons';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
  prediction?: string;
}

const preMatchs: Match[] = [
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
  const [prediction, setPrediction] = useState<string>('');

  const initialMatchState = {
    id: 0,
    homeTeam: '',
    awayTeam: '',
    score: '',
    prediction: ''
  };

  const handleSaveMatch = useCallback(() => {
    if (currentMatch) {
      const updatedMatches = matches.map(match =>
        match.id === currentMatch.id ? { ...match, homeTeam, awayTeam, score, prediction } : match
      );
      setMatches(updatedMatches);
    } else {
      const newMatch = { ...initialMatchState, id: matches.length + 1, homeTeam, awayTeam, score, prediction };
      setMatches(matches => [...matches, newMatch]);
    }
    setShowModal(false);
    setHomeTeam(initialMatchState.homeTeam);
    setAwayTeam(initialMatchState.awayTeam);
    setScore(initialMatchState.score);
    setPrediction(initialMatchState.prediction);
    setCurrentMatch(undefined);
  }, [currentMatch, homeTeam, awayTeam, score, prediction, matches, initialMatchState]);

  const handleDeleteMatch = useCallback((id: number) => {
    setMatches(matches => matches.filter(match => match.id !== id));
  }, []);

  const handleEditMatch = useCallback((match: Match) => {
    setCurrentMatch(match);
    setHomeTeam(match.homeTeam);
    setAwayTeam(match.awayTeam);
    setScore(match.score);
    setPrediction(match.prediction || '');
    setShowModal(true);
  }, []);

  const handleSavePrediction = useCallback((match: Match, prediction: string) => {
    const updatedMatches = matches.map(m =>
      m.id === match.id ? { ...m, prediction } : m
    );
    setMatches(updatedMatches);
  }, [matches]);

  return (
    <IonContent>
    <IonHeader>
    <IonToolbar>
    <IonTitle>Matches</IonTitle>
    </IonToolbar>
    </IonHeader>
    <IonList>
    {matches.map(match => (
    <IonItem key={match.id}>
    <IonLabel>
    <h2>{match.homeTeam} vs {match.awayTeam}</h2>
    <h3>{match.score}</h3>
    {match.prediction && (
    <p>Your prediction: {match.prediction}</p>
    )}
    </IonLabel>
    <IonButton onClick={() => handleEditMatch(match)}>
    <IonIcon slot="icon-only" icon={pencilOutline} />
    </IonButton>
    <IonButton onClick={() => handleDeleteMatch(match.id)}>
    <IonIcon slot="icon-only" icon={trashOutline} />
    </IonButton>
    </IonItem>
    ))}
    </IonList>
    <IonButton expand="block" onClick={() => setShowModal(true)}>
    <IonIcon slot="start" icon={addOutline} />
    Add Match
    </IonButton>
    <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
    <IonHeader>
    <IonToolbar>
    <IonTitle>{currentMatch ? 'Edit Match' : 'Add Match'}</IonTitle>
    </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonList>
    <IonItem>
    <IonLabel position="floating">Home Team</IonLabel>
    <IonInput value={homeTeam} onIonChange={e => setHomeTeam(e.detail.value!)} />
    </IonItem>
    <IonItem>
    <IonLabel position="floating">Away Team</IonLabel>
    <IonInput value={awayTeam} onIonChange={e => setAwayTeam(e.detail.value!)} />
    </IonItem>
    <IonItem>
    <IonLabel position="floating">Score</IonLabel>
    <IonInput value={score} onIonChange={e => setScore(e.detail.value!)} />
    </IonItem>
    <IonItem>
    <IonLabel position="floating">Prediction</IonLabel>
    <IonInput value={prediction} onIonChange={e => setPrediction(e.detail.value!)} />
    </IonItem>
    </IonList>
    </IonContent>
    <IonButton onClick={handleSaveMatch} expand="block">
    Save Match
    </IonButton>
    </IonModal>
    </IonContent>
    );
    };
    
    export default Tab2;
