function ButtonForMore({ className, text, onClick }) {
    return (
      <button className={className} onClick={onClick}>
        {text}
      </button>
    );
  }
  export default ButtonForMore; 