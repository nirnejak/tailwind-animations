import * as React from "react"

import classNames from "utils/classNames"

interface Props {
  type:
    | "text"
    | "email"
    | "number"
    | "password"
    | "date"
    | "datetime-local"
    | "checkbox"
    | "radio"
  id: string
  placeholder?: string
  className?: string
  name?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  value?: string
  label?: string
  icon?: JSX.Element
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({
  id,
  type,
  value,
  checked,
  required,
  disabled,
  placeholder,
  className,
  onChange,
  label = "",
  icon,
  ...restProps
}) => {
  if (type === "checkbox" || type === "radio") {
    return (
      <label
        htmlFor={id}
        className={classNames(className, "flex items-center gap-1")}
      >
        <input
          id={id}
          type={type}
          value={value}
          checked={checked}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className="mr-0.5 size-3.5 accent-zinc-800"
          {...restProps}
        />
        {label !== "undefined" && (
          <span className="bg-zinc-700 text-sm">{label}</span>
        )}
      </label>
    )
  } else {
    return (
      <label htmlFor={id} className="relative">
        {label !== "undefined" && (
          <div className="mb-2 text-sm font-medium text-zinc-200">{label}</div>
        )}
        {typeof icon !== "undefined" && (
          <span
            className={classNames(
              label === "" ? "top-3" : "top-10",
              "absolute left-4 text-zinc-400"
            )}
          >
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          className={classNames(
            className,
            typeof icon !== "undefined" && "pl-10",
            "w-full rounded-lg text-zinc-300 px-4 py-2.5 text-sm bg-zinc-800 outline-none placeholder:text-zinc-500"
          )}
          onChange={onChange}
          required={required}
          disabled={disabled}
          {...restProps}
        />
      </label>
    )
  }
}

export default Input
