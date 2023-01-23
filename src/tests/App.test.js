import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../App";

const mockaPlanets = {
  count: 60,
  next: "https://swapi.dev/api/planets/?page=2",
  previous: null,
  results: [
    {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/",
        "https://swapi.dev/api/people/11/",
        "https://swapi.dev/api/people/43/",
        "https://swapi.dev/api/people/62/",
      ],
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      created: "2014-12-09T13:50:49.641000Z",
      edited: "2014-12-20T20:58:18.411000Z",
      url: "https://swapi.dev/api/planets/1/",
    },
    {
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: "2000000000",
      residents: [
        "https://swapi.dev/api/people/5/",
        "https://swapi.dev/api/people/68/",
        "https://swapi.dev/api/people/81/",
      ],
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/6/",
      ],
      created: "2014-12-10T11:35:48.479000Z",
      edited: "2014-12-20T20:58:18.420000Z",
      url: "https://swapi.dev/api/planets/2/",
    },
    {
      name: "Yavin IV",
      rotation_period: "24",
      orbital_period: "4818",
      diameter: "10200",
      climate: "temperate, tropical",
      gravity: "1 standard",
      terrain: "jungle, rainforests",
      surface_water: "8",
      population: "1000",
      residents: [],
      films: ["https://swapi.dev/api/films/1/"],
      created: "2014-12-10T11:37:19.144000Z",
      edited: "2014-12-20T20:58:18.421000Z",
      url: "https://swapi.dev/api/planets/3/",
    },
    {
      name: "Hoth",
      rotation_period: "23",
      orbital_period: "549",
      diameter: "7200",
      climate: "frozen",
      gravity: "1.1 standard",
      terrain: "tundra, ice caves, mountain ranges",
      surface_water: "100",
      population: "unknown",
      residents: [],
      films: ["https://swapi.dev/api/films/2/"],
      created: "2014-12-10T11:39:13.934000Z",
      edited: "2014-12-20T20:58:18.423000Z",
      url: "https://swapi.dev/api/planets/4/",
    },
    {
      name: "Dagobah",
      rotation_period: "23",
      orbital_period: "341",
      diameter: "8900",
      climate: "murky",
      gravity: "N/A",
      terrain: "swamp, jungles",
      surface_water: "8",
      population: "unknown",
      residents: [],
      films: [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      created: "2014-12-10T11:42:22.590000Z",
      edited: "2014-12-20T20:58:18.425000Z",
      url: "https://swapi.dev/api/planets/5/",
    },
    {
      name: "Bespin",
      rotation_period: "12",
      orbital_period: "5110",
      diameter: "118000",
      climate: "temperate",
      gravity: "1.5 (surface), 1 standard (Cloud City)",
      terrain: "gas giant",
      surface_water: "0",
      population: "6000000",
      residents: ["https://swapi.dev/api/people/26/"],
      films: ["https://swapi.dev/api/films/2/"],
      created: "2014-12-10T11:43:55.240000Z",
      edited: "2014-12-20T20:58:18.427000Z",
      url: "https://swapi.dev/api/planets/6/",
    },
    {
      name: "Endor",
      rotation_period: "18",
      orbital_period: "402",
      diameter: "4900",
      climate: "temperate",
      gravity: "0.85 standard",
      terrain: "forests, mountains, lakes",
      surface_water: "8",
      population: "30000000",
      residents: ["https://swapi.dev/api/people/30/"],
      films: ["https://swapi.dev/api/films/3/"],
      created: "2014-12-10T11:50:29.349000Z",
      edited: "2014-12-20T20:58:18.429000Z",
      url: "https://swapi.dev/api/planets/7/",
    },
    {
      name: "Naboo",
      rotation_period: "26",
      orbital_period: "312",
      diameter: "12120",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      surface_water: "12",
      population: "4500000000",
      residents: [
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/21/",
        "https://swapi.dev/api/people/35/",
        "https://swapi.dev/api/people/36/",
        "https://swapi.dev/api/people/37/",
        "https://swapi.dev/api/people/38/",
        "https://swapi.dev/api/people/39/",
        "https://swapi.dev/api/people/42/",
        "https://swapi.dev/api/people/60/",
        "https://swapi.dev/api/people/61/",
        "https://swapi.dev/api/people/66/",
      ],
      films: [
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      created: "2014-12-10T11:52:31.066000Z",
      edited: "2014-12-20T20:58:18.430000Z",
      url: "https://swapi.dev/api/planets/8/",
    },
    {
      name: "Coruscant",
      rotation_period: "24",
      orbital_period: "368",
      diameter: "12240",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "cityscape, mountains",
      surface_water: "unknown",
      population: "1000000000000",
      residents: [
        "https://swapi.dev/api/people/34/",
        "https://swapi.dev/api/people/55/",
        "https://swapi.dev/api/people/74/",
      ],
      films: [
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      created: "2014-12-10T11:54:13.921000Z",
      edited: "2014-12-20T20:58:18.432000Z",
      url: "https://swapi.dev/api/planets/9/",
    },
    {
      name: "Kamino",
      rotation_period: "27",
      orbital_period: "463",
      diameter: "19720",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "ocean",
      surface_water: "100",
      population: "1000000000",
      residents: [
        "https://swapi.dev/api/people/22/",
        "https://swapi.dev/api/people/72/",
        "https://swapi.dev/api/people/73/",
      ],
      films: ["https://swapi.dev/api/films/5/"],
      created: "2014-12-10T12:45:06.577000Z",
      edited: "2014-12-20T20:58:18.434000Z",
      url: "https://swapi.dev/api/planets/10/",
    },
  ],
};

describe("Teste Star Wars", () => {
  test("1- O título é renderizado", () => {
    render(<App />);
    const titleElement = screen.getByRole("heading", { name: /star wars/i });
    expect(titleElement).toBeInTheDocument();
  });

  test("2- É encontrado o input search", () => {
    render(<App />);
    const inputSearch = screen.getByRole("textbox");
    expect(inputSearch).toBeInTheDocument();
  });

  test("3- Renderiza título da tabela", () => {
    render(<App />);
    const tableTitle = screen.getByRole("columnheader", { name: /name/i });
    expect(tableTitle).toBeInTheDocument();
  });

  test("4- Renderiza tabela", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockaPlanets),
    });
    render(<App />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  test("5- Testa chamada da API", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockaPlanets),
    });
    await act(async () => {
      render(<App />);
    });
    expect(global.fetch).toBeCalledTimes(1);
  });

  test("6- Testa se a tabela renderiza 11 linhas", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockaPlanets),
    });
    await act(async () => {
      render(<App />);
    });
    const table = screen.getByRole("table");
    expect(table.rows.length).toBe(11);
  });

  test("7- Testa se renderiza o nome do primeiro planeta na tabela", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockaPlanets),
    });
    await act(async () => {
      render(<App />);
    });
    const table = screen.getByRole("table");
    expect(table.rows[1].cells[0]).toHaveTextContent("Tatooine");
  });

  test("8- É encontrado o input search planets by name ", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockaPlanets),
    });
    await act(async () => {
      render(<App />);
    });
    const inputSearch = screen.getByRole("textbox");
    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, "Tatooine");
  });

  test("10- Testa funcionamento do filtro search planets by name", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockaPlanets),
    });
    await act(async () => {
      render(<App />);
    });
    const inputSearch = await screen.findByTestId("name-filter");
    userEvent.type(inputSearch, "h");
    expect(await screen.findAllByTestId("planet-name")).toHaveLength(2);
  });

  test("11- Testa os múltiplos filtros", async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockaPlanets),
    });
    await act(async () => {
      render(<App />);
    });
    const selectColumn = await screen.findByTestId("column-filter");
    expect(selectColumn).toBeInTheDocument();
    userEvent.selectOptions(selectColumn, ["population"]);
    const selectComparison = await screen.findByTestId("comparison-filter");
    expect(selectComparison).toBeInTheDocument();
    userEvent.selectOptions(selectComparison, "maior que");
    const inputNumber = await screen.findByTestId("value-filter");
    expect(inputNumber).toBeInTheDocument();
    userEvent.type(inputNumber, "1000000000");
    const buttonFilter = await screen.findByTestId("button-filter");
    expect(buttonFilter).toBeInTheDocument();
    userEvent.click(buttonFilter);
  });

  test("12- Testa ordem ascendente e descendete", async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockaPlanets),
  });
    await act(async () => {
      render(<App />);
    });
    const selectOrder = await screen.findByTestId("column-sort");
    expect(selectOrder).toBeInTheDocument();
    userEvent.selectOptions(selectOrder, ["population"]);
    const selectDesc = await screen.findByTestId("column-sort-input-desc");
    expect(selectDesc).toBeInTheDocument();
    userEvent.click(selectDesc);
    const selectAsc = await screen.findByTestId("column-sort-input-asc");
    expect(selectAsc).toBeInTheDocument();
    userEvent.click(selectAsc);
    const orderButton = await screen.findByTestId("column-sort-button");
    expect(orderButton).toBeInTheDocument();
    userEvent.click(orderButton);
  });

  test("13- Teste de filtros", async () => {
    jest.spyOn(global, 'fetch')
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockaPlanets),
    });
    await act(async () => {
      render(<App />);
    });
    const selectColumn = await screen.findByTestId("column-filter");
    expect(selectColumn).toBeInTheDocument();
    userEvent.selectOptions(selectColumn, ["diameter"]);
    const selectComparison = await screen.findByTestId("comparison-filter");
    expect(selectColumn).toBeInTheDocument();
    userEvent.selectOptions(selectComparison, ["maior que"]);
    const inputNumber = await screen.findByTestId("value-filter");
    expect(inputNumber).toBeInTheDocument();
    userEvent.type(inputNumber, "10000");
    const buttonFilter = await screen.findByTestId("button-filter");
    userEvent.click(buttonFilter);

    userEvent.selectOptions(selectColumn, ["population"]);
    userEvent.selectOptions(selectComparison, ["igual a"]);
    userEvent.type(inputNumber, "100000");
    userEvent.click(buttonFilter);

    userEvent.selectOptions(selectColumn, ["rotation_period"]);
    userEvent.selectOptions(selectComparison, ["menor que"]);
    userEvent.type(inputNumber, "30");
    userEvent.click(buttonFilter);

    const selectAsc = await screen.findByTestId("column-sort-input-asc");
    expect(selectAsc).toBeInTheDocument();
    userEvent.click(selectAsc);

    const orderButton = await screen.findByTestId("column-sort-button");
    expect(orderButton).toBeInTheDocument();
    userEvent.click(orderButton);
    
  });
});
