import KeyboardKey from "./KeyboardKey";

const Keyboard = ({ power, play, sounds, activeClass }) => {

    return (
        <div className="keyboard">
            { power 
            ? sounds.map(sound => <KeyboardKey activeClass={ activeClass } play={ play } sound={ sound } />)
            : sounds.map(sound => <KeyboardKey activeClass={ activeClass } play={ play } sound={ { ...sound, url:"#"} } />)
            }
        </div>
    );
}
 
export default Keyboard