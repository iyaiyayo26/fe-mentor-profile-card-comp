export default function Status({ parent, child }) {
  return (
    <div>
      <h3 className="font-bold text-lg text-very-dark-saturated-blue">{parent}</h3>
      <p className="text-xs font-light text-dark-grayish-blue">{child}</p>
    </div>
  );
}
