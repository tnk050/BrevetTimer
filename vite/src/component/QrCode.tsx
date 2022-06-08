import { useQRCode } from 'next-qrcode';

const QrCode: React.FC<{ url: string }> = (props) => {
  const { Canvas } = useQRCode();
  return (
    <Canvas
      text={props.url}
      options={{
        type: 'image/jpeg',
        level: 'M',
        width: 6,
      }}
    />
  );
};

export default QrCode;
