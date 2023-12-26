type SubmitButtonProps = {
  disabled?: boolean;
};

export const SubmitButton = ({ disabled = false }: SubmitButtonProps) => {
  return (
    <button
      className="text-3xl sm:text-6xl flex items-center border-blue border-4 rounded-lg bg-white justify-center p-2 active:bg-blue disabled:opacity-10 w-1/6"
      type="submit"
      disabled={disabled}
    >
      <>→</>
    </button>
  );
};
