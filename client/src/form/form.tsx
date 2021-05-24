import React from 'react';

import useCreateArray from '../core/modules/arrays/queries/useCreateArray';
import './form.css';



const Form = () => {

  const [showError, setShowError] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const {
    mutate, isLoading
  } = useCreateArray({ 
    onError: () => { setShowError(true) },
    onSuccess: (data: any) => { console.log(data); }
  });

  const handleButton = () => {
    const { current } = inputRef || {};
    const inputValue = current ? current.value : null;

    inputValue && mutate({ length: Number(inputValue) });
    current && (current.value = "");
  }

  const handleError = () => {
    setShowError(false);
  }


  return (
      <div className="wrapper">
        {showError && (<div className="error" onClick={handleError}>Something wrong!</div>)}
        <div className="container" >
          {isLoading ? 
            (<div className="spinner">Please, wait answer from server</div>) :
            (<>
              <input className="input" placeholder="Enter a number" ref={inputRef}/>
              <button className="button" onClick={handleButton} >
                Send
              </button>
            </>
            )}
        </div>
      </div>
  );
}

export default Form;
