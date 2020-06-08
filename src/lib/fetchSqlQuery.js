export const fetchData = async (query) => {
  try {
    const res = await fetch("http://localhost:3100", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ query: query }),
    });
    return res.json();
  } catch (err) {
    console.log("Error: ", err);
  } finally {
  }
};
