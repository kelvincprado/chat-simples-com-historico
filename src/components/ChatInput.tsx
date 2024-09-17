import { useChat } from "@/contexts/ChatContext";
import { KeyboardEvent, useState } from "react";

type Props = {
    name: string;
}

export const ChatInput = ({ name }: Props) => {
    const chatCtx = useChat();
    const [textInput, setTextInput] = useState('');

    const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code.toLowerCase() === 'enter') {
            if(textInput.trim() !== '') {
                chatCtx?.addMessage(name, textInput);
                setTextInput('');
            }
        }
    }

    return (
        <input type="text" 
            className="w-full bg-transparent outline-none text-md" 
            placeholder={`${name}, digite uma mensagem (e aperte enter)`} 
            value={textInput} 
            onChange={e => setTextInput(e.target.value)} 
            onKeyUp={handleKeyUpAction}
        />
    );
}