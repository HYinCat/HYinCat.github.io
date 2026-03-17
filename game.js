* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #121212;
  color: #e0e0e0;
  font-family: "Consolas", "Courier New", monospace;
  line-height: 1.6;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  border-bottom: 2px solid #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.header h1 {
  color: #ff4444;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}

.stats-bar {
  display: flex;
  justify-content: space-around;
  background-color: #1a1a1a;
  padding: 8px;
  border-radius: 4px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat span:first-child {
  font-size: 12px;
  color: #888;
}

.stat span:last-child {
  font-size: 18px;
  font-weight: bold;
}

.log-box {
  background-color: #1a1a1a;
  border: 1px solid #333;
  padding: 15px;
  min-height: 200px;
  margin-bottom: 15px;
  border-radius: 4px;
  white-space: pre-line;
}

.actions-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.action-btn {
  background-color: #222;
  color: #00cc66;
  border: 1px solid #007733;
  padding: 12px;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: #003311;
}

.action-btn:disabled {
  color: #666;
  border-color: #333;
  cursor: not-allowed;
}
