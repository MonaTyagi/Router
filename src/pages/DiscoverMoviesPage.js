// import react from "react";
const search = async () => {
  console.log("Start searching for:", searchText);

  // Best practice: encode the string so that special characters
  //  like '&' and '?' don't accidentally mess up the URL
  const queryParam = encodeURIComponent(searchText);

  // Option A: use the browser-native fetch function
  //   const data = await fetch(
  //     `https://omdbapi.com/?apikey=b3d9013d&s=${queryParam}`
  //   ).then((r) => r.json());

  // Option B: use the `axios` library like we did on Tuesday
  const data = await axios.get(
    `https://omdbapi.com/?apikey=b3d9013d&s=${queryParam}`
  );

  console.log("Success!", data);
};
