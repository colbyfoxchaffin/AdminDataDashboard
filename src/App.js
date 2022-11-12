import {Routes, Route } from 'react-router-dom';
import { colorModeContext, useMode } from './themes';
import {CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
// import Team from './scenes/Team';
// import Invoices from './scenes/Invoices';
// import Contacts from './scenes/Contacts';
// import Bar from './scenes/Bar';
// import Form from './scenes/Form';
// import Line from './scenes/Line';
// import Pie from './scenes/Pie';
// import FAQ from './scenes/FAQ';
// import Geography from './scenes/Geography';
// import Calendar from './scenes/Calendar'

function App() {
  const [theme, colorMode] = useMode();

  return (
      <colorModeContext.Provider value = {colorMode}>
        <ThemeProvider theme = {theme}>
          <CssBaseline />
          <div className='app'>
            <Sidebar/>
            <main className='content'>
              <Topbar/>
              <Routes>
                <Route path = '/' element = {<Dashboard />} />
                {/* <Route path = '/team' element = {<Team />} /> */}
                {/* <Route path = '/Invoices' element = {<Invoices />} /> */}
                {/* <Route path = '/Contacts' element = {<Contacts />} /> */}
                {/* <Route path = '/Bar' element = {<Bar />} /> */}
                {/* <Route path = '/Form' element = {<Form />} /> */}
                {/* <Route path = '/Line' element = {<Line />} /> */}
                {/* <Route path = '/Pie' element = {<Pie />} /> */}
                {/* <Route path = '/FAQ' element = {<FAQ />} /> */}
                {/* <Route path = '/Geography' element = {<Geography />} /> */}
                {/* <Route path = '/Calendar' element = {<Calendar />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </colorModeContext.Provider>
    );
}

export default App;
