import { Appliance, Product, Clothing } from "../../data/products.js";

describe('test suite: Product', () => {
  let product;

  beforeEach(() => {
    product = new Product ({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });
  });

  it('has the correct properties', () => {
    expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
  });
});

describe('test suite: Appliance', () => {
  let appliance;

  beforeEach(() => {
    appliance = new Appliance (  {
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliance"
      ],
      type: 'appliance',
      instructionsLink:"images/appliance-instructions.png",
      warrantyLink:"images/appliance-warranty.png"
    });
  });

  it('has the correct properties', () => {
    expect(appliance.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add')
  });

  it('gets instructions and warranty from exptraInfoHTML()', () => {
    expect(appliance.extraInfoHTML()).toContain('Instructions');
    expect(appliance.extraInfoHTML()).toContain('Warranty');
    expect(appliance.extraInfoHTML()).toContain(`<a href="images/appliance-instructions.png" target="_blank">`)
  });
});

describe('test suite: Clothing', () => {
  let clothing;

  beforeEach(() => {
    clothing = new Clothing ({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    });
  });

  it('has the correct properties', () => {
    expect(clothing.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
  });

  it('gets check list from extraInfoHTML()', () => {
    expect(clothing.extraInfoHTML()).toContain('Size Chart');
    expect(clothing.extraInfoHTML()).toContain(`<a href="images/clothing-size-chart.png" target="_blank">Size Chart</a>`);
  });
});