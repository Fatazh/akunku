# 🚀 Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript - perfect for IT beginners to showcase their skills and projects.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with gradient colors and smooth animations
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions
- 🌙 **Dark/Light Mode Ready**: Easy to customize with CSS variables
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **SEO Optimized**: Semantic HTML5 structure for better search engine visibility
- 🚀 **GitHub Pages Ready**: Deploy instantly to GitHub Pages

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern styling with animations and transitions
- **JavaScript (Vanilla)**: Interactive features and dynamic content
- **Font Awesome**: Beautiful icons for social links and skills
- **Google Fonts**: Inter font for modern typography

## 📁 Project Structure

```
myAkun/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # Interactive JavaScript
├── README.md           # This file
└── assets/             # Images and other assets (optional)
    ├── profile.jpg     # Your profile picture
    └── projects/       # Project screenshots
```

## 🚀 Quick Start

### 1. Clone or Download
Download this repository or clone it to your local machine.

### 2. Customize Your Portfolio

#### Personal Information
Edit `index.html` and update the following:
- Replace "Your Name" with your actual name
- Update your email address
- Add your social media links
- Update your location and education

#### Profile Picture
Replace the placeholder image in the hero section:
```html
<!-- Find this line in index.html -->
<img src="https://via.placeholder.com/150" alt="Profile">
<!-- Replace with -->
<img src="assets/profile.jpg" alt="Your Name">
```

#### Projects
Update the projects section with your actual projects:
- Change project titles and descriptions
- Update technology tags
- Replace placeholder images with your project screenshots
- Add your GitHub repository links
- Add live demo links if available

#### Skills
Customize the skills section to match your technical abilities:
```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

### 3. Deploy to GitHub Pages

#### Option A: Using GitHub Web Interface
1. Push your code to a GitHub repository
2. Go to repository settings
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be live at `https://yourusername.github.io/repository-name`

#### Option B: Using Command Line
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Create repository on GitHub first, then:
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main

# Enable GitHub Pages in repository settings
```

## 🎨 Customization Guide

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;    /* Main brand color */
    --secondary-color: #764ba2;  /* Secondary accent */
    --accent-color: #ff6b6b;      /* Highlight color */
    /* ... other variables */
}
```

### Fonts
Change the font by updating the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the CSS:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Adding New Sections
1. Add the section HTML in `index.html`
2. Add corresponding styles in `styles.css`
3. Update the navigation menu
4. Add smooth scrolling behavior in `script.js`

## 📱 Mobile Optimization

The portfolio is fully responsive and includes:
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Optimized images and layouts
- Readable typography on all screen sizes

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📈 Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Minify CSS/JS**: Use minification tools for production
3. **Enable Caching**: Configure proper cache headers
4. **Use CDN**: Host assets on CDN for faster loading

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Need Help?

If you encounter any issues while setting up your portfolio:

1. Check the browser console for errors
2. Ensure all file paths are correct
3. Verify your GitHub Pages settings
4. Test locally before deploying

## 🌟 Show Your Support

If you find this portfolio template helpful:
- ⭐ Star this repository
- 🐦 Follow me on social media
- 📧 Share your feedback

---

**Built with ❤️ for the developer community**

Happy coding! 🎉
