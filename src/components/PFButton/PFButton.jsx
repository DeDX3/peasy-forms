import { Link } from "react-router-dom";

export function PFButton({
  path,
  children,
  className,
  variant,
  size,
  handleClick,
}) {
  let btnVariant = "button ",
    btnSize = "small",
    btnClass;

  switch (variant) {
    case "primary": {
      btnVariant += "button-primary";
      break;
    }

    case "secondary": {
      btnVariant += "button-secondary";
      break;
    }

    case "secondary-bordered": {
      btnVariant += "button-secondary-bordered";
      break;
    }

    case "dark": {
      btnVariant += "button-dark";
      break;
    }

    case "dark-bordered": {
      btnVariant += "button-dark-bordered";
      break;
    }

    case "orange": {
      btnVariant += "button-orange";
      break;
    }

    case "blue": {
      btnVariant += "button-blue";
      break;
    }

    default: {
      btnVariant = "button";
      break;
    }
  }

  switch (size) {
    case "small": {
      btnSize = "button-small";
      break;
    }

    case "medium": {
      btnSize = "button-medium";
      break;
    }

    default: {
      btnSize = "button-medium";
      break;
    }
  }

  if (className) {
    btnClass = `${className} ${btnSize} ${btnVariant}`;
  } else if (btnVariant) {
    btnClass = `${btnVariant} ${btnSize}`;
  }

  if (path) {
    return (
      <Link to={path} className={btnClass}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={btnClass} onClick={handleClick}>
        {children}
      </button>
    );
  }
}
