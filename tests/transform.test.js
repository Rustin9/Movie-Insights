const transform = require("../scripts/transform");

describe("Transform Function", () => {
  test("should correctly clean movie data", () => {
    const input = {
      results: [
        {
          title: "Inception",
          overview: "A mind-bending thriller",
          vote_average: 8.8
        }
      ]
    };

    const output = transform(input);

    expect(output).toHaveLength(1);
    expect(output[0].title).toBe("Inception");
    expect(output[0].rating).toBe(8.8);
  });

  test("should return empty array for no data", () => {
    const input = { results: [] };
    const output = transform(input);

    expect(output).toEqual([]);
  });
});