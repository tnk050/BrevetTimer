import { ToggleButtonGroup } from '@mui/material';
import { ToggleButton } from '@mui/material';
import { Box } from '@mui/material';

const style: React.CSSProperties = { textTransform: 'none' };

const DistanceButton: React.FC<DistanceButtonProps> = (props) => {
  const { value, onChange, disabled } = props;
  return (
    <ToggleButtonGroup
      color="primary"
      size="small"
      disabled={disabled}
      value={value}
      exclusive
      onChange={onChange}
      aria-label="distance"
      sx={{ justifyContent: 'center' }}
    >
      <ToggleButton value="400" aria-label="400orless" style={style}>
        400 or less
      </ToggleButton>
      <ToggleButton value="600" aria-label="600" style={style}>
        <Box sx={{ mx: 2 }}>600</Box>
      </ToggleButton>
      <ToggleButton value="1000" aria-label="1000ormore" style={style}>
        1000 or more
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default DistanceButton;
