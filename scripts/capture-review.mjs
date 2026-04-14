import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.env.CAPTURE_URL || "http://127.0.0.1:4173";
const rootDir = process.cwd();
const screenshotDir = path.join(rootDir, "deliverables", "screenshots");
const videoDir = path.join(rootDir, "deliverables", "video");

fs.mkdirSync(screenshotDir, { recursive: true });
fs.mkdirSync(videoDir, { recursive: true });

const sections = [
  { selector: "#top", file: "01-hero-desktop.png" },
  { selector: "#menu", file: "02-menu-desktop.png" },
  { selector: "#galeri", file: "03-galeri-desktop.png" },
  { selector: "#layanan", file: "04-layanan-desktop.png" },
  { selector: "#ulasan", file: "05-ulasan-desktop.png" },
  { selector: "#lokasi", file: "06-lokasi-desktop.png" },
];

async function captureDesktopScreenshots(browser) {
  const context = await browser.newContext({ viewport: { width: 1512, height: 920 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  for (const section of sections) {
    await page.locator(section.selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await page.screenshot({
      path: path.join(screenshotDir, section.file),
      fullPage: false,
    });
  }

  await context.close();
}

async function captureMobileScreenshot(browser) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: path.join(screenshotDir, "07-hero-mobile.png"),
    fullPage: false,
  });
  await context.close();
}

async function recordWalkthroughVideo(browser) {
  const context = await browser.newContext({
    viewport: { width: 1512, height: 920 },
    recordVideo: {
      dir: videoDir,
      size: { width: 1512, height: 920 },
    },
  });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  const stopPoints = ["#top", "#menu", "#galeri", "#layanan", "#ulasan", "#lokasi"];
  for (const selector of stopPoints) {
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(2200);
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  await page.waitForTimeout(2000);

  const video = page.video();
  await page.close();
  await context.close();

  const videoPath = await video.path();
  const targetPath = path.join(videoDir, "mula-patisserie-review.webm");
  fs.copyFileSync(videoPath, targetPath);
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  try {
    await captureDesktopScreenshots(browser);
    await captureMobileScreenshot(browser);
    await recordWalkthroughVideo(browser);
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
