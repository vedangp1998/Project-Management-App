const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-right md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 text:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
