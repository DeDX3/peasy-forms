import "./../FormControls.css";

export function PFInput({
  id,
  type,
  name,
  label,
  value,
  labelClassName,
  inputClassName,
  handleChange,
  placeholder,
  parentClassName,
  floatingLabel,
  size,
}) {
  let parentClass = "pf-input-parent",
    inputClass = "pf-input",
    labelClass = "pf-label";

  if (inputClassName) {
    inputClass += ` ${inputClassName}`;
  }

  if (labelClassName) {
    labelClass += ` ${labelClassName}`;
  }

  if (parentClassName) {
    parentClass += ` ${parentClassName}`;
  }

  if (floatingLabel) {
    parentClass += " floating-label";
  }

  if (size === "small") {
    parentClass += " pf-control-small";
  }

  return (
    <div className={parentClass}>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className={inputClass}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
