# Etch-A-Sketch

A digital recreation of the classic mechanical drawing toy. Built to practice DOM manipulation, event handling, and interactive UI design.

## Features

- **Dynamic Drawing Grid:** Sketch smoothly across the canvas using mouse hover/click or keyboard controls.
- **Custom Grid Sizing:** Resize the canvas resolution (e.g., from 16x16 up to 100x100) for fine pixel art or broad strokes.
- **Color Modes:**
  - Classic dark gray/black stylus
  - Rainbow/random RGB mode
  - Progressive shading (darkens squares by 10% per pass)
  - Eraser tool
- **Shake to Clear:** Reset the canvas back to a blank slate with a single click.

## Tech Stack

- **Frontend:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript _(or replace with Python / Turtle / Pygame)_
- **Tools:** Git, GitHub

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge) — _no additional dependencies required for the web version._

### Installation & Running Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com
   ```

2. **Navigate to the project directory:**

   ```bash
   cd etch-a-sketch
   ```

3. **Launch the application:**
   - **Web Version:** Open `index.html` directly in your browser, or run a local development server (e.g., VS Code Live Server).
   - **Python Version (if applicable):**
     ```bash
     python main.py
     ```

## Usage

1. Move your cursor across the drawing screen (or use the arrow / `WASD` keys) to draw lines.
2. Select a **Color Mode** from the control panel to change brush behavior.
3. Use the **Grid Size** slider/button to clear the board and set a new pixel density.
4. Click **Clear / Shake** to wipe the screen clean.

## Future Improvements

- [ ] Add a color picker for custom brush colors
- [ ] Implement a "Download as PNG" button to save artwork
- [ ] Add touch-screen support for mobile drawing
- [ ] Include subtle dial rotation animations on user input

## License

Distributed under the MIT License. See `LICENSE` for more information.
