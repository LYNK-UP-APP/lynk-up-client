import { useRef, useEffect } from "react";
import "./Map.css";

const AutoComplete = ({inputRef}) => {
 const autoCompleteRef = useRef();

 useEffect(() => {
  const options = {
    fields: ["formatted_address", "name"],
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
   <input id={"address-input"} className="long-input" ref={inputRef} />
  </div>
 );
};
export default AutoComplete;
