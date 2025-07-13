# Digital Stream Website

A modern, responsive website for Digital Stream - your gateway to premium content, tools, and resources, all for free!

## Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Chatbot with OpenRouter Deepseek R1 API integration
  - WhatsApp channel button
  - Smooth scrolling navigation
  - Animated content cards
- **Multiple Pages**: 
  - Homepage with category overview
  - Separate pages for each category (Premium Accounts, Ebooks, Games, etc.)
  - About Me page with timeline and statistics
  - Contact page with Google Forms integration
  - Sitemap page
- **Social Media Integration**: Links to Facebook, Instagram, Twitter, WhatsApp, and YouTube
- **Font Awesome Icons**: Professional icons throughout the site

## File Structure

```
digital-stream-website/
├── index.html              # Homepage
├── about.html              # About Me page
├── contact.html            # Contact page
├── sitemap.html            # Sitemap page
├── premium-accounts.html   # Premium Accounts category
├── ebooks.html            # Premium Ebooks category
├── games.html             # Paid Games category
├── courses.html           # Computer Courses category
├── coupons.html           # Discount Coupons category
├── tools.html             # Premium Tools category
├── hacking.html           # Ethical Hacking category
├── tips-tricks.html       # Tips & Tricks category
├── style.css              # Main stylesheet
├── script.js              # JavaScript functionality
├── README.md              # This file
└── todo.md                # Development checklist
```

## Deployment on GitHub Pages

### Method 1: Direct Upload

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" as source
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be available at `https://yourusername.github.io/repository-name`

### Method 2: Using Git

1. Create a new repository on GitHub
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   ```
3. Copy all website files to the cloned repository folder
4. Add, commit, and push the files:
   ```bash
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```
5. Enable GitHub Pages in repository settings (same as Method 1, steps 3-7)

## Customization

### WhatsApp Channel Integration

1. Open `script.js`
2. Find the line: `const whatsappChannelURL = 'https://chat.whatsapp.com/YOUR_CHANNEL_INVITE_LINK';`
3. Replace `YOUR_CHANNEL_INVITE_LINK` with your actual WhatsApp channel invite link

### Google Forms Integration

1. Create a Google Form for contact submissions
2. Get the embed code from Google Forms
3. Open `contact.html`
4. Replace the placeholder in the "Send a Message" section with your Google Forms embed code

### Chatbot API Integration

1. Sign up for OpenRouter API access
2. Get your API key
3. Open `script.js`
4. Find the `handleChatbotResponse` function
5. Replace the simulated response logic with actual API calls to OpenRouter Deepseek R1

### Social Media Links

Update the social media links in all HTML files:
- Find `<a href="#" class="social-link">` elements
- Replace `#` with your actual social media URLs

### Logo Customization

To add your actual logo:
1. Add your logo image file to the project directory
2. In all HTML files, find `<div class="logo-placeholder">`
3. Replace the placeholder with an `<img>` tag pointing to your logo file

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- Optimized CSS with modern properties
- Efficient JavaScript with debounced scroll events
- Lazy loading for images (when implemented)
- Minified and compressed assets ready for production

## SEO Features

- Semantic HTML structure
- Meta descriptions on all pages
- Proper heading hierarchy
- Alt text for images (when added)
- Clean URL structure

## Accessibility Features

- Keyboard navigation support
- Focus indicators
- Screen reader friendly markup
- High contrast color scheme
- Responsive text sizing

## Support

For questions or support regarding this website template, please refer to the contact information provided on the Contact page.

## License

This website template is provided as-is for the Digital Stream project. Feel free to modify and customize according to your needs.

---

**Note**: Remember to update placeholder content, add your actual social media links, integrate real APIs, and customize the design to match your brand before going live.

