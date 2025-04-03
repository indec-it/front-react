export default function ErrorMessage({error}) {
  return (
    <p className="text-md text-error" data-testid="error-message">
      {error}
    </p>
  );
}
