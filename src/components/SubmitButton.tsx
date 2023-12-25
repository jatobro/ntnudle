type SubmitButtonProps = {
  disabled?: boolean;
};

export const SubmitButton = ({ disabled = false }: SubmitButtonProps) => {
  return (
    <button
      className="text-6xl flex items-center border-blue border-4 rounded-lg w-32 bg-white justify-center p-2 active:bg-blue disabled:opacity-10"
      type="submit"
      disabled={disabled}
    >
      <>→</>
    </button>
  );
};
