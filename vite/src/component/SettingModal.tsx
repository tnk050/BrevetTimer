import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import SettingForm from './SettingForm';
import { modalStyle } from '@/util/style';

const SettingModal: React.FC<SettingsProps> = (props) => {
  return (
    <Container sx={modalStyle}>
      <Typography variant="h4" component="h2" sx={{ px: 3, py: 1 }}>
        Settings
      </Typography>
      <SettingForm {...props} />
    </Container>
  );
};

export default SettingModal;
