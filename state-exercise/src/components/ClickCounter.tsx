type Props = {
  onPlus: () => void;
  onMinus: () => void;
};

const ClickCounter = ({ onPlus, onMinus }: Props) => {
  return (
    <>
      <button onClick={onPlus}>Click +</button>
      <button onClick={onMinus}>Click -</button>
    </>
  );
};

export default ClickCounter;
