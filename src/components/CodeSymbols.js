import React from 'react';

const CodeSymbols = () => {
  const symbols = [
    { symbol: "const", color: "text-red-500" },
    { symbol: "function", color: "text-purple-500" },
    { symbol: "=>", color: "text-blue-500" },
    { symbol: "{}", color: "text-green-500" },
    { symbol: "[]", color: "text-yellow-500" },
    { symbol: "import", color: "text-pink-500" },
    { symbol: "export", color: "text-cyan-500" },
    { symbol: "async", color: "text-orange-500" }
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-6xl md:text-7xl lg:text-8xl font-black opacity-20">
          {symbols.map((item, index) => (
            <span 
              key={index}
              className={`${item.color} hover:opacity-60 transition-opacity duration-500 cursor-default`}
            >
              {item.symbol}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeSymbols; 