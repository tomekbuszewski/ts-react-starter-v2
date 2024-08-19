import { expect, test } from "@playwright/test";

test("should fetch data from the API", async ({ page }) => {
  await page.goto("/with-fetch");

  await expect(page.getByText("Activity 1")).toBeVisible();
});

test("should navigate to children pages", async ({ page }) => {
  await page.goto("/with-fetch");

  await page.getByRole("link", { name: "Activity 1" }).click();

  await expect(page.getByText("Activity 1")).toBeVisible();
  await expect(page).toHaveURL(/\/with-fetch\/1/);
});
