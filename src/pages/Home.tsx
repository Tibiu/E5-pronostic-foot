import { IonButton, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';
import { Action } from '../components/Action';


const Home = () => {
	
	return (
		<IonPage>
			<IonHeader>
				{/* <IonToolbar className="ion-no-margin ion-no-padding"> */}
					<IonImg src="/assets/login2.jpeg" />
				{/* </IonToolbar> */}
			</IonHeader>
			<IonContent fullscreen>

				<div>
					<IonGrid>
						<IonRow>
							<IonCol>
								<IonCardTitle>Join millions of other people discovering their creative side</IonCardTitle>
							</IonCol>
						</IonRow>

						<IonRow >
							<IonRouterLink routerLink="/signup" className="custom-link">
								<IonCol size="11">
									<IonButton>Get started &rarr;</IonButton>
								</IonCol>
							</IonRouterLink>
						</IonRow>
					</IonGrid>
				</div>
			</IonContent>

			<IonFooter>
				<IonGrid>
					<Action message="Already got an account?" text="Login" link="/login" />
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default Home;