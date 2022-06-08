import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

const BrevetPicker: React.FC<BrevetPickerProps> = (props) => {
  const { initial, value, onChange, disabled, hidden } = props;
  const dateDisplay = hidden ? 'none' : 'flex';
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
      }}
    >
      <MobileDatePicker
        label={initial + ' date'}
        inputFormat="dd/MM/yyyy"
        mask="__/__/____"
        value={value}
        onChange={onChange}
        disabled={disabled}
        renderInput={(params) => (
          <TextField {...params} sx={{ marginLeft: 1, display: dateDisplay }} />
        )}
      />
      <MobileTimePicker
        label={initial + ' time'}
        value={value}
        onChange={onChange}
        disabled={disabled}
        renderInput={(params) => <TextField {...params} sx={{ mx: 1 }} />}
      />
    </Box>
  );
};

export default BrevetPicker;
