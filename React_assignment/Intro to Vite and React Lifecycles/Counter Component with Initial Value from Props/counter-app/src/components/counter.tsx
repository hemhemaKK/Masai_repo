function Counter({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>

      <button disabled={count==0} onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
        Decrement
      </button>

      <p>Current Count: {count}</p>
    </div>
  );
}

export default Counter;
