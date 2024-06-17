import crypto from "crypto";

export async function takeScreenShotOfPageAt(path: String, page: any) {
    await page.screenshot({path:path, fullPage:true});
}

export async function takeScreenShotOfElementAt(path: String, locator: any) {
    console.log("========>" + typeof(locator));
    await locator.screenshot({path:path});
}

export async function getRandomNumber() {
    return Math.floor(Math.random() * 1000 + 5);
}

export async function getRandomString() {
    return crypto.randomBytes(5).toString("hex");;
}