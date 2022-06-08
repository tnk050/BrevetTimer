import { useCallback } from 'react';

import { Container } from '@mui/material';
import { IconButton } from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import QrCodeIcon from '@mui/icons-material/QrCode';

const FooterButtons: React.FC<FooterButtonsProps> = (props) => {
  const { settingsOpen, qrCodeOpen } = props;
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
