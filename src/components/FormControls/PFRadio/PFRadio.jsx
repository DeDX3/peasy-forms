import "./PFRadio.jsx";

export function PFRadio({
  id,
  name,
  label,
  value,
  checked,
  handleChange,
  parentClassName,
  labelClassName,
}) {
  let parentClass = "pf-input-parent pf-radio",
    labelClass = "pf-radio-label";

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
        type="radio"
        checked={checked}
        onChange={handleChange}
        className="pf-radio-input"
      />

      <span className={labelClass}>{label}</span>
    </label>
  );
}
