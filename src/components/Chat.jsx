import { useState, useRef, useEffect } from "react"    

export default function Chat() {
    const [userInput, setUserInput] = useState('Hello')  
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const handleChange = (e) => {
        const text = e.target.value.trim();
        console.log(text);
        setUserInput(text);
    }

    const handleSubmit = (e) => {
        try {
        e.preventDefault();
        console.log(`Data: ${userInput}`);
    } catch (e) {
        console.error(e);
    }
}

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>
                    <input 
                    type="text /" 
                    name='userInput' 
                    value={userInput}
                    onChange={handleChange} 
                    />
                </label>

                <button> Send</button>
            </form>
        </div>
    )
}
