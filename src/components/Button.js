import clsx from 'clsx';

export default function Button({label, style, ...props}) {
  return (
    <button
      className={clsx(
        'mb-2 cursor-pointer font-semibold bg-primary transition text-white w-60 uppercase m-auto h-10 w-full rounded-lg disabled:bg-gray-300 disabled:cursor-default',
        style
      )}
      {...props}
    >
      {label}
    </button>
  );
}
