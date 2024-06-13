import { CSSTransition } from 'react-transition-group';
import "./fade.css";

const Fade = ({ in: inProp, children, timeout = 1000, classNames = 'fade' }) => {
    return (
      <CSSTransition
        in={inProp}
        timeout={timeout}
        classNames={classNames}
        unmountOnExit
      >
        <div className='container'>
          {children}
        </div>
      </CSSTransition>
    );
  };
  
  export default Fade;