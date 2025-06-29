# Calculator
A sleek, responsive calculator web application built with HTML, CSS (Tailwind), and JavaScript. Features a beautiful dark/light mode toggle and full keyboard support.

## ✨ Features

### 🎨 Design & UI
- **Modern Interface**: Clean, minimalist design with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Button Animations**: Smooth hover effects and active states
- **Professional Icons**: Font Awesome icons for enhanced visual appeal

### 🔢 Calculator Functions
- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Decimal Support**: Handle decimal numbers with proper validation
- **Advanced Controls**:
  - **Clear (C)**: Reset everything
  - **Clear Entry (CE)**: Clear current input
  - **Backspace (⌫)**: Delete last character
- **Error Handling**: Graceful handling of invalid operations and division by zero

### ⌨️ User Experience
- **Full Keyboard Support**: Use your keyboard for all operations
- **Memory**: Remembers your preferred theme (dark/light mode)
- **Visual Feedback**: Button press animations and state changes
- **Overflow Protection**: Display handles long numbers gracefully

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Styling with Tailwind CSS framework
- **JavaScript (ES6+)**: Interactive functionality and state management
- **Font Awesome**: Icons for enhanced UI
- **LocalStorage**: Persistent theme preference storage

## 📦 Installation & Setup

### Option 1: Direct Download
1. Download or clone this repository
```bash
git clone https://github.com/your-username/calculator.git
```

2. Open `index.html` in your web browser
```bash
cd calculator
open index.html
```

### Option 2: Live Server (Recommended for development)
1. Clone the repository
2. Open with Live Server in VS Code or your preferred development environment
3. The calculator will be available at `http://localhost:5500` (or your configured port)

### Option 3: GitHub Pages
1. Fork this repository
2. Go to Settings → Pages
3. Select source as "Deploy from a branch"
4. Choose `main` branch
5. Your calculator will be live at `https://your-username.github.io/calculator`

## 🎮 Usage

### Mouse/Touch Controls
- Click any number button (0-9) to input numbers
- Click operation buttons (+, -, ×, ÷) for calculations
- Click "=" to calculate the result
- Use "C" to clear all, "CE" to clear entry, "⌫" to backspace
- Toggle the theme switch at the top for dark/light mode

### Keyboard Controls
| Key | Function |
|-----|----------|
| `0-9` | Number input |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `.` | Decimal point |
| `Enter` or `=` | Calculate result |
| `Escape` or `C` | Clear all |
| `Backspace` | Delete last character |


## 🎯 Key Features Explained

### Theme Persistence
The calculator remembers your preferred theme (dark/light) using localStorage:
```javascript
// Save theme preference
localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

// Load theme on startup
let isDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
```

### Error Handling
Robust error handling for mathematical operations:
- Division by zero detection
- Invalid expression handling
- Incomplete operation prevention

### Responsive Design
Built with Tailwind CSS for mobile-first responsive design:
- Flexible grid layout
- Touch-friendly button sizes
- Adaptive typography

## 🔧 Customization

### Changing Colors
Modify the Tailwind classes in `index.html`:
- **Primary buttons**: `bg-gray-200 dark:bg-gray-600`
- **Operator buttons**: `bg-yellow-400 hover:bg-yellow-500`
- **Action buttons**: `bg-green-500`, `bg-red-500`, etc.

### Adding Features
The code is well-structured for easy extension:
- Add new functions in the JavaScript section
- Extend the button grid in HTML
- Modify styling with Tailwind classes

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Ideas for Contributions
- [ ] Scientific calculator functions (sin, cos, tan, etc.)
- [ ] History of calculations
- [ ] Copy to clipboard functionality
- [ ] Keyboard shortcut hints
- [ ] More themes/color schemes
- [ ] Unit conversion features

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first CSS framework
- **Font Awesome** for the beautiful icons
- **MDN Web Docs** for JavaScript references
- **GitHub** for hosting and version control

## 📧 Contact

**Mohamed Atef ** - [LinkedIn](https://www.linkedin.com/in/mohamed-atef-088a55272)

**Project Link**: [GitHub](https://github.com/MohamedAtef72/smart-calculator)

---
