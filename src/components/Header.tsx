export default function Header() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <h1 className="heading">My day</h1>
      <p className="date">{formattedDate}</p>
    </header>
  );
}
