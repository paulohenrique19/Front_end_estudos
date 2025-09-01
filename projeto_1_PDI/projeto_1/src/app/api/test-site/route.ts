import { NextResponse } from "next/server"
import { chromium } from "playwright"

export async function POST(req: Request) {
  const { url } = await req.json()

  try {
    const browser = await chromium.launch({
      headless: true, 
    })

    const context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
        "Chrome/117.0.0.0 Safari/537.36",
      viewport: { width: 1280, height: 800 },
    })

    const page = await context.newPage()

    try {
      await page.goto(url, { timeout: 20000, waitUntil: "domcontentloaded" })

      const screenshot = await page.screenshot({ type: "png" })
      await browser.close()

      return NextResponse.json({
        success: true,
        message: `✅ Site carregado com sucesso`,
        screenshot: `data:image/png;base64,${screenshot.toString("base64")}`,
      })
    } catch (err: any) {
      await browser.close()
      return NextResponse.json({
        success: false,
        message: `❌ Erro ao carregar: ${err.message}`,
      })
    }
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: `❌ Erro geral: ${err.message}`,
    })
  }
}
