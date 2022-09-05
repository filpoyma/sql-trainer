const controller = new AbortController();

export const fetchData = async (query) => {
  try {
    const res = await Promise.race([
      fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        signal: controller.signal,
        body: JSON.stringify({ query }),
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Reject by Timeout")), 5000)
      ),
    ]);
    if (!res.ok) return { err: res.statusText };
    return res.json();
  } catch (err) {
    if (err.message === "Reject by Timeout") abortFetching();
    console.log("Error: ", err.message);
    return { err: err.message };
  }
};

function abortFetching() {
  console.log('Now aborting');
  controller.abort()
}
