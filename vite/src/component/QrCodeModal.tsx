import queryString from 'query-string';

import { Container } from '@mui/material';
import { Typography } from '@mui/material';

import QrCode from './QrCode';

import { getDateString, getTimeString } from '@/util/handleParameter';
import { modalStyle } from '@/util/style';

const QrCodeModal: React.FC<QrCodeProps> = (props) => {
  const { distance, departure, distanceLockSwitch, departureLockSwitch } =
    props;
  const [distanceLocked] = distanceLockSwitch;
  const [depatureLocked] = departureLockSwitch;

  const date = distance === '1000' ? getDateString(departure) : null;
  const time = getTimeString(departure);
  const query = {
    dist: distance,
    dDate: date,
    dTime: time,
    distLock: distanceLocked,
    depLock: depatureLocked,
  };
  const stringified = queryString.stringify(query);
  const url = location.href + '?' + stringified;

  return (
    <Container
      sx={{
        ...modalStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <QrCode url={url} />
      <Typography variant="body2" component="div" sx={{ mx: 3 }}>
        URL:{url}
      </Typography>
    </Container>
  );
};

export default QrCodeModal;
