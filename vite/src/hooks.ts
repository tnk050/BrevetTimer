import { useState, useCallback, useMemo } from 'react';

export function useTimepicker(
  initial: Date
): [Date, (newValue: Date | null) => void] {
  const [time, setTime] = useState(initial);
  const setFromPicker = useCallback((newValue: Date | null) => {
    newValue && setTime(newValue);
  }, []);
  return [time, setFromPicker];
}

export function useDistance(
  initial: Distance
): [
  Distance,
  (event: React.MouseEvent<HTMLElement>, newValue: Distance) => void
] {
  const [distance, setDistance] = useState<Distance>(initial);
  const handleDistance = useCallback(
    (event: React.MouseEvent<HTMLElement>, newValue: Distance) => {
      newValue && setDistance(newValue);
    },
    []
  );
  return [distance, handleDistance];
}

export function useSwitch(initial: boolean): [boolean, () => void] {
  const [bool, setBool] = useState(initial);
  const switchBool = () => {
    setBool(!bool);
  };
  return [bool, switchBool];
}
