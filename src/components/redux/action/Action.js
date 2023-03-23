export const getProductData = () => async (dispatch) => {
  try {
    let data = await fetch("http://localhost:6010/getProduct", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await data.json();
    console.log("we get data at frontend", res);

    dispatch({ type: "Sucess_get_data", payload: res });
  } catch (error) {
    dispatch({ type: "failed_To_Get_Data", payload: error.message });
  }
};
