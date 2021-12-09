class CatalogItem {
	id: number;
	img: string;
	title: string;

	items: CatalogItem[];

	constructor(data) {
		this.id = data.id;
		this.img = data.img;
		this.title = data.title;

		this.items = data.items;
	}
}

export class CatalogData {
	items: CatalogItem[];
	constructor(data) {
		this.items = data.items;
	}
}
