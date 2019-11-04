/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  for (let i = 0; i < 100; i++) {
    postMessage(response);
  }
});


