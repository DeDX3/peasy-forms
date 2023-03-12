import "./PFCheckBox.jsx";

export function PFCheckBox({
  id,
  name,
  label,
  value,
  checked,
  handleChange,
  parentClassName,
  labelClassName,
}) {
  let parentClass = "pf-input-parent pf-checkbox",
    labelClass = "pf-checkbox-label";

  if (labelClassName) {
    labelClass += ` ${labelClassName}`;
  }

  if (parentClassName) {
    parentClass += ` ${parentClassName}`;
  }

  return (
    <label htmlFor={id} className={parentClass}>
      <input
        id={id}
        name={name}
        value={value}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="pf-checkbox-input"
      />

      <span className={labelClass}>{label}</span>
    </label>
  );
}
