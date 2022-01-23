export class Mylink {
	constructor(data) {
		Object.assign(this, data);
		this.url = data.url;
		this.title = data.title;
	}
}

export class LangLink {
	constructor(data) {
		Object.assign(this, data);
		this.active = data.active;

		if (!this.active) {
			const prefix = data.url.slice(0, data.url.length - 1);
			this.url = location.origin + prefix + location.pathname;
		}

		this.title = data.title;
	}
}

export class CatalogItem extends Mylink {
	constructor(data) {
		super(data);
		this.id = data.id;
		this.img = data?.img;

		if (data.items) {
			this.items = data.items.map((el) => new CatalogItem(el));
		}
	}
}

export class CatalogData {
	constructor(data) {
		this.img = data.img;
		this.title = data.title;

		if (data.items) {
			this.items = data.items.map((el) => new CatalogItem(el));
		}
	}
}

export class HeaderData {
	constructor(data) {
		Object.assign(this, data);

		this.catalog = new CatalogData(data.catalog);
		this.lang = data.lang && data.lang.map((el) => new LangLink(el));
	}
}
