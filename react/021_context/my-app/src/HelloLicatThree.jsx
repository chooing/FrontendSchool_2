import { useContext } from "react";
import { DarkMode } from './darkmode'
import HelloLicatFour from './HelloLicatFour'

const HelloLicatThree = () => {
    const mode = useContext(DarkMode);
    return (
      <div>
        <h2>{mode?'다크 모드' : '라이트 모드'}</h2>
        <HelloLicatFour/>
      </div>
    );
  };

export default HelloLicatThree