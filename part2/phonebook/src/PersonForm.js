const PersonForm = ({
  nameValue,
  numberValue,
  onChangeName,
  onChangeNumber,
  onSubmit,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={nameValue} onChange={onChangeName} />
        </div>
        <div>
          number: <input number={numberValue} onChange={onChangeNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
