import { IonInput, IonLabel } from "@ionic/react";

const CustomField = ({field, errors}) => {

    const error = errors && errors.filter(e => e.id === field.id)[0];
    const errorMessage = error && errors.filter(e => e.id === field.id)[0].message;

    return (
        
        <div>
            <IonLabel>
                { field.label }
                { error && <p className="animate__animated animate__bounceIn">{ errorMessage }</p> }
            </IonLabel>
            <IonInput/>
        </div>
    );
};

export default CustomField;