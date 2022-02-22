const basePath = "/private-office-mid/dist/";
const dataPath = process.env.NODE_ENV === "production" ? basePath + "/data" : "/data";

export default {
	homeSlider: dataPath + "/homeSlider.json",
	headerData: dataPath + "/headerData.json",
	promocodes: dataPath + "/promocodes.json",
	stocks: dataPath + "/stocks.json",
	products: dataPath + "/products3.json",
	rating: dataPath + "/rating.json",
};
