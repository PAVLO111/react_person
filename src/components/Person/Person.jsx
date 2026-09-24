// import cn from 'classnames';

export const Person = ({ person }) => {
  const { age, name, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried && partnerName
          ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
          : 'Im not married'}
      </p>
    </section>
  );
};
