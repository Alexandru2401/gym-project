export default function Input({
  label,
  id,
  error,
  icon,
  isTextarea,
  ...props
}) {
  const inputClass = error ? "input-error" : "";

  return (
    <div className="label-div">
      <label
        htmlFor={id}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        {" "}
        {icon}
        {label}
      </label>

      {isTextarea ? (
        <textarea id={id} {...props} className={inputClass} />
      ) : (
        <input id={id} {...props} className={inputClass} />
      )}
      <p
        className={`is-invalid ${error ? "visible" : "hidden"}`}
        style={{ margin: "0 10px" }}
      >
        {error || "⠀"}
      </p>
    </div>
  );
}
