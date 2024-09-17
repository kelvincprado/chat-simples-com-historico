import { useUser } from "@/contexts/UserContext";
import { KeyboardEvent, useState } from "react";

export const NameInput = () => {
    const userCtx = useUser();
    const [name, setName] = useState('');

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.code.toLowerCase() === 'enter') {
            if(name.trim() !== '' && name !== 'bot') {
                userCtx?.setUser(name.trim());
            }
        }
    }

    return (
        <div className="mt-14">
            <p className="text-xl mb-4">Qual seu nome?</p>
            <div className="flex gap-3 items-center text-lg">
                <input type="text" className="flex-1 border border-white/30 rounded-md px-4 py-3 text-white bg-white/10 outline-none" value={name} onChange={e => setName(e.target.value)} onKeyUp={handleKeyUpAction}/>
            </div>
        </div>
    );
}