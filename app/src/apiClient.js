export const getFoodItems = (type) => _get(`/api/foodItems/${type}`);
export const getFilteredFood = (type, course, filters) => {
  _get(`/api/foodItems/filters/${type}/${filters.join("+")}`);
};
export const getCurrentWeather = () => _get("/api/weather/current");
export const getForecastWeather = () => _get("/api/weather/forecast");

export const getInfo = () => _get("/api/info");

// export const addTask = (name) => _post("/api/tasks", { name });

const _get = async (url) => (await fetch(url)).json();

// const _post = async (url, body) => {
//   const response = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   });
//   let result;
//   try {
//     result = await response.json();
//   } catch {}

//   return result;
// };
