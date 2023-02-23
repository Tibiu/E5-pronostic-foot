import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useCallback } from 'react';
import { pencilOutline, trashOutline, addOutline } from 'ionicons/icons';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
  prediction: string;
}

const preMatchs = [
  { id: 1, homeTeam: 'Barcelona', awayTeam: 'Real Madrid', score: '2-2', prediction: '' },
  { id: 2, homeTeam: 'Manchester United', awayTeam: 'Manchester City', score: '1-0', prediction: '' },
  { id: 3, homeTeam: 'Liverpool', awayTeam: 'Chelsea', score: '3-2', prediction: '' },
  { id: 4, homeTeam: 'Bayern Munich', awayTeam: 'Borussia Dortmund', score: '4-1', prediction: '' },
  { id: 5, homeTeam: 'Paris Saint-Germain', awayTeam: 'Marseille', score: '2-1', prediction: '' }
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
    setPrediction(match.prediction);
    setShowModal(true);
  }, []);