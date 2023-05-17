import { useRef, useEffect } from "react";
import "./Map.css";

const AutoComplete = () => {
 const autoCompleteRef = useRef();
 const inputRef = useRef();

 useEffect(() => {
  const options = {
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
    types: ["establishment"]
  };

  autoCompleteRef.current = new window.google.maps.places.Autocomplete(
   inputRef.current,
   options
  );
 }, []);
 return (
  <div>
   <input className="long-input" ref={inputRef}/>
  </div>
 );
};
export default AutoComplete;
