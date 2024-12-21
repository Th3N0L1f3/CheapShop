type FormProps = {
    mode?: "signin" | "registered";
};

import Button from "./Button";
import Input from "./Input";

export default function Form({ mode }: FormProps) {
  if (mode === "registered") {
    return (
        <form className="flex flex-col gap-4 max-w-md bg-white p-5 rounded-2xl relative shadow-md">
            <p className="text-2xl font-medium text-blue font-semibold tracking-tight flex items-center pl-8 relative">
                S'enregistrer
                <span className="absolute left-0 w-4 h-4 bg-blue rounded-full"></span>
                <span className="absolute left-0 w-4 h-4 bg-blue rounded-full animate-pulse"></span>
            </p>
            <p className="text-sm font-default text-dark-orange">Inscrivez-vous dès maintenant et bénéficiez d'un accès complet à notre application.</p>
            
            <div className="flex gap-2">
                <Input
                    placeholder="Nom"
                    type="text"
                    mode="form-input"
                />
                <Input
                    placeholder="Prénom"
                    type="text"
                    mode="form-input"
                />
            </div>

            <Input
                placeholder="Email"
                type="email"
                mode="form-input"
            />

            <Input
                placeholder="Mot de passe"
                type="password"
                mode="form-input"
            />

            <Input
                placeholder="Confirmer le mot de passe"
                type="password"
                mode="form-input"
            />

            <Button
                text="Envoyer"
                forme="rectangle"
                className="font-default w-full"
            />

            <p className="text-sm text-center font-default text-dark-orange">
                Vous avez déjà un compte ?  
                <a href="#" className="text-blue hover:underline"> Se connecter</a>
            </p>
        </form>
        );
    } else if (mode === "signin") {
        return (
            <form className="flex flex-col gap-4 max-w-md bg-white p-5 rounded-2xl relative shadow-md">
                <p className="text-2xl font-medium text-blue font-semibold tracking-tight flex items-center pl-8 relative">
                    Se connecter
                    <span className="absolute left-0 w-4 h-4 bg-blue rounded-full"></span>
                    <span className="absolute left-0 w-4 h-4 bg-blue rounded-full animate-pulse"></span>
                </p>
                <p className="text-sm font-default text-dark-orange">Connectez-vous dès maintenant et bénéficiez d'un accès complet à notre application.</p>

                <Input
                    placeholder="Email"
                    type="email"
                    mode="form-input"
                />

                <Input
                    placeholder="Mot de passe"
                    type="password"
                    mode="form-input"
                />

                <Button
                    text="Envoyer"
                    forme="rectangle"
                    className="font-default w-full"
                />

                <p className="text-sm text-center font-default text-dark-orange">
                    Vous n’avez pas de compte ?                
                    <a href="#" className="text-blue hover:underline"> S'inscrire</a>
                </p>
            </form>
        );
        
    } else {
        return null;
    }
}
