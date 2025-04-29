type Props = {
  onLight: () => void;
};
const LightToggle = ({ onLight }: Props) => {
  return <button onClick={onLight}>Toggle Lights</button>;
};

export default LightToggle;
