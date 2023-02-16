import React, { useState } from 'react';
import { IonContent, IonInput, IonButton, IonPage } from '@ionic/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Vous pouvez utiliser ici l'API de votre choix pour envoyer les informations de connexion au serveur
    console.log(`Email: ${email}, Mot de passe: ${password}`);
  };

  return (
    <IonPage>
      <IonContent>
        <IonInput
          type="email"
          placeholder="Adresse email"
          value={email}
        />
        <IonInput
          type="password"
          placeholder="Mot de passe"
          value={password}
        />
        <IonButton onClick={handleLogin}>Connexion</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;





