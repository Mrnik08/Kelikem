interface CTAButtonProps {
  text: string;
  onClick?: () => void;
}

const CTAButton = ({ text, onClick }: CTAButtonProps) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default CTAButton;
