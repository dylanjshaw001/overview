import React, { 
  ChangeEvent,
  useState 
} from "react"
import {useDark} from '../shared/Theme/UseTheme';
import {joinClasses} from '../shared/utility/utilities';

interface ConverterState {
  url?: string | null,
  showError?: boolean;
}

export default function Converter() {
    const [state, setState] = useState<ConverterState>();
    const errorMessage = 'please enter a valid Youtube link.',
          urlFormat = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      const {value} = e.target;
      const url = value.match(urlFormat);
      let newState: ConverterState;  
      if(url?.length){
        newState = {url: url[1], showError: false}
      } else {
        newState = {
          url: null,
          showError: value ? true : false
        }
      }
      setState(newState)
    }

    const classes = joinClasses([useDark('yt-converter'), 'yt-converter']);

    return (
      <div className={classes}>
            <p className='yt-converter-header'>convert to mp3</p>
            <div className={'yt-converter-form'}>
              <input 
                className={'yt-converter-form-input'} 
                type="text" 
                placeholder="paste youtube link here" 
                onChange={handleInput}   
              />
                {
                  state?.url?.length && (
                    <iframe
                      src={`https://www.yt-download.org/api/button/mp3/${state.url}`} 
                      className={'yt-converter-iframe'}
                      width="100%"
                      height="100px" 
                      style={{
                        "border":"none", 
                        "padding": "20px 0", 
                        "width":"120px",
                        "marginLeft":"-12px"
                      }}
                      scrolling="no"
                      title={"Converter"}
                    ></iframe> 
                  )
                }
              {state?.showError === true && <p>{errorMessage}</p>}
            </div>
      </div>
    )
}