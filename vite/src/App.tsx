import { useState, useEffect, useMemo } from 'react';
import { lazy, Suspense } from 'react';

import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import { Modal } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { useTimepicker, useDistance, useSwitch } from './hooks';
import { calculateResult, newDateZeroSecond } from './util/calculate';
import {
  getParameter,
  defineDistance,
  defineDate,
  defineTime,
  getDateString,
} from './util/handleParameter';

import DistanceButton from './component/DistanceButton';
import BrevetPicker from './component/BrevetPicker';
import FooterButtons from './component/FooterButtons';

const SettingModal = lazy(() => import('./component/SettingModal'));
const QrCodeModal = lazy(() => import('./component/QrCodeModal'));

const {
  queryDistance,
  departureDate,
  departureTime,
  distanceLock,
  departureLock,
} = getParameter(location.search);

const initialDistance = defineDistance(queryDistance);
const initialDepart = departureTime
  ? defineTime(newDateZeroSecond(), departureTime)
  : newDateZeroSecond();

function App() {
  const [depart, setDepart] = useTimepicker(initialDepart);
  const [finish, setFinish] = useTimepicker(newDateZeroSecond());
  const [distance, setDistance] = useDistance(initialDistance);
  const distanceLockSwitch = useSwitch(distanceLock);
  const departureLockSwitch = useSwitch(departureLock);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [qrCodeOpen, setQrCodeOpen] = useState(false);

  const [distanceLocked] = distanceLockSwitch;
  const [depatureLocked] = departureLockSwitch;

  const hiddenDisplay = !!(distance !== '1000');

  useEffect(() => {
    if (hiddenDisplay) {
      setDepart(defineDate(depart, getDateString(newDateZeroSecond())));
      setFinish(defineDate(finish, getDateString(newDateZeroSecond())));
    } else if (departureDate) {
      setDepart(defineDate(depart, departureDate));
    }
  }, [hiddenDisplay]);

  const result = useMemo(
    () => calculateResult(depart, finish, distance),
    [depart, finish, distance]
  );

  return (
    <div className="App">
      <Container maxWidth="xs">
        <Typography variant="h3" component="h1" align="center">
          Brevet Timer
        </Typography>
        <Stack
          spacing={2}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1" component="div" align="center">
            Calculate your running time.
          </Typography>
          <DistanceButton
            value={distance}
            disabled={distanceLocked}
            onChange={setDistance}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <BrevetPicker
              initial="Departure"
              value={depart}
              onChange={setDepart}
              disabled={depatureLocked}
              hidden={hiddenDisplay}
            />
            <BrevetPicker
              initial="Finish"
              value={finish}
              onChange={setFinish}
              hidden={hiddenDisplay}
            />
          </LocalizationProvider>
          <Typography variant="h3" component="div" align="center">
            Result
            <br />
            {result}
          </Typography>
          <FooterButtons
            timeReset={setFinish}
            settingsOpen={setSettingsOpen}
            qrCodeOpen={setQrCodeOpen}
          />
        </Stack>
      </Container>
      <Modal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        aria-labelledby="settings"
        aria-describedby="settings"
      >
        <Suspense>
          <SettingModal
            distanceLockSwitch={distanceLockSwitch}
            departureLockSwitch={departureLockSwitch}
          />
        </Suspense>
      </Modal>
      <Modal
        open={qrCodeOpen}
        onClose={() => setQrCodeOpen(false)}
        aria-labelledby="qr-code"
        aria-describedby="qr-code"
      >
        <Suspense>
          <QrCodeModal
            distance={distance}
            departure={depart}
            distanceLockSwitch={distanceLockSwitch}
            departureLockSwitch={departureLockSwitch}
          />
        </Suspense>
      </Modal>
    </div>
  );
}

export default App;
