function Filter({ value, onChange }) {
  return (
    <label>
      Find contact by name
      <input value={value} onChange={onChange} />
    </label>
  );
}
export default Filter;
