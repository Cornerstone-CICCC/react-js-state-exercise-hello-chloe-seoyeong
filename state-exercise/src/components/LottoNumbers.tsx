type Props = {
  onGenerateNumbers: () => void;
};

const LottoNumbers = ({ onGenerateNumbers }: Props) => {
  return <button onClick={onGenerateNumbers}>Generate Lotto Numbers</button>;
};

export default LottoNumbers;
