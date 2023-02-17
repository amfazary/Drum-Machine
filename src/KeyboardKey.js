import { useEffect } from "react";


const KeyboardKey = ({ activeClass, play, sound: {id, key, url, heyCode} }) => {
    
    const handleKeydown = (e) => {
        if (e.keyCode === heyCode) {
            play(key, activeClass);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeydown);
        console.log(id);
    // eslint-disable-next-line
    }, [])
    
    return (
        <button id ={ id } className="drum-pad" onClick={()=> play(key, activeClass)}>
            <audio id={ key } className="clip" src={ url } />
            { key }
        </button>
    );
}
 
export default KeyboardKey;