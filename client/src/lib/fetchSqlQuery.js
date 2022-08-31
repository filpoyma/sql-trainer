export const fetchData = async (query) => {
  try {
    const res = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ query }),
    });
    if(!res.ok) return {err: res.statusText};
    return res.json();
  } catch (err) {
    console.log("Error: ", err.message);
    return {err: err.message};
  }
};
