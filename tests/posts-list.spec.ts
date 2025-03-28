import { test, expect } from "@playwright/test";

test("create delete post list", async ({ page }) => {
  await page.goto("https://tech24view.ru");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("Test title");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("Test content");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(page.getByText("Test titleTest contentУдалить")).toBeVisible();

  await page.getByRole("button", { name: "Удалить" }).click();

  await expect(page.getByText("Test titleTest contentУдалить")).not.toBeVisible();
});
