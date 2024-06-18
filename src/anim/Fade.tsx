import { CSSTransition } from 'react-transition-group';
import "./fade.css";

interface FadeProps {
  in: boolean;
  timeout?: number;
  classNames?: string;
  children: React.ReactNode;
}

const Fade = ({ in: inProp, children, timeout = 1000, classNames = 'fade' }: FadeProps) => {
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