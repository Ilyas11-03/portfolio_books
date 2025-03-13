import { useState, useEffect } from 'react';

function SnakeGame() {
  const [snake, setSnake] = useState([[0, 0]]);
  const [food, setFood] = useState([10, 10]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(moveSnake, 100);
      return () => clearInterval(interval);
    }
  }, [snake, food, direction, gameOver]);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = [...newSnake[0]];

    switch (direction) {
      case 'UP':
        head[1] -= 1;
        break;
      case 'DOWN':
        head[1] += 1;
        break;
      case 'LEFT':
        head[0] -= 1;
        break;
      case 'RIGHT':
        head[0] += 1;
        break;
    }

    // Check collisions
    if (
      head[0] < 0 || head[0] >= 20 ||
      head[1] < 0 || head[1] >= 20 ||
      snake.some(segment => segment[0] === head[0] && segment[1] === head[1])
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    // Check if snake ate food
    if (head[0] === food[0] && head[1] === food[1]) {
      setScore(score + 1);
      setFood([
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 20)
      ]);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const resetGame = () => {
    setSnake([[0, 0]]);
    setFood([10, 10]);
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Snake Game</h1>
      <div className="mb-4">Score: {score}</div>
      <div className="relative w-[400px] h-[400px] bg-white border-2 border-gray-300">
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute w-5 h-5 bg-green-500"
            style={{
              left: `${segment[0] * 20}px`,
              top: `${segment[1] * 20}px`,
            }}
          />
        ))}
        <div
          className="absolute w-5 h-5 bg-red-500"
          style={{
            left: `${food[0] * 20}px`,
            top: `${food[1] * 20}px`,
          }}
        />
      </div>
      {gameOver && (
        <div className="mt-4">
          <div className="text-xl font-bold mb-2">Game Over!</div>
          <p className='text-lg mb-2'>Final Score: {score}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
    
  );
}

export default SnakeGame;
