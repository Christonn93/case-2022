import React, { ReactElement, ReactNode } from 'react';
import logo from './logo-nettbureau-com.svg';
import './App.css';
import { TypeOfTag } from 'typescript';

// conventional props
function Heading({ title }: { title: string; }) {
  return (
    <h1>{title}</h1>
  )
}

function HeadingContent({ children }: { children: ReactNode }): ReactElement {
  return (
    <h1>{children}</h1>
  )
}

// Default props 
const defaultContainerProps = {
  heading: <h1>Heading is missing</h1>
}
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

function Container({
  heading,
  children
}: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{children}</p>
    </div>
  )
}

Container.defaultProps = defaultContainerProps;



function App() {
  return (
    <div>
    <Heading title='Spørreskjema'></Heading>
    <form>

      <label>Fornavn:
        <input type="text" />
      </label>
      
      <label>Etternavn:
        <input type="text" />
      </label>
    
      <label>Telefon nummer:
        <input type="text" />
      </label>

      <label>E-post:
        <input type="text" />
      </label>
    
      <label>Alder:
        <input type="text" />
      </label>

    </form>
    </div>
  );
}

export default App;
