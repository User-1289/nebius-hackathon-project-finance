import React from 'react';

// Icon 
const Icon = ({ style }) => (
  <svg className="icon" style={style} viewBox="0 0 512 512">
    <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
  </svg>
);

const Text = ({ text, className }) => (
  <div className={`text ${className}`}>{text}</div> 
);

const Button = ({ label }) => (
  <button className="button">
    {label} 
  </button>
);

const Image = ({ image }) => (
  <div className="image" style={{ backgroundImage: `url(${image})` }} /> 
);

// Stock Predictor Composition
const StockPredictor = ({ stockName, predictedPrice, growthPercentage, timeframe, analysisSteps }) => {
  return (
    <div>
      <Icon style={{}} />
      <Text content={`${stockName} Stock Predictor`} className="stockPredictor" /> 
      <Text content={`Enter Stock Ticker: ${stockName}`} className="stockTicker" /> 
      <Text content={`Timeframe: ${timeframe}`} className="timeframe" /> 
      <Button label="Predict" />
      <Text content={`Predicted Price: $${predictedPrice}`} className="predictedPrice" /> 
      <Text content={`Growth: ${growthPercentage}`} className="growth" /> 
      <Image content="https://assets.api.uizard.io/api/cdn/stream/be0b40ec-1f70-46b7-9291-ed41c925a645.png" /> 
      <Text content="How We Made This Prediction" className="analysisHeader" /> 
      {analysisSteps.map((step, index) => (
        <div key={index}>
          <Text content={`${index + 1}. ${step.title}`} className="analysisHeader" /> 
          <Text content={step.description} className="analysisDescription" />
        </div>
      ))}
    </div>
  );
};

// StockPredictor Test
const App = () => {
  const stockName = "AAPL"; 
  const predictedPrice = "150.75"; 
  const growthPercentage = "(+5.3%)"; 
  const timeframe = "1 Month"; 
  const analysisSteps = [
    { title: "Market Trends Analysis", description: "Evaluating current market conditions and trends." },
    { title: "Historical Data Patterns", description: "Analyzing past price movements to identify patterns." },
    { title: "AI-Based Indicators", description: "Utilizing algorithms to assess potential future movements." },
    { title: "Volume & Sentiment Analysis", description: "Examining trading volume and market sentiment." },
  ];

  return (
    <StockPredictor
      stockName={stockName}
      predictedPrice={predictedPrice}
      growthPercentage={growthPercentage}
      timeframe={timeframe}
      analysisSteps={analysisSteps}
    />
  );
};

export default App;
