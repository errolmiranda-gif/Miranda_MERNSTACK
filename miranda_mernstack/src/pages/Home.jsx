export default function Home({ counter, onIncrement }) {
      return (
            <main className="page-shell home-page">
                  <h1>Student Information System</h1>

                  <p>Welcome to my React Student Application.</p>
                  <div className="counter-box">
                        <span>Counter: {counter}</span>
                        <button className="small-button" onClick={onIncrement}>+</button>
                  </div>
            </main>
      );
}
