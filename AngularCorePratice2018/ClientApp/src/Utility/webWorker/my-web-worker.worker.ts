/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = {
    msg: `worker response to ${data}`,
    count: 0
  };
  for (let i = 1; i <= 10000; i++) {
    response.count = i;
    postMessage(response);
  }
});


