export default function Status({ parent, child }) {
  return (
    <div>
      <p className="font-bold text-lg text-very-dark-saturated-blue">{parent}</p>
      <p className="text-xs font-light text-dark-grayish-blue">{child}</p>
    </div>
  );
}
