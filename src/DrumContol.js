

const DrumControl = ({ activeClass, stop, power, volume, handleVolumeChange, name, changeSounds }) => {
    
    
    return (
        <div className="control">
            <button id="button-1" onClick={ () => stop(activeClass) }>Turn the power { power ? "off" : "on" } </button>
            <h2>Volmue: { Math.round(volume * 100) } %</h2>
            <input 
                max="1"
                min="0"
                step="0.01"
                type="range"
                value={ volume }
                onChange={ handleVolumeChange }
            ></input>
            <h2 id="display" >{ name }</h2>
            <button id="button-2" onClick={ () => changeSounds(activeClass) }>Change sounds Group</button>
        </div>
        );
}
 
export default DrumControl;