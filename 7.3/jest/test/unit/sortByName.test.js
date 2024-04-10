const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Empty array of books' names", () => {
    const input = [];
    const expected = [];
    expect(sorting.sortByName(input)).toEqual(expected);
  });
  it("Books' names in descending order", () => {
    const input = ["Властелин Колец", "Волшебник изумрудного города", "Гарри Поттер"];
    const expected = ["Властелин Колец", "Волшебник изумрудного города", "Гарри Поттер"];
    expect(sorting.sortByName(input)).toEqual(expected);
  });
  it("Should return 0 when names are equal", () => {
    const input = ["Властелин Колец", "Властелин Колец"];
    const expected = input;
    expect(sorting.sortByName(input)).toEqual(expected); 
  });
});
