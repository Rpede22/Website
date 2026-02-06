export default function Section({ id, title, children }) {
  return (
    <section id={id} data-reveal className="reveal">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
