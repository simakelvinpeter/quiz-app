"""Optional: pip install playwright, then python tests/browser_test.py."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1] / "Quiz App"
server = ThreadingHTTPServer(("127.0.0.1", 0), partial(SimpleHTTPRequestHandler, directory=str(root)))
threading.Thread(target=server.serve_forever, daemon=True).start()
try:
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="msedge", headless=True)
        page = browser.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.goto(f"http://127.0.0.1:{server.server_port}")
        for subject, category in [("programming", "general"), ("programming", "python"), ("programming", "cpp"), ("science", "physics"), ("science", "chemistry")]:
            page.select_option("#subject", subject)
            assert page.locator("#start-btn").is_disabled()
            page.select_option("#subcategory", category)
            page.click("#start-btn")
            seen = set()
            for index in range(20):
                assert page.locator("#next-btn").is_disabled()
                prompt = page.locator(".question").inner_text()
                assert prompt not in seen
                seen.add(prompt)
                answer = page.evaluate("questions[questionIndex].answer")
                options = page.locator(".option")
                for option in options.all():
                    if option.get_attribute("data-answer") == answer:
                        option.click()
                        break
                assert page.locator(".score").inner_text() == f"Score: {index + 1}/20"
                options.first.click(force=True)
                assert page.locator(".score").inner_text() == f"Score: {index + 1}/20"
                assert page.locator("#quiz script").count() == 0
                page.click("#next-btn")
            assert page.locator(".results p").inner_text() == "Your score: 20/20"
            page.click("#restart-btn")
            assert page.locator("#subject").input_value() == ""
            assert page.locator("#subcategory").is_disabled()
        assert not errors, errors
        browser.close()
        print("All five quizzes pass scoring, locking, code display and restart checks.")
finally:
    server.shutdown()
    server.server_close()
