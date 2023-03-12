import "./../FormControls.css";

export function PFTextArea({
  id,
  name,
  label,
  rows,
  columns,
  value,
  labelClassName,
  inputClassName,
  handleChange,
  placeholder,
  parentClassName,
  floatingLabel,
}) {
  let parentClass = "pf-input-parent",
    inputClass = "pf-input pf-textarea",
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

  return (
    <div className={parentClass}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={columns}
        value={value}
        className={inputClass}
        placeholder={placeholder}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
