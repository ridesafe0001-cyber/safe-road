# Quick Start Guide - SafeRide Website

## Step-by-Step Instructions to Run the Website

### Method 1: Using Python (Recommended)

#### Step 1: Open Terminal/Command Prompt
- Press `Win + R`, type `cmd`, and press Enter
- Or open PowerShell
- Navigate to the project folder:
  ```bash
  cd "C:\Users\Archana\Desktop\safe ride"
  ```

#### Step 2: Start the Web Server
```bash
python -m http.server 8000
```

**Note:** If you get an error saying Python is not found:
- Install Python from [python.org](https://www.python.org/downloads/)
- Or use Method 2 below

#### Step 3: Open in Browser
- The server will start and show: `Serving HTTP on 0.0.0.0 port 8000`
- Open your browser and go to: **http://localhost:8000**
- Or press `Ctrl + Click` on the link if it appears in the terminal

#### Step 4: Stop the Server
- Press `Ctrl + C` in the terminal to stop the server

---

### Method 2: Using Node.js (Alternative)

#### Step 1: Install Node.js (if not installed)
- Download from [nodejs.org](https://nodejs.org/)
- Install it

#### Step 2: Install http-server
```bash
npm install -g http-server
```

#### Step 3: Start the Server
```bash
http-server -p 8000
```

#### Step 4: Open in Browser
- Go to: **http://localhost:8000**

---

### Method 3: Using VS Code Live Server

#### Step 1: Install VS Code
- Download from [code.visualstudio.com](https://code.visualstudio.com/)

#### Step 2: Install Live Server Extension
- Open VS Code
- Go to Extensions (Ctrl + Shift + X)
- Search for "Live Server"
- Click Install

#### Step 3: Run the Website
- Right-click on `index.html` in VS Code
- Select "Open with Live Server"
- Browser will open automatically

---

### Method 4: Direct File Opening (Limited Functionality)

#### Step 1: Navigate to Project Folder
- Open File Explorer
- Go to: `C:\Users\Archana\Desktop\safe ride`

#### Step 2: Open index.html
- Double-click `index.html`
- It will open in your default browser

**Note:** This method may have limitations with some JavaScript features due to browser security (CORS). Use a local server (Methods 1-3) for full functionality.

---

## What You'll See

1. **Home Page** - Brand introduction and mission
2. **About Page** - Problem and solution explanation
3. **Features Page** - Detailed feature descriptions
4. **Contact Page** - Contact form (works without backend)

---

## Troubleshooting

### "Python is not recognized"
- Install Python from [python.org](https://www.python.org/downloads/)
- Make sure to check "Add Python to PATH" during installation

### "Port 8000 is already in use"
- Use a different port: `python -m http.server 8080`
- Then go to: `http://localhost:8080`

### Website looks broken
- Make sure you're using a local server (not opening file directly)
- Check browser console (F12) for errors
- Ensure all files are in the correct folders

---

## Quick Test Checklist

- [ ] Server is running (terminal shows "Serving HTTP...")
- [ ] Browser opens to http://localhost:8000
- [ ] Home page loads with SafeRide branding
- [ ] Navigation menu works
- [ ] Can navigate to all pages (Home, About, Features, Contact)
- [ ] Contact form shows success message when submitted
- [ ] Mobile menu works (resize browser to test)

---

## Need Help?

- Check `README.md` for detailed documentation
- Review browser console (F12) for any errors
- Ensure all files are in the project folder
