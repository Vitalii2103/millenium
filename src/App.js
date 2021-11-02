import './App.css';

import A from './containers/A/A.tsx';
import B from './containers/B/B.tsx';
import C from './containers/C/C.tsx';
import D from './containers/D/D.tsx';
import E from './containers/E/E.tsx';

import GridTable from "./containers/GridTable/GridTable";

function App() {
  return (
    <>
      <A />
      <B>
        <C>
          <E />
        </C>
        <GridTable />
      </B>
      <D />
    </>
  );
}

export default App;
