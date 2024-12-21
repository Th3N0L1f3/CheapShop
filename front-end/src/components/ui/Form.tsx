type FormProps = {
    mode?: "signin" | "registered";
};

import Button from "./Button";

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
                <label className="relative w-full">
                    <input 
                        required 
                        placeholder="Prénom" 
                        type="text" 
                        className="w-full font-default p-3 border border-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-blue" 
                    />
                </label>

                <label className="relative w-full">
                    <input 
                        required 
                        placeholder="Nom" 
                        type="text" 
                        className="w-full font-default p-3 border border-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-blue" 
                    />
                </label>
            </div>

            <label className="relative">
                <input 
                    required 
                    placeholder="Email" 
                    type="email" 
                    className="w-full font-default p-3 border border-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
            </label>

            <label className="relative">
                <input 
                    required 
                    placeholder="Mot de passe" 
                    type="password" 
                    className="w-full font-default p-3 border border-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
            </label>

            <label className="relative">
                <input 
                    required 
                    placeholder="Confirmer le mot de passe" 
                    type="password" 
                    className="w-full font-default p-3 border border-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                />
            </label>

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

                <label className="relative">
                    <input 
                        required 
                        placeholder="Email" 
                        type="email" 
                        className="w-full p-3 font-default border border-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    />
                </label>

                <label className="relative">
                    <input 
                        required 
                        placeholder="Password" 
                        type="password" 
                        className="w-full p-3 font-default border border-orange rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
                    />
                </label>

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
