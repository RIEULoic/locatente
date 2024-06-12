const ButtonPassingProps = ({ carList, children, ...props }) => (
  <button
    {...props}
    className="btn border-zinc-300 bg-zinc-200 m-2 rounded-full"
  >
    {children}
  </button>
);

export default ButtonPassingProps;
