export const Person = ({ person }) => {
  const { age, name, sex, isMarried, partnerName } = person;
  const partnerLabel = `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried && partnerName ? partnerLabel : "I'm not married"}
      </p>
    </section>
  );
};
