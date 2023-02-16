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
          onIonChange={(e) => setEmail(e.detail.value)}
        />
        <IonInput
          type="password"
          placeholder="Mot de passe"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value)}
        />
        <IonButton onClick={handleLogin}>Connexion</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
Ce code utilise les composants Ionic pour créer une interface utilisateur pour la page de connexion. Il utilise également l'état local pour stocker les informations de connexion saisies par l'utilisateur. Lorsque l'utilisateur clique sur le bouton de connexion, il appelle la fonction handleLogin(), qui peut être utilisée pour envoyer les informations de connexion au serveur en utilisant l'API de votre choix.




