import "../assets/scss/toggle-button.scss";
const ToggleButton = ({ label, toggled, onClick }) => {
  return (
    <label className="toggle-button">
      <input type="checkbox" defaultChecked={toggled} onClick={onClick} />
      <strong>{label}</strong>
    </label>
  );
};

export default ToggleButton;
