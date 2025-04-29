type Props = {
  onCounter: () => void;
};

const ClickCounter = ({ onCounter }: Props) => {
  return <button onClick={onCounter}>Click Counter</button>;
};

export default ClickCounter;
