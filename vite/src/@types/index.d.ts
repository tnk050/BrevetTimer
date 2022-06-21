type Query = {
  queryDistance: string | undefined;
  departureDate: string;
  departureTime: string;
  distanceLock: boolean;
  departureLock: boolean;
};

type Distance = '400' | '600' | '1000';

type SwitchState = [boolean, () => void];

type BrevetPickerProps = {
  initial?: string;
  value: Date;
  onChange: (
    value: Date | null,
    keyboardInputValue?: string | undefined
  ) => void;
  disabled?: boolean;
  hidden?: boolean;
};

type DistanceButtonProps = {
  value: Distance;
  onChange: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newValue: Distance
  ) => void;
  disabled?: boolean;
};

type SettingsProps = {
  distanceLockSwitch: SwitchState;
  departureLockSwitch: SwitchState;
};

type QrCodeProps = {
  distance: Distance;
  departure: Date;
  distanceLockSwitch: SwitchState;
  departureLockSwitch: SwitchState;
};

type FooterButtonsProps = {
  timeReset: (newValue: Date | null) => void;
  settingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  qrCodeOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
