let count = 0;

const Message = () => {
  return (
    <div>
      Message {count}
      {count++}
    </div>
  );
};

export default Message;
