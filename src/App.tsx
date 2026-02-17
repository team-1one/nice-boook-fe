import { useState } from 'react';
import './App.css';
import {
  NumberButton,
  ChevronButton,
  HeartButton,
  RoundButton,
  PrimaryButton,
  ArrowButton,
} from './components/buttons';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#F8D9C0');
  const [actionSelected, setActionSelected] = useState(false);

  return (
    <div className="p-8 space-y-12">
      <section>
        <ArrowButton
          text="Back to catalog"
          onClick={() => console.log('Навігація назад')}
        />
      </section>

      <section>
        <h3 className="text-lg font-medium mb-4">Pagination Example</h3>
        <div className="flex flex-row items-center gap-2">
          <ChevronButton
            direction="left"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          />

          {[1, 2, 3, 4].map((num) => (
            <NumberButton
              key={num}
              number={num}
              selected={currentPage === num}
              onClick={() => setCurrentPage(num)}
            />
          ))}

          <ChevronButton
            direction="right"
            disabled={currentPage === 4}
            onClick={() => setCurrentPage((p) => p + 1)}
          />
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-4">Select Color</h3>
        <div className="flex gap-3">
          {['#F8D9C0', '#51BA7D', '#313237', '#F05F5F'].map((color) => (
            <RoundButton
              key={color}
              color={color}
              selected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-500">Selected: {selectedColor}</p>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-4">Favorites</h3>
        <HeartButton
          selected={isLiked}
          onClick={() => setIsLiked(!isLiked)}
        />
      </section>

      <section className="flex justify-end border-t pt-8">
        <ArrowButton
          text="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </section>

      <section className="bg-gray-50 p-4 rounded-lg">
        <p className="text-xs uppercase text-gray-400 font-bold mb-4">
          Disabled States
        </p>
        <div className="flex items-center gap-4">
          <RoundButton disabled />
          <NumberButton
            number={5}
            disabled
          />
          <ChevronButton disabled />
          <HeartButton disabled />
          <ArrowButton
            text="Disabled Link"
            disabled
          />
        </div>
      </section>

      <div className="flex gap-4">
        <PrimaryButton
          text="Primary"
          selected={actionSelected}
          onClick={() => setActionSelected(!actionSelected)}
        />
        <PrimaryButton
          text="Example"
          disabled
        />
      </div>
    </div>

  );
}

export default App;
