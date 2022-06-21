import { useCallback } from 'react';

import { Container } from '@mui/material';
import { IconButton } from '@mui/material';

import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import SettingsIcon from '@mui/icons-material/Settings';
import QrCodeIcon from '@mui/icons-material/QrCode';

const FooterButtons: React.FC<FooterButtonsProps> = (props) => {
  const { timeReset, settingsOpen, qrCodeOpen } = props;
  const handleTimeReset = useCallback(() => timeReset(new Date()), []);
  const handleSetting = useCallback(() => settingsOpen(true), []);
  const handleQrCode = useCallback(() => qrCodeOpen(true), []);

  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <IconButton aria-label="time-reset" onClick={handleTimeReset}>
        <AlarmOnIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="setting" onClick={handleSetting}>
        <SettingsIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="qr-code" onClick={handleQrCode}>
        <QrCodeIcon fontSize="large" />
      </IconButton>
    </Container>
  );
};

export default FooterButtons;
