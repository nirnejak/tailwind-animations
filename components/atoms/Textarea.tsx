import * as React from "react"

import classNames from "utils/classNames"

interface Props {
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
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<Props> = ({
  id,
  type,
  value,
  checked,
  required,
  disabled,
  placeholder,
  className,
  onChange,
  label,
  icon,
  ...restProps
}) => {
  return (
    <label htmlFor={id} className="relative">
      {label !== "undefined" && (
        <div className="mb-1 text-xs font-medium text-zinc-700">{label}</div>
      )}
      {typeof icon !== "undefined" && (
        <span className="absolute left-4 top-[15px] text-zinc-400">{icon}</span>
      )}
      <textarea
        id={id}
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

export default Textarea
