import React, { useState } from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { trash, create } from "ionicons/icons";

type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  prediction: string;
};

type Props = {
  matches: Match[];
  onAdd: (match: Match) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, prediction: string) => void;
};

const Login: React.FC<Props> = ({ matches, onAdd, onDelete, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleSave = () => {
    if (selectedMatch) {
      onUpdate(selectedMatch.id, prediction);
    } else {
      const newMatch: Match = {
        id: matches.length + 1,
        homeTeam,
        awayTeam,
        prediction
      };
      onAdd(newMatch);
    }
    setShowModal(false);
    setSelectedMatch(null);
    setHomeTeam("");
    setAwayTeam("");
    setPrediction("");
  };

  const handleEdit = (match: Match) => {
    setSelectedMatch(match);
    setHomeTeam(match.homeTeam);
    setAwayTeam(match.awayTeam);
    setPrediction(match.prediction);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pronostics des Matchs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {matches.map((match) => (
            <IonItem key={match.id}>
              <IonLabel>{`${match.homeTeam} vs ${match.awayTeam}: ${match.prediction}`}</IonLabel>
              <IonButton fill="clear" onClick={() => handleEdit(match)}>
                <IonIcon slot="icon-only" icon={create} />
              </IonButton>
              <IonButton fill="clear" onClick={() => handleDelete(match.id)}>
                <IonIcon slot="icon-only" icon={trash} />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
        <IonButton expand="block" onClick={() => setShowModal(true)}>
          Ajouter un Pronostic
        </IonButton>
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{selectedMatch ? "Modifier Pronostic" : "Ajouter Pronostic"}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel position="floating">Equipe à domicile</IonLabel>
              <IonInput value={homeTeam} onIonChange={(e) => setHomeTeam(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Equipe à l'extérieur</IonLabel>
              <IonInput value={awayTeam} onIonChange={(e) => setAwayTeam(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Pronostic</IonLabel>
          <IonInput value={prediction} onIonChange={(e) => setPrediction(e.detail.value!)} />
        </IonItem>
        <IonButton expand="block" onClick={handleSave}>
          {selectedMatch ? "Modifier" : "Ajouter"}
        </IonButton>
        <IonButton expand="block" onClick={() => setShowModal(false)}>
          Annuler
        </IonButton>
      </IonContent>
    </IonModal>
  </IonContent>
</>
);
};

export default Login;
