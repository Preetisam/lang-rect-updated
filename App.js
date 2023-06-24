// import React, { useState } from 'react';
// import './App.css';

// function LanguageItem({ name, count, onIncrement, onDecrement }) {
//   return (
//     <div className="language">
//       <span>{name}</span>
//       <button onClick={onIncrement} className="increment">+</button>
//       <button onClick={onDecrement} className="decrement">-</button>
//       <span className="count">{count}</span>
//     </div>
//   );
// }

// function App() {
//   const [languages, setLanguages] = useState([
//     { name: 'Python', count: 0 },
//     { name: 'Java', count: 0 },
//     { name: 'JavaScript', count: 0 },
//     { name: 'C++', count: 0 },
//     { name: 'PHP', count: 0 }
//   ]);

//   function handleIncrement(index) {
//     setLanguages(prevLanguages => {
//       const newLanguages = [...prevLanguages];
//       newLanguages[index].count++;
//       return newLanguages;
//     });
//   }

//   function handleDecrement(index) {
//     setLanguages(prevLanguages => {
//       const newLanguages = [...prevLanguages];
//       newLanguages[index].count--;
//       return newLanguages;
//     });
//   }

//   return (
//     <div id="language-list">
//       {languages.map((language, index) => (
//         <LanguageItem
//           key={index}
//           name={language.name}
//           count={language.count}
//           onIncrement={() => handleIncrement(index)}
//           onDecrement={() => handleDecrement(index)}
//         />
//       ))}
//     </div>
//   );
// }


import React, { useState } from 'react';
import './App.css';

function LanguageItem({ name, count, onIncrement, onDecrement }) {
  return (
    <div className="language">
      <span>{name}</span>
      <button onClick={onIncrement} className="increment">+</button>
      <button onClick={onDecrement} className="decrement">-</button>
      <span className="count">{count}</span>
    </div>
  );
}

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Python', count: 0 },
    { name: 'Java', count: 0 },
    { name: 'JavaScript', count: 0 },
    { name: 'C++', count: 0 },
    { name: 'PHP', count: 0 }
  ]);

  function handleIncrement(index, event) {
    event.preventDefault();
    setLanguages(prevLanguages => {
      const newLanguages = [...prevLanguages];
      newLanguages[index].count++;
      return newLanguages;
    });
  }

  function handleDecrement(index, event) {
    event.preventDefault();
    setLanguages(prevLanguages => {
      const newLanguages = [...prevLanguages];
      newLanguages[index].count--;
      return newLanguages;
    });
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Language Counter</h1>
        {/* Additional header content */}
      </header>

      <nav className="navbar">
        
      </nav>

      <div className="content">
        {languages.map((language, index) => (
          <LanguageItem
            key={index}
            name={language.name}
            count={language.count}
            onIncrement={(event) => handleIncrement(index, event)}
            onDecrement={(event) => handleDecrement(index, event)}
          />
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
       
      </footer>
    </div>
  );
}

export default App;
