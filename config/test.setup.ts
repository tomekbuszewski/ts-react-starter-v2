import { server } from "@mocks";

import "@testing-library/jest-dom";

beforeAll(() => {
  try {
    server.listen();
  } catch (error) {
    console.error("Unable to start the mocking server", error);
  }
});

afterEach(() => {
  try {
    server.resetHandlers();
  } catch (error) {
    console.error("Unable to reset the handlers", error);
  }
});

afterAll(() => {
  try {
    server.close();
  } catch (error) {
    console.error("Unable to close the mocking server", error);
  }
});
