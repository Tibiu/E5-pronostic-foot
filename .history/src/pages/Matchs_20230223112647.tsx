mport { useState, useCallback } from 'react';
import {IonButton,IonContent,IonHeader,IonIcon,IonInput,
IonItem,
IonLabel,
IonList,
IonModal,
IonText,
IonTitle,
IonToolbar,
} from '@ionic/react';
import { pencilOutline, trashOutline, addOutline, bulbOutline } from 'ionicons/icons';

interface Match {
id: number;
homeTeam: string;
awayTeam: string;
score: string;
predictions: Record<string, string>; // utiliser Record pour un objet de type { [userId: string]: string }
}

interface MatchModalProps {
show: boolean;
match: Match | undefined;
onSave: (match: Match) => void;
onClose: () => void;
}

interface MatchFormProps {
match: Match;
onChange: (match: Match) => void;
}

interface MatchItemProps {
match: Match;
onEdit: (match: Match) => void;
onDelete: (match: Match) => void;
onPredict: (match: Match) => void;
}

interface MatchListProps {
matches: Match[];
onEdit: (match: Match) => void;
onDelete: (match: Match) => void;
onPredict: (match: Match) => void;
}

const preMatchs = [
{ id: 1, homeTeam: 'Barcelona', awayTeam: 'Real Madrid', score: '2-2', predictions: {} },
{ id: 2, homeTeam: 'Manchester United', awayTeam: 'Manchester City', score: '1-0', predictions: {} },
{ id: 3, homeTeam: 'Liverpool', awayTeam: 'Chelsea', score: '3-2', predictions: {} },
{ id: 4, homeTeam: 'Bayern Munich', awayTeam: 'Borussia Dortmund', score: '4-1', predictions: {} },
{ id: 5, homeTeam: 'Paris Saint-Germain', awayTeam: 'Marseille', score: '2-1', predictions: {} },
];

const MatchModal: React.FC<MatchModalProps> = ({ show, match, onSave, onClose }) => {
const [homeTeam, setHomeTeam] = useState(match?.homeTeam ?? '');
const [awayTeam, setAwayTeam]