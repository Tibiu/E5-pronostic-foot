import { IonBackButton, IonButton, IonButtons, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonPage, IonRouterLink, IonRow, IonToolbar } from '@ionic/react';

import { arrowBack, shapesOutline } from "ionicons/icons";
import CustomField from '../components/CustomField';
import { useLoginFields } from '../data/fields';
import { Action } from '../components/Action.js';
import { Wave } from '../components/Wave';
import { useEffect, useState } from 'react';
import { validateForm } from '../data/utils';
import { useParams } from 'react-router';

const Login = () => {
    
    const params = useParams();

    const fields = useLoginFields();
    const [ errors, setErrors ] = useState(false);

    const login = () => {

        const errors = validateForm(fields);
        setErrors(errors);

        if (!errors.length) {

            //  Submit your form here
        }
    }

    useEffect(() => {

        return () => {

            fields.forEach(field => field.input.state.reset(""));
            setErrors(false);
        }
    }, [params]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					
                    <IonButtons slot="start">
                        <IonBackButton icon={ arrowBack } text=""/>
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon icon={ shapesOutline } />
                        </IonButton>
                    </IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCardTitle>Log in</IonCardTitle>
                            <h5>Welcome back, hope you're doing well</h5>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>

                            { fields.map(field => {

                                return <CustomField field={ field } errors={ errors } />;
                            })}

                            <IonButton expand="block" onClick={ login }>Login</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
			</IonContent>

			<IonFooter>
				<IonGrid>

                    <Action message="Don't have an account?" text="Sign up" link="/signup" />
                    <Wave />
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default Login;