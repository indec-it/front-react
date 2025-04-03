import ErrorMessage from './ErrorMessage';

export default function Field({name, label, error, type = 'text', onChange, onBlur, ...rest}) {
  const handleBlur = e => {
    const event = e;
    if (type === 'text' && e.target.value.length > 0) {
      event.target.value = e.target.value.trim();
      onChange(event);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-[17px] text-black text-xl font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-label={label}
        className={`w-full py-2 px-2 bg-white rounded-xl focus:ring-1 focus:ring-blue-600 focus:border focus:border-blue-600 outline-none ${error ? 'border border-error' : ''}`}
        type={type}
        onChange={onChange}
        {...rest}
        onBlur={handleBlur}
      />
      {error && <ErrorMessage error={error} />}
    </div>
  );
}
