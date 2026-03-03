import type * as React from "react"

import type { JSX } from "react/jsx-runtime"

import classNames from "@/utils/classNames"

interface Props {
  id: string
  placeholder?: string
  className?: string
  name?: string
  required?: boolean
  disabled?: boolean
  value?: string
  label?: string
  icon?: JSX.Element
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<Props> = ({
  id,
  value,
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
        <div className="mb-1 font-medium text-xs text-zinc-700">{label}</div>
      )}
      {typeof icon !== "undefined" && (
        <span className="absolute top-3.75 left-4 text-zinc-400">{icon}</span>
      )}
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        className={classNames(
          className,
          typeof icon !== "undefined" && "pl-10",
          "w-full rounded-lg bg-zinc-800 px-4 py-2.5 text-sm text-zinc-300 outline-hidden placeholder:text-zinc-500"
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
