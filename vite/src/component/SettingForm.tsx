import { Container } from '@mui/system';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';

const SettingForm: React.FC<SettingsProps> = (props) => {
  const [distanceLocked, switchDistanceLocked] = props.distanceLockSwitch;
  const [depatureLocked, switchDepartureLocked] = props.departureLockSwitch;

  return (
    <Container>
      <FormControlLabel
        control={
          <Checkbox checked={distanceLocked} onChange={switchDistanceLocked} />
        }
        label="Lock the distance buttons"
      />
      <FormControlLabel
        control={
          <Checkbox checked={depatureLocked} onChange={switchDepartureLocked} />
        }
        label="Lock the departure form"
      />
    </Container>
  );
};

export default SettingForm;
