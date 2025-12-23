# SafeRide - Smart Crash Detection System

A professional, responsive website for SafeRide, a smart crash detection system for vehicles. This website provides comprehensive information about the product, its features, and its capabilities.

## Features

- **Home Page**: Brand introduction, mission statement, and primary CTA
- **About Page**: Road safety problem explanation and SafeRide's solution
- **Features Page**: Detailed feature descriptions (Crash Detection, Live Tracking, SOS Alerts)
- **Contact Page**: Contact form for inquiries

## Project Structure

```
safe-ride/
├── index.html              # Home page
├── about.html              # About page
├── features.html           # Features page
├── contact.html            # Contact page
├── css/
│   ├── styles.css          # Main stylesheet
│   └── dashboard.css       # Additional styles (legacy, not actively used)
├── js/
│   ├── navigation.js       # Navigation menu handler
│   └── contact.js          # Contact form handler
└── README.md               # This file
```

## Setup Instructions

### Prerequisites

- A modern web browser
- Python 3.x (for local server) or Node.js (alternative)

### Step 1: Run Locally

**Option A: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option B: Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Option C: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### Step 2: Open in Browser

- Navigate to `http://localhost:8000`
- The website should load and display correctly

## Deployment

### Option 1: Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Set public directory to `.` (current directory)
   - Configure as single-page app: `No`
   - Don't overwrite `index.html`

4. **Deploy**
   ```bash
   firebase deploy --only hosting
   ```

5. Your site will be live at: `https://YOUR_PROJECT_ID.web.app`

### Option 2: Netlify

1. **Install Netlify CLI** (optional)
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**
   - Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or use CLI: `netlify deploy --prod`

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    --danger-color: #ef4444;
    /* ... */
}
```

### Content

- Edit HTML files to update text content
- Modify `index.html` for home page changes
- Update navigation in all HTML files if needed

## Troubleshooting

### Website looks broken

1. Make sure you're using a local server (not opening file directly)
2. Check browser console (F12) for errors
3. Ensure all files are in the correct folders

### Navigation not working

1. Check that `js/navigation.js` is loaded
2. Verify file paths are correct
3. Check browser console for JavaScript errors

### Contact form not working

1. The form is client-side only (no backend)
2. It will show a success message on submission
3. For actual email functionality, integrate with a backend service

## Notes

- This is a **demo/educational project** for academic evaluation
- Contact form is client-side only (no backend)
- All pages are static HTML with CSS and JavaScript
- No external dependencies required for basic functionality

## License

This project is created for academic evaluation and demonstration purposes.

## Support

For questions or issues:
- Review browser console (F12) for JavaScript errors
- Verify all files are in the project folder
- Check `QUICK_START.md` for setup instructions

---

**Built for SafeRide - Making roads safer through technology**
