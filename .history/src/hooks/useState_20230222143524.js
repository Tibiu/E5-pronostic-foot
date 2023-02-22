import React, { useState } from 'react';

const MatchForm = () => {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [score, setScore] = useState('');

  const handleSaveMatch = () => {
    // Enregistrer les informations du match ici
    console.log('Match enregistré:', { homeTeam, awayTeam, score });

    // Réinitialiser les champs du formulaire
    setHomeTeam('');
    setAwayTeam('');
    setScore('');
  };

  return (
    <div>
      <label>Equipe à domicile:</label>
      <input type="text" value={homeTeam} onChange={(e) => setHomeTeam(e.target.value)} />

      <label>Equipe à l'extérieur:</label>
      <input type="text" value={awayTeam} onChange={(e) => setAwayTeam(e.target.value)} />

      <label>Score:</label>
      <input type="text" value={score} onChange={(e) => setScore(e.target.value)} />

      <button onClick={handleSaveMatch}>Enregistrer le match</button>
    </div>
  );
};

export default MatchForm;
